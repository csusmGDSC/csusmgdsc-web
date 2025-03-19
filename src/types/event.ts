import { Room } from "./room";

export interface Event {
  id: string;
  title: string;
  room?: Room | null;
  tags?: string[];
  start_time: Date;
  end_time: Date;
  type: keyof typeof IOTA_TO_EVENT_TYPE;
  location?: string;
  date: Date | null;
  repository_url?: string;
  slides_url?: string;
  image_src?: string | null;
  virtual_url?: string;
  description: string;
  about?: string;
  created_at: Date;
  updated_at: Date;
  created_by?: string;
}

export const EVENT_TYPES = [
  "virtual",
  "leetcode",
  "hackathon",
  "meeting",
  "project",
  "workshop",
  "competition",
  "challenge",
  "other",
] as const;

export const EVENT_TYPE_TO_IOTA = Object.fromEntries(
  EVENT_TYPES.map((pos, index) => [pos, index + 1])
) as Record<(typeof EVENT_TYPES)[number], number>;

export const IOTA_TO_EVENT_TYPE = Object.fromEntries(
  Object.entries(EVENT_TYPE_TO_IOTA).map(([key, value]) => [value, key])
) as Record<number, (typeof EVENT_TYPES)[number]>;

export const EVENT_TYPE_DESCRIPTIONS: Record<
  (typeof EVENT_TYPES)[number],
  string
> = {
  virtual: "Events that are held online (i.e. Zoom, Google Meet, etc.)",
  leetcode: "Leetcode-related events",
  hackathon: "Coding competitions in the form of hackathons",
  meeting: "Club meetings, general gatherings, etc.",
  project: "Project team related events",
  workshop: "Workshops for learning new skills",
  competition: "General competitions",
  challenge: "General challenge",
  other: "Unrelated events",
};
