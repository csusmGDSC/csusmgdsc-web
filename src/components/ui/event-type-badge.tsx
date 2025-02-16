import { EventTypeIcons } from "@/config/icons";
import { BADGE_STYLES } from "@/config/styles";
import { cn } from "@/lib/utils";
import { EVENT_TYPES } from "@/types/event";

const EventTypeColors: Record<(typeof EVENT_TYPES)[number], string> = {
  leetcode: BADGE_STYLES.BLUE,
  hackathon: BADGE_STYLES.INDIGO,
  workshop: BADGE_STYLES.GREEN,
  other: BADGE_STYLES.GRAY,
  challenge: BADGE_STYLES.PINK,
  competition: BADGE_STYLES.RED,
  virtual: BADGE_STYLES.GREEN,
  meeting: BADGE_STYLES.PURPLE,
  project: BADGE_STYLES.GREEN,
};

export const EventTypeBadge = ({
  className,
  type = "other",
}: {
  className?: string;
  type?: (typeof EVENT_TYPES)[number];
}) => {
  return (
    <span
      key={type}
      className={cn(
        "px-3 py-1 rounded-sm text-sm w-fit font-medium flex gap-2 items-center",
        EventTypeColors[type],
        className
      )}
    >
      {EventTypeIcons[type]}
      {type}
    </span>
  );
};
