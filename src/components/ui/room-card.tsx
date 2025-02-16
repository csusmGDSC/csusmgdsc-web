import { IOTA_TO_ROOM_TYPE, Room } from "@/types/room";
import { Button } from "./button";
import { X } from "lucide-react";
import { EventTypeBadge } from "./event-type-badge";

export const RoomCard = ({
  building,
  room,
  type,
  capacity,
  removeButton,
  onRemove,
}: Room & { removeButton?: boolean; onRemove?: () => void }) => {
  if (!building || !room || !type) return <EventTypeBadge type={"virtual"} />;

  return (
    <div className="relative border border-border rounded-sm py-1 pl-2 pr-20 flex items-center gap-2 w-fit">
      <div>
        <div className="text-sm font-medium overflow-ellipsis truncate max-w-[150px]">
          {building} {room}
        </div>
        <div className="text-xs text-muted-foreground">
          {IOTA_TO_ROOM_TYPE[type] + " | capacity: " + capacity}
        </div>
      </div>

      {removeButton && onRemove && (
        <Button
          size="icon"
          className="absolute size-6 rounded-full -top-2 -right-3"
          onClick={() => {
            if (onRemove) onRemove();
          }}
        >
          <X className="size-4" />
        </Button>
      )}
    </div>
  );
};
