import { IOTA_TO_GDSC_POSITION } from "@/types/user";
import { z } from "zod";

export const ProfileSchema = z
  .object({
    first_name: z.string().min(2).max(100),
    last_name: z.string().min(2).max(100),
    email: z.string().email("Invalid email address").min(2).max(200),
    image: z.union([
      z.instanceof(File, { message: "Image is required" }),
      z.string().optional(), // Allow the existing image URL for editing mode
    ]),
    graduation_date: z.date().optional(),
    branch: z.number(),
    position: z.number(),
    bio: z.string().min(0).max(250).optional(),
    tags: z.array(z.string()),
    website: z.string().url().optional().or(z.literal("")), // OPTIONAL URL: https://github.com/colinhacks/zod/discussions/1254
    github: z.string().url().optional().or(z.literal("")),
    linkedin: z.string().url().optional().or(z.literal("")),
    instagram: z.string().url().optional().or(z.literal("")),
    twitter: z.string().url().optional().or(z.literal("")),
    discord: z.string().optional(),
  })
  .refine((data) => data.position !== null, {
    message: "Position is required.",
    path: ["position"],
  })
  .refine((data) => data.branch !== null, {
    message: "Branch is required.",
    path: ["branch"],
  })
  .refine(
    (data) => {
      if (
        (IOTA_TO_GDSC_POSITION[data.position] === "student" ||
          IOTA_TO_GDSC_POSITION[data.position] === "alumni") &&
        !data.graduation_date
      ) {
        return false;
      }
      return true;
    },
    {
      message: "Graduation date is required for students and alumni.",
      path: ["gradDate"],
    }
  );
