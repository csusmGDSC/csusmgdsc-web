import { LinkFormInput } from "@/components/form-inputs/link-form-input";
import { SimpleFormInput } from "@/components/form-inputs/simple-form-input";
import { TextAreaFormInput } from "@/components/form-inputs/textarea-form-input";
import { Button } from "@/components/ui/button";
import { TagsFormInput } from "@/features/onboarding/components/tags-form-input";
import { useImagePreview } from "@/hooks/use-image-preview";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";
import DateTimeFormField from "./date-time-form";
import { z } from "zod";
import { EventSchema } from "../../schemas/event-schema";
import { TypeSelectForm } from "../inputs/type-select-form";
import { IOTA_TO_EVENT_TYPE } from "@/types/event";

export const BasicInfoForm = () => {
  const form = useFormContext<z.infer<typeof EventSchema>>();
  const id = useId();
  const ref = useRef<HTMLInputElement>(null);
  const [isXs, setIsXs] = useState(window.innerWidth <= 160);
  const { imagePreview, setImagePreview } = useImagePreview(
    form.watch("imageSrc") || ""
  );

  useEffect(() => {
    const handleResize = () => setIsXs(window.innerWidth <= 160);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex relative items-center justify-center w-[calc(100%+2rem)] h-[250px] overflow-hidden bg-primary-foreground -m-4">
        <img
          src={imagePreview || ""}
          alt="event image"
          className={cn(imagePreview == "" && "hidden")}
        />

        <input
          type="file"
          className="hidden"
          ref={ref}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              form.setValue("imageSrc", file);
              setImagePreview(URL.createObjectURL(file));
            }
          }}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            ref.current?.click();
          }}
          className={cn(
            "text-primary/70 hover:text-blue/50 transition-colors rounded-sm bg-background absolute flex flex-col gap-2 items-center justify-center border border-dashed border-border py-12 px-20 lg:px-40",
            imagePreview !== "" && "hidden"
          )}
        >
          <LuImagePlus size={32} />
          <p>Click or drop event image</p>
        </button>

        <Button
          onClick={(e) => {
            e.preventDefault();
            form.setValue("imageSrc", undefined);
            setImagePreview("");
          }}
          variant="ghost"
          size="icon"
          className={cn(
            imagePreview == "" && "hidden",
            "absolute top-4 right-4 rounded-full p-0"
          )}
        >
          <X size={18} />
        </Button>
      </div>

      <div className="flex flex-col gap-12 xl:gap-4 xl:flex-row">
        <div className="flex-1 gap-4 flex flex-col">
          <SimpleFormInput
            placeholder="Enter title"
            id="title"
            name="title"
            label="Title"
            required
          />

          <TextAreaFormInput
            placeholder="Enter short description"
            id="description"
            name="description"
            label="Description"
            required
          />
        </div>

        <DateTimeFormField isXs={isXs} id={id} />
      </div>

      <TypeSelectForm name="type" />
      <TagsFormInput />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <LinkFormInput
          name="virtualURL"
          label="Meeting Link"
          placeholder="www.zoom.com"
          id={id}
          required={IOTA_TO_EVENT_TYPE[form.watch("type")] === "virtual"}
        />
        <LinkFormInput
          name="githubRepo"
          label="Github Repo"
          id={id}
          placeholder="www.github.com"
        />
        <LinkFormInput
          name="slidesURL"
          label="Link to slides"
          id={id}
          placeholder="www.sites.google.com"
        />
      </div>
    </div>
  );
};
