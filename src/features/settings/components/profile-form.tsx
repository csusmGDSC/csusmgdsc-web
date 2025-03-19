import { useEffect, useId } from "react";

// Form handling
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { SimpleFormInput } from "@/components/form-inputs/simple-form-input";
import { StatusFormInput } from "@/features/onboarding/components/status-form-input";
import {
  GDSC_POSITIONS_WITH_GRAD_DATE,
  IOTA_TO_GDSC_POSITION,
} from "@/types/user";
import { GradFormInput } from "@/features/onboarding/components/grad-form-input";
import { ProfileImageInput } from "@/components/form-inputs/profile-image-input";
import { BranchFormInput } from "@/features/onboarding/components/branch-form-input";
import { BioFormInput } from "@/features/onboarding/components/bio-form-input";
import { TagsFormInput } from "@/features/onboarding/components/tags-form-input";
import { SocialInputField } from "@/features/onboarding/components/socials-form-input";
import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { IoWarning } from "react-icons/io5";
import { useUser } from "@/api/auth-api";
import { useImagePreview } from "@/hooks/use-image-preview";
import { Loader2 } from "lucide-react";

import { useUpdateUser } from "@/api/user-api";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/config/query-keys";
import { ProfileSchema } from "@/features/onboarding/schemas/profile-schema";

const ProfileForm = () => {
  const queryClient = useQueryClient();
  const user = useUser();
  const { mutate, isPending, isSuccess } = useUpdateUser();
  const id = useId();

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      email: user?.email || "",
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      image: user?.image || "",
      graduation_date: user?.graduation_date
        ? new Date(user.graduation_date)
        : new Date(),
      branch: user?.branch ? user.branch : 0,
      position: user?.position ? user.position : 0,
      bio: user?.bio || "",
      tags: user?.tags || [],
      website: user?.website || "",
      github: user?.github || "",
      linkedin: user?.linkedin || "",
      instagram: user?.instagram || "",
      twitter: user?.twitter || "",
      discord: user?.discord || "",
    },
  });

  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER] });
    }
  }, [isSuccess, queryClient]);

  const { imagePreview, setImagePreview } = useImagePreview(
    form.watch("image")
  );

  const onSubmit = async (values: z.infer<typeof ProfileSchema>) => {
    console.log("VALUES: ", values);
    console.log("ERRORS: ", form.formState.errors);
    mutate(values);
  };

  return (
    <Card className="lg:col-span-2 p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* FIRST NAME INPUT */}
            <SimpleFormInput
              name="first_name"
              placeholder="First Name"
              id={id}
              label="First Name"
              required
              className="flex-1"
            />

            {/* LAST NAME INPUT */}
            <SimpleFormInput
              name="last_name"
              placeholder="Last Name"
              id={id}
              label="Last Name"
              required
              className="flex-1"
            />
          </div>

          {/* STATUS INPUT FOR USER'S GDSC POSITION (i.e student, alumni, advisor, etc) */}
          <StatusFormInput id={id} />

          {/* GRADUATION DATE INPUT FOR USER'S GDSC POSITION (i.e student, alumni) */}
          {GDSC_POSITIONS_WITH_GRAD_DATE.includes(
            // @ts-expect-error This is so dum
            IOTA_TO_GDSC_POSITION[form.watch("position")]
          ) && <GradFormInput />}

          {/* PROFILE IMAGE INPUT */}
          <ProfileImageInput
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />

          {/* ACCOUNT DETAILS INPUTS*/}
          <BranchFormInput />
          <BioFormInput />
          <TagsFormInput />
          <SocialInputField />

          <Button
            type="submit"
            disabled={isPending}
            onClick={() => {
              console.log("VALUES: ", form.getValues());
              console.log("ERRORS: ", form.formState.errors);
            }}
          >
            {isPending ? (
              <span className="flex items-center gap-2">
                Submitting... <Loader2 className="animate-spin" />
              </span>
            ) : (
              "Update Profile"
            )}
          </Button>

          {/* <div>
            <p className="text-sm flex items-center gap-2 font-semibold mb-2">
              <IoWarning /> Account Deletion
            </p>
            <Separator className="mb-4" />
            <Button
              className="bg-destructive hover:bg-destructive/80"
              type="button"
              onClick={(e) => {
                e.preventDefault();


              }}
            >
              Delete
            </Button>
          </div> */}
        </form>
      </Form>
    </Card>
  );
};

export default ProfileForm;
