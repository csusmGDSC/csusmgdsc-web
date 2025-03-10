// React imports
import React, { useId, useState } from "react";

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
import {
  GDSC_POSITIONS_WITH_GRAD_DATE,
  IOTA_TO_GDSC_BRANCH,
  IOTA_TO_GDSC_POSITION,
} from "@/types/user";
import { ProfileSchema } from "../schemas/profile-schema";
import { useOnboarding, useUser } from "@/api/auth-api";
import { useImagePreview } from "@/hooks/use-image-preview";
import { Loader2 } from "lucide-react";

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
  const { mutate, isPending } = useOnboarding();
  const user = useUser();
  const id = useId();

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "No Email",
      image: "https://avatar.iran.liara.run/public",
      graduation_date: user?.graduation_date || undefined,
      branch: 0,
      position: 0,
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

  const { imagePreview, setImagePreview } = useImagePreview(
    form.watch("image")
  );

  const onSubmit = async (values: z.infer<typeof ProfileSchema>) => {
    mutate(values);
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
              // @ts-ignore
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

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <span className="flex items-center gap-2">
                  Submitting... <Loader2 className="animate-spin" />
                </span>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </Card>

      <div className="relative">
        <ProfileCard
          name={form.watch("first_name") + " " + form.watch("last_name")}
          bio={form.watch("bio")}
          role={IOTA_TO_GDSC_BRANCH[form.watch("branch")]}
          imageSrc={imagePreview || ""}
          discord={form.watch("discord")}
          github={form.watch("github")}
          linkedin={form.watch("linkedin")}
          instagram={form.watch("instagram")}
          website={form.watch("website")}
          tags={form.watch("tags") || []}
          hideReport
          userId={user?.id || ""}
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
