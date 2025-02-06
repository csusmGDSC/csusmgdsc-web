import { EVENT_TYPES } from "@/types/gdsc-event";
import { z } from "zod";

export const EventSchema = z
  .object({
    title: z.string().min(2).max(100),
    room: z.string().nullable(),
    tags: z.array(z.string()).optional(),
    startTime: z.string(),
    endTime: z.string(),
    type: z.enum(EVENT_TYPES).nullable(),
    location: z.string().optional(),
    date: z.date(),
    githubRepo: z.string().url().optional().or(z.literal("")),
    slidesURL: z.string().url().optional().or(z.literal("")),
    virtualURL: z.string().url().optional().or(z.literal("")),
    imageSrc: z.instanceof(File).optional(),
    description: z.string().min(2).max(2000),
    about: z.string().max(200).optional(),
    extraImageSrcs: z.array(z.instanceof(File)).optional(),
    organizerIds: z.array(z.string()),
  })
  .refine((data) => data.type !== null, {
    message: "Event type is required.",
    path: ["type"],
  })
  .refine(
    (data) => {
      const time12HourPattern = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;

      return (
        time12HourPattern.test(data.startTime) &&
        time12HourPattern.test(data.endTime)
      );
    },
    {
      message: "Start and end time must be in the format 'HH:MM AM/PM'.",
      path: ["startTime", "endTime"],
    }
  );
