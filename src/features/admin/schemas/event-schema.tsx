import { IOTA_TO_EVENT_TYPE } from "@/types/event";
import { z } from "zod";

export const EventSchema = z
  .object({
    title: z.string().min(2).max(100),
    room: z
      .object({
        building: z.string(),
        room: z.number(),
        type: z.number().optional(),
        capacity: z.number().optional(),
      })
      .nullable(),
    tags: z.array(z.string()).optional(),
    startTime: z.date().nullable(),
    endTime: z.date().nullable(),
    type: z.number(),
    location: z.string().optional(),
    date: z.date(),
    githubRepo: z.string().url().optional().or(z.literal("")),
    slidesURL: z.string().url().optional().or(z.literal("")),
    virtualURL: z.string().url().optional().or(z.literal("")),
    imageSrc: z.instanceof(File).optional(),
    description: z.string().min(2).max(2000),
    about: z.string().max(2000).optional(),
    organizerIds: z.array(z.string()),
  })
  .refine((data) => data.type !== null, {
    message: "Event type is required.",
    path: ["type"],
  })
  .refine((data) => data.startTime !== null, {
    message: "Start time is required.",
    path: ["startTime"],
  })
  .refine((data) => data.endTime !== null, {
    message: "End time is required.",
    path: ["endTime"],
  })
  .refine(
    (data) =>
      (data.room !== null && IOTA_TO_EVENT_TYPE[data.type] === "virtual") ||
      IOTA_TO_EVENT_TYPE[data.type] === "leetcode",
    {
      message: "Room is required.",
      path: ["room"],
    }
  );
