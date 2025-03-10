import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  EVENT_TYPE_DESCRIPTIONS,
  EVENT_TYPE_TO_IOTA,
  EVENT_TYPES,
  IOTA_TO_EVENT_TYPE,
} from "@/types/event";
import { EventSchema } from "../../schemas/event-schema";
import { z } from "zod";
import { useFormContext } from "react-hook-form";
import { EventTypeIcons } from "@/config/icons";

export const TypeSelectForm = ({ name }: { name: "type" }) => {
  const form = useFormContext<z.infer<typeof EventSchema>>();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            Type <span className="text-red">*</span>
          </FormLabel>
          <FormDescription>Choose the type of the event</FormDescription>
          <FormControl>
            <RadioGroup
              className="gap-2"
              defaultValue={IOTA_TO_EVENT_TYPE[field.value] ?? ""}
              onValueChange={(value: (typeof EVENT_TYPES)[number]) =>
                field.onChange(EVENT_TYPE_TO_IOTA[value])
              }
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
                {EVENT_TYPES.map((type) => (
                  <div
                    key={type}
                    className="relative flex items-start gap-2 rounded-sm border border-input p-4 shadow-sm has-[[data-state=checked]]:border-ring"
                  >
                    {EventTypeIcons[type]}
                    <RadioGroupItem
                      value={type}
                      id={type}
                      aria-describedby={`1-description`}
                      className="order-1 after:absolute after:inset-0"
                    />
                    <div className="flex flex-row sm:flex-col grow items-start gap-3">
                      <div className="grid grow gap-2">
                        <Label htmlFor={type}>{type}</Label>
                        <p
                          id={`${type}-description`}
                          className="text-xs text-muted-foreground line-clamp-2"
                        >
                          {EVENT_TYPE_DESCRIPTIONS[type]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
