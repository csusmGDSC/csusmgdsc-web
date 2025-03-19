import { Dispatch, useRef } from "react";
import { Button } from "../ui/button";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

export const ProfileImageInput = ({
  imagePreview,
  setImagePreview,
}: {
  imagePreview: string | null;
  setImagePreview: Dispatch<React.SetStateAction<string | null>>;
}) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const form = useFormContext();

  const generateRandomAvatar = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    form.setValue(
      "image",
      `https://avatar.iran.liara.run/public/${randomNumber}`
    );
    setImagePreview(`https://avatar.iran.liara.run/public/${randomNumber}`);

    if (imageInputRef.current) {
      imageInputRef.current.value = ""; // Reset the file input
    }
  };

  return (
    <div>
      <p className="text-sm font-medium mb-2">Profile Image</p>
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-1">
          <img
            src={imagePreview || ""}
            alt="avatar"
            className="bg-background rounded-sm w-32 h-32 border border-border object-cover overflow-hidden"
          />
          <Button
            type="button"
            variant="ghost"
            className="text-xs p-1 h-fit"
            onClick={() => generateRandomAvatar()}
          >
            generate random
          </Button>
        </div>

        <Controller
          name="image"
          control={form.control}
          render={(field) => (
            <div>
              <Input
                className="pe-3 file:pe-3 file:me-3 file:border-0 file:border-e"
                type="file"
                accept="image/*"
                ref={imageInputRef}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  setImagePreview(
                    file ? URL.createObjectURL(file) : imagePreview
                  );
                  field.field.onChange(file);
                }}
              />
              <p className="text-xs text-muted-foreground my-4">
                .png, .jpeg, .webp files up to 8MB. Recommended size is
                256x256px.
              </p>
              {field.fieldState.error && (
                <p className="text-destructive">
                  {field.fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};
