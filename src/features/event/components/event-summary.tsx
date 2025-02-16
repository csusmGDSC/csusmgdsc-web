import { Button } from "@/components/ui/button";
import RandomBadge from "@/components/ui/random-badge";
import { Event } from "@/types/event";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventSummary({
  title,
  date,
  location,
  startTime,
  endTime,
  tags,
}: Event) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold line-clamp-2">{title}</h1>
        <Button size="lg">
          <Calendar /> Add to calendar
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag, index) => (
          <RandomBadge
            key={index}
            text={tag}
            className="rounded-sm text-xs p-1"
          />
        ))}
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <Calendar className="mr-3" />
          <span>{date?.toDateString()}</span>
        </div>

        <div className="flex items-center">
          <MapPin className="mr-3" />
          <span>{location}</span>
        </div>

        <div className="flex items-center">
          <Clock className="mr-3" />
          <span>
            {new Date(startTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {new Date(endTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
