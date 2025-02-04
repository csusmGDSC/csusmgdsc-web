import { useEffect, useId, useState } from "react";
import { ProfileSchema } from "../schemas/profile-schema";

// Form handling
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { SimpleFormInput } from "@/components/form-inputs/simple-form-input";
import { StatusFormInput } from "@/features/onboarding/components/status-form-input";
import { GDSC_POSITIONS_WITH_GRAD_DATE } from "@/types/gdsc-user";
import { GradFormInput } from "@/features/onboarding/components/grad-form-input";
import { ProfileImageInput } from "@/components/form-inputs/profile-image-input";
import { BranchFormInput } from "@/features/onboarding/components/branch-form-input";
import { BioFormInput } from "@/features/onboarding/components/bio-form-input";
import { TagsFormInput } from "@/features/onboarding/components/tags-form-input";
import { SocialInputField } from "@/features/onboarding/components/socials-form-input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IoWarning } from "react-icons/io5";

const ProfileForm = () => {
  //   const [previewMode, setPreviewMode] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const id = useId();

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
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

  const onSubmit = async (values: z.infer<typeof ProfileSchema>) => {
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
    <Card className="lg:col-span-2 p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
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

          <Button type="submit">Update Account</Button>
          <div>
            <p className="text-sm flex items-center gap-2 font-semibold mb-2">
              <IoWarning /> Account Deletion
            </p>
            <Separator className="mb-4" />
            <Button className="bg-destructive hover:bg-destructive/80">
              Delete
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default ProfileForm;
