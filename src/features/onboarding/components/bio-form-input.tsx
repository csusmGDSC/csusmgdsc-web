import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { ProfileSchema } from "../schemas/profile-schema";

export const BioFormInput = () => {
  const form = useFormContext<z.infer<typeof ProfileSchema>>();
  return (
    <FormField
      control={form.control}
      name="bio"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Bio</FormLabel>
          <FormControl>
            <div className="space-y-2">
              <Textarea
                placeholder="Tell us about yourself such as your skills, experience, and any other relevant information."
                className="rounded-sm"
                {...field}
              />
              <p
                className="mt-2 text-xs text-muted-foreground"
                role="region"
                aria-live="polite"
              >
                {field.value ? `${field.value.length} / 250` : "0 / 250"}
              </p>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
