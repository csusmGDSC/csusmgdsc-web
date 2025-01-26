import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export const SimpleFormInput = ({
  id,
  name,
  placeholder,
  label,
  required = false,
  className,
}: {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  required?: boolean;
  className?: string;
}) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>
            {label} {required && <span className="text-red">*</span>}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              className="transition-all duration-300 focus:ring-2 focus:ring-blue"
              placeholder={placeholder}
              aria-invalid={!!form.formState.errors.email}
              aria-describedby={`${id}-description`}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
