import { Calendar, Clock, MapPin } from "lucide-react";
import "add-to-calendar-button";
import { formatDate } from "date-fns";
import RandomBadge from "@/components/ui/random-badge";
import { Event } from "@/types/event";

export default function EventSummary({
  title,
  description,
  date,
  location,
  start_time,
  end_time,
  tags,
}: Event) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:items-center justify-between">
        <h1 className="text-3xl font-bold line-clamp-2">{title}</h1>
        <add-to-calendar-button
          name={title}
          description={description}
          startDate={formatDate(new Date(date as Date), "yyyy-MM-dd")}
          startTime={new Date(start_time).toTimeString()}
          endTime={new Date(end_time).toTimeString()}
          timeZone="America/Los_Angeles"
          location={location}
          options="'Apple','Google','MicrosoftTeams'"
          size="6"
          hideCheckmark="true"
          styleLight="--font:GoogleSans, system-ui, sans-serif; --btn-background: #4285F4; --btn-text: #fff;"
          label="Add to Calendar"
          buttonStyle="default"
        ></add-to-calendar-button>
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
          <span>{date && new Date(date)?.toDateString()}</span>
        </div>

        <div className="flex items-center">
          <MapPin className="mr-3" />
          <span>{location}</span>
        </div>

        <div className="flex items-center">
          <Clock className="mr-3" />
          <span>
            {new Date(start_time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {new Date(end_time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
