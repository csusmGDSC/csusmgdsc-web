import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

interface EventSummaryProps {
  date: string;
  time: string;
  location: string;
  title: string;
  tags: string[];
}

export default function EventSummary({
  date,
  time,
  location,
  title,
  tags,
}: EventSummaryProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold line-clamp-2">{title}</h1>
        <Button size="lg">
          <Calendar /> Add to calendar
        </Button>
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
