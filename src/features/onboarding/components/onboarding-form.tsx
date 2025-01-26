// React imports
import React, { useEffect, useId, useState } from "react";

// UI Components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProfileCard } from "@/features/profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SimpleFormInput } from "@/components/form-inputs/simple-form-input";
import { StatusFormInput } from "./status-form-input";
import { GradFormInput } from "./grad-form-input";
import { ProfileImageInput } from "@/components/form-inputs/profile-image-input";
import { BranchFormInput } from "./branch-form-input";
import { BioFormInput } from "./bio-form-input";
import { TagsFormInput } from "./tags-form-input";
import { SocialInputField } from "./socials-form-input";

// Form handling
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

// Utils and Hooks
import { toast } from "sonner";
import { GDSC_POSITIONS_WITH_GRAD_DATE } from "@/types/gdsc-user";
import { OnboardingSchema } from "../schemas/onboarding-schema";

/**
 * OnboardingForm component renders a multi-step form for user onboarding.
 * It includes fields for personal information, GDSC position, graduation date,
 * profile image, account details, and social media links.
 * The form handles image uploads, displays a profile card preview, and submits
 * the data, providing feedback on successful submission.
 *
 * Utilizes react-hook-form for form state management and validation with Zod schema.
 *
 * @returns JSX element representing the onboarding form.
 */
export const OnboardingForm = () => {
  //   const [previewMode, setPreviewMode] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const id = useId();

  const form = useForm<z.infer<typeof OnboardingSchema>>({
    resolver: zodResolver(OnboardingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "jaedonspurlock@gmail.com",
      image: "https://avatar.iran.liara.run/public",
      gradDate: undefined,
      branch: null,
      position: null,
      bio: "",
      tags: [],
      website: "",
      github: "",
      linkedin: "",
      instagram: "",
      twitter: "",
      discord: "",
    },
  });

  const image = form.watch("image");
  useEffect(() => {
    if (image instanceof File) {
      const imageUrl = URL.createObjectURL(image);
      setImagePreview(imageUrl);
      return () => URL.revokeObjectURL(imageUrl);
    }
    if (typeof image === "string") {
      setImagePreview(image);
    }
  }, [image]);

  const onSubmit = async (values: z.infer<typeof OnboardingSchema>) => {
    console.log(values);

    let imageUrl: string | undefined;
    if (values.image instanceof File) {
      // build FormData for uploading image
      const formData = new FormData();
      formData.append("file", values.image);

      // upload image
      imageUrl = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve("https://via.placeholder.com/150");
        }, 1000);
      });
    } else {
      imageUrl = values.image; // Use the existing image URL for updating mode
    }

    toast.success("Submitted successfully! Check console for imageUrl");
    console.log(imageUrl);
  };

  return (
    <ResponsiveSideBySide>
      <Card className="lg:col-span-2 p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            <div className="flex gap-6">
              {/* EMAIL PREVIEW (CAN'T CHANGE) */}
              <div>
                <p className="text-sm font-medium">
                  <span className="text-primary font-medium">Email</span>{" "}
                </p>

                <p className="text-muted-foreground text-sm">
                  {form.watch("email")}
                </p>
              </div>

              {/* EMAIL PREVIEW (CAN'T CHANGE) */}
              <div>
                <p className="text-sm font-medium">
                  <span className="text-primary font-medium">Created on</span>{" "}
                </p>

                <p className="text-muted-foreground text-sm">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* FIRST NAME INPUT */}
              <SimpleFormInput
                name="firstName"
                placeholder="First Name"
                id={id}
                label="First Name"
                required
                className="flex-1"
              />

              {/* LAST NAME INPUT */}
              <SimpleFormInput
                name="lastName"
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
              form.watch(
                "position"
              ) as (typeof GDSC_POSITIONS_WITH_GRAD_DATE)[number]
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

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </Card>

      <div className="relative">
        <ProfileCard
          name={form.watch("firstName") + " " + form.watch("lastName")}
          bio={form.watch("bio")}
          role={form.watch("branch") || ""}
          imageSrc={imagePreview || ""}
          discord={form.watch("discord")}
          github={form.watch("github")}
          linkedin={form.watch("linkedin")}
          instagram={form.watch("instagram")}
          website={form.watch("website")}
          tags={form.watch("tags") || []}
          hideReport
          userId="67683838-cc0a-4cd4-aa68-02756335285e"
          className="sticky top-12 h-fit"
        />
      </div>
    </ResponsiveSideBySide>
  );
};

export const ResponsiveSideBySide = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const components = React.Children.toArray(children);

  const [activeTab, setActiveTab] = useState("tab0");

  return (
    <div className="w-full relative">
      {/* Large screen: Side-by-side layout */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {components.map((component, index) => (
          <div key={index} className={index == 0 ? "col-span-2" : "col-span-1"}>
            {component}
          </div>
        ))}
      </div>

      {/* Small screen: Tabbed layout */}
      <div className="lg:hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger key={0} value={`tab0`}>
              Edit
            </TabsTrigger>

            <TabsTrigger key={1} value={`tab1`}>
              Preview
            </TabsTrigger>
          </TabsList>
          {components.map((component, index) => (
            <TabsContent
              key={index}
              value={`tab${index}`}
              className={index == 1 ? "mt-14" : "mt-6"}
            >
              {component}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
