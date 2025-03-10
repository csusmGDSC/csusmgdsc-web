export const IOTA_TO_ROOM_TYPE = {
  1: "lecture",
  2: "classroom",
  3: "auditorium",
  4: "other",
} as const;

// Reverse mapping: Converts "lecture" => 1, "classroom" => 2, etc.
export const ROOM_TYPE_IDS = Object.fromEntries(
  Object.entries(IOTA_TO_ROOM_TYPE).map(([key, value]) => [value, Number(key)])
) as Record<(typeof IOTA_TO_ROOM_TYPE)[keyof typeof IOTA_TO_ROOM_TYPE], number>;

export interface Room {
  building: string;
  room: number;
  type: keyof typeof IOTA_TO_ROOM_TYPE;
  capacity?: number;
}
