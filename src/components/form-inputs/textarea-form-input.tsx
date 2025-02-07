import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

export const TextAreaFormInput = ({
  id,
  name,
  placeholder,
  label,
  required = false,
  limit = 250,
}: {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  required?: boolean;
  limit?: number;
}) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col h-full">
          <FormLabel id={id}>
            {label} {required && <span className="text-red">*</span>}
          </FormLabel>
          <FormControl className="flex flex-col flex-1">
            <div className="relative flex flex-col flex-1 space-y-2 h-full">
              <Textarea
                placeholder={placeholder}
                className="rounded-sm h-full flex-1 resize-none"
                {...field}
              />
              <p
                className="absolute -bottom-6 left-0 mt-2 text-xs text-muted-foreground"
                role="region"
                aria-live="polite"
              >
                {field.value
                  ? `${field.value.length} / ${limit}`
                  : `0 / ${limit}`}
              </p>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
