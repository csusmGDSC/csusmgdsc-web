import { Separator } from "@/components/ui/separator";
import { useMultipleStepForm } from "@/hooks/use-multiple-step-form";
import { cn } from "@/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import { EventSchema } from "../../schemas/event-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { ReviewAndSubmit } from "./review-and-submit";
import { DescriptionAndMediaForm } from "./description-and-media";
import { BasicInfoForm } from "./basic-info-form";
import { AdminPageTitle } from "../admin-page-title";
import { useCreateEvent } from "@/api/event-api";
import { Loader2 } from "lucide-react";

enum STEPS {
  BASIC_INFORMATION = 0,
  DESCRIPTION_AND_MEDIA = 1,
  REVIEW_AND_SUBMIT = 2,
}

export default function CreateEvent() {
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    showSuccessMsg,
  } = useMultipleStepForm(3);

  const createEvent = useCreateEvent();

  const form = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      title: "",
      room: null,
      tags: [],
      startTime: null,
      endTime: null,
      type: 0,
      location: "California State University, San Marcos",
      date: new Date(),
      githubRepo: "",
      slidesURL: "",
      virtualURL: "",
      description: "",
      about: "",
      organizerIds: [],
    },
  });

  /**
   * Validates the current step of the event creation process form.
   *
   * @return {boolean} Whether the current step is valid.
   */
  const validateCurrentStep = async () => {
    let isValid = false;

    switch (currentStepIndex) {
      case STEPS.BASIC_INFORMATION:
        isValid = await form.trigger([
          "imageSrc",
          "title",
          "date",
          "description",
          "startTime",
          "endTime",
          "type",
          "tags",
          "virtualURL",
          "githubRepo",
          "slidesURL",
        ]);
        break;
      case STEPS.DESCRIPTION_AND_MEDIA:
        isValid = await form.trigger([
          "location",
          "organizerIds",
          "room",
          "about",
        ]);
        break;
      case STEPS.REVIEW_AND_SUBMIT:
        isValid = form.formState.isValid;
        break;
    }

    return isValid;
  };

  const handleSubmit = async (values: z.infer<typeof EventSchema>) => {
    const isValid = await validateCurrentStep();

    if (isLastStep && isValid) {
      console.log("SUBMITTING: ", values);
      createEvent.mutateAsync(values);
    }

    if (isValid) {
      nextStep();
    }
  };

  const stepComponents = [
    <BasicInfoForm />,
    <DescriptionAndMediaForm />,
    <ReviewAndSubmit />,
  ];

  if (showSuccessMsg && createEvent.isSuccess) {
    return (
      <main className="my-4 h-full">
        <h1 className="ml-4 text-primary/90 font-medium text-xl">
          Event Created!
        </h1>
        <Separator className="mt-4" />
      </main>
    );
  }

  return (
    <main className="my-4 h-full">
      <AdminPageTitle>Create Event</AdminPageTitle>

      <div className="flex h-full">
        <div className="flex-1 h-full">
          <FormProvider {...form}>
            <form className="space-y-6 p-4">
              {stepComponents[currentStepIndex]}

              {/* FORM BUTTONS */}
              <div className="w-full items-center flex justify-end gap-2 mt-10">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    previousStep();
                  }}
                  type="button"
                  variant="ghost"
                  className={`${
                    isFirstStep ? "invisible" : "visible hover:bg-inherit"
                  }`}
                >
                  Go Back
                </Button>

                <div className="flex items-center">
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit(form.getValues());
                    }}
                    className="relative px-10"
                    disabled={createEvent.isPending}
                  >
                    {createEvent.isPending && (
                      <Loader2 className="text-white animate-spin" />
                    )}
                    {isLastStep ? "Create" : "Next Step"}
                  </Button>
                </div>
              </div>

              {Object.entries(form.formState.errors).map(([key, value]) => (
                <div key={key} className="flex justify-end">
                  <p className="text-destructive text-xs">{value.message}</p>
                </div>
              ))}
            </form>
          </FormProvider>
        </div>
        <div className="w-[70px] lg:w-[300px] h-full border-l border-border flex flex-col gap-2">
          <p className="font-medium text-primary/90 lg:mx-4 mx-3 mt-2">Steps</p>

          <ProgressItem
            number={1}
            title="Basic Information"
            active={currentStepIndex === 0}
          />
          <ProgressItem
            number={2}
            title="Description and Media"
            active={currentStepIndex === 1}
          />
          <ProgressItem
            number={2}
            title="Review and Submit"
            active={currentStepIndex === 2}
          />
        </div>
      </div>
    </main>
  );
}

const ProgressItem = ({
  number,
  title,
  active = false,
}: {
  number: number;
  title: string;
  active?: boolean;
}) => (
  <div
    className={cn(
      "flex items-center gap-2 border-l-4 px-4 py-2",
      active ? "border-blue bg-blue/20" : "border-background"
    )}
  >
    <div
      className={cn(
        "rounded-full  w-6 h-6 text-xs flex items-center justify-center",
        active ? "bg-blue/30 text-blue" : "bg-gray-200"
      )}
    >
      {number}
    </div>
    <p className={cn("text-sm hidden lg:block", active && "text-blue/90")}>
      {title}
    </p>
  </div>
);
