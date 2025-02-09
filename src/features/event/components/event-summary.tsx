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
  date,
  time,
  location,
  title,
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
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <Calendar className="mr-3" />
          <span>{date}</span>
        </div>

        <div className="flex items-center">
          <MapPin className="mr-3" />
          <span>{location}</span>
        </div>

        <div className="flex items-center">
          <Clock className="mr-3" />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
