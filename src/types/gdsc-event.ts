export interface GDSCEvent {
  id: string;
  title: string;
  room?: CSUSM_ROOM | null;
  tags?: string[];
  startTime: Date; // "HH:MM AM/PM"
  endTime: Date; // "HH:MM AM/PM"
  type: (typeof EVENT_TYPES)[number];
  location?: string;
  date: Date | null;
  githubRepo?: string;
  slidesURL?: string;
  imageSrc?: string | null;
  virtualURL?: string;
  // extraImageSrcs?: string[] | null;
  description: string;
  about?: string;
  attendeeIds?: string[];
  organizerIds: string[];
  usersAttendedIds?: string[];
  createdAt: Date;
  updatedAt: Date;
  createdBy?: string;
}

/**
 * Interface representing a room in California State University San Marcos.
 * @interface CSUSM_ROOM
 * @property {string} building - The building where the room is located.
 * @property {number} room - The room number.
 * @property {"lecture" | "classroom" | "auditorium" | "other"} type - The type of the room.
 * @property {number} capacity - The maximum capacity of the room. May be undefined.
 */
export interface CSUSM_ROOM {
  building: string;
  room: number;
  type: (typeof ROOM_TYPES)[number];
  capacity?: number;
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

export const ROOM_TYPES = [
  "lecture",
  "classroom",
  "auditorium",
  "other",
] as const;
