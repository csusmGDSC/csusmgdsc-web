"use client";

import { DateInput, TimeField } from "@/components/ui/datefield-rac";
import { Clock } from "lucide-react";
import { Label } from "react-aria-components";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { EventSchema } from "../../schemas/event-schema";

export const TimeInput = ({
  name,
  label,
}: {
  name: "startTime" | "endTime";
  label: string;
}) => {
  const form = useFormContext<z.infer<typeof EventSchema>>();

  return (
    <TimeField
      className="space-y-2"
      onChange={(value) => {
        const timeObject = new Date();
        timeObject.setHours(value?.hour || 0, value?.minute, value?.second, 0);
        form.setValue(name, timeObject);
      }}
    >
      <Label className="text-sm">{label}</Label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 z-10 flex items-center justify-center ps-3 text-muted-foreground/80">
          <Clock size={16} strokeWidth={2} aria-hidden="true" />
        </div>
        <DateInput className="ps-9" />
      </div>
      {form.getFieldState(name).error && (
        <p className="text-red text-xs">
          {form.getFieldState(name)?.error?.message}
        </p>
      )}
    </TimeField>
  );
};
