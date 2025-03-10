import { Button } from "@/components/ui/button";
import RandomBadge from "@/components/ui/random-badge";
import { Event } from "@/types/event";
import { Calendar, Clock, MapPin } from "lucide-react";
import "add-to-calendar-button";
import { parse, format } from "date-fns";

interface EventSummaryProps {
  date: string;
  time: string;
  location: string;
  title: string;
  tags: string[];
  description: string;
}

export default function EventSummary({
  title,
  date,
  location,
  startTime,
  endTime,
  tags,
  description,
}: EventSummaryProps) {
  // Parse the date string and format it to "YYYY-MM-DD"
  const parsedDate = parse(date, "EEEE, MMMM d", new Date());
  const formattedDate = format(parsedDate, "yyyy-MM-dd");

  // Extract start and end times from the time string
  const [startTime, endTime] = time.split(" - ").map((t) => {
    const parsedTime = parse(t, "hh:mm a", new Date());
    return format(parsedTime, "HH:mm");
  });
}: Event) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold line-clamp-2">{title}</h1>
        <add-to-calendar-button
          name={title}
          description={description}
          startDate={formattedDate}
          startTime={startTime}
          endTime={endTime}
          timeZone="America/Los_Angeles"
          location={location}
          options="'Apple','Google','MicrosoftTeams'"
          size="10"
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
