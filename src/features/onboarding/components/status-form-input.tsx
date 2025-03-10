import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IconItem } from "@/components/ui/icon-item";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GDSC_POSITIONS_ICONS, GDSC_POSITIONS_SELECTABLE } from "@/types/user";
import { useFormContext } from "react-hook-form";

export const StatusFormInput = ({ id }: { id: string }) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="position"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            Status <span className="text-destructive">*</span>
          </FormLabel>
          <FormDescription>Select your current status.</FormDescription>
          <FormControl>
            <RadioGroup
              className="flex flex-wrap"
              defaultValue={field.value || ""}
              onValueChange={field.onChange}
              aria-orientation="horizontal"
              aria-labelledby={id}
            >
              {GDSC_POSITIONS_SELECTABLE.map((position) => (
                <label
                  key={position}
                  className="relative flex cursor-pointer flex-col items-center gap-3 rounded-sm border border-input px-4 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
                >
                  <RadioGroupItem
                    id={position}
                    value={position}
                    className="sr-only after:absolute after:inset-0"
                  />
                  <IconItem icon={GDSC_POSITIONS_ICONS[position]} />
                  <p className="text-xs font-medium leading-none text-foreground">
                    {position}
                  </p>
                </label>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
