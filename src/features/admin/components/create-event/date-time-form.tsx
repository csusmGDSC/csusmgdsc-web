import { FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { TimeInput } from "./time-input-form";
import { z } from "zod";
import { EventSchema } from "../../schemas/event-schema";

const DateTimeFormField = ({ isXs, id }: { isXs: boolean; id: string }) => {
  const form = useFormContext<z.infer<typeof EventSchema>>();
  return (
    <FormField
      control={form.control}
      name="date"
      render={({ field }) => (
        <div>
          <FormLabel htmlFor={id}>
            Date <span className="text-red">*</span>
          </FormLabel>
          <div
            className={cn(
              "rounded-sm border border-border mt-2 w-full",
              !isXs && "flex"
            )}
          >
            <Calendar
              mode="single"
              className="p-2"
              numberOfMonths={1}
              showOutsideDays={false}
              selected={field.value}
              onSelect={field.onChange}
              classNames={{
                day_selected:
                  "bg-blue hover:bg-darkBlue hover:text-white text-white",
              }}
            />
            <div
              className={cn(
                "border-border p-3 flex flex-col gap-4",
                !isXs ? "border-l border-t-0" : "border-t"
              )}
            >
              <TimeInput label="Starting time" name="startTime" />
              <TimeInput label="Ending time" name="endTime" />
            </div>
          </div>
          <FormMessage />
        </div>
      )}
    />
  );
};

export default DateTimeFormField;
