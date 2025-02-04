import { Input } from "../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useFormContext } from "react-hook-form";

export const LinkFormInput = ({
  id,
  name,
  label,
  required,
  placeholder,
  className,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
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
            <div className="flex rounded-sm">
              <span className=" inline-flex items-center rounded-s-sm border border-input bg-background px-3 text-sm text-muted-foreground">
                https://
              </span>
              <Input
                id={id}
                {...field}
                className="-ms-px rounded-s-none shadow-none"
                placeholder={placeholder}
                type="text"
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
