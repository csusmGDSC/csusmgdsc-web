import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, ExternalLink, MapPin, Tag } from "lucide-react";
import { Link } from "react-router-dom";

type EventType = "workshop" | "leetcode" | "hackathon" | "social";

interface UpcomingEventsProps {
  events: any[];
}

const typeColors: Record<EventType, string> = {
  workshop: "bg-blue/20 text-blue",
  leetcode: "bg-green/20 text-green",
  hackathon: "bg-purple-100 text-purple-800",
  social: "bg-yellow/20 text-yellow",
};

const EventCard = ({ event }: { event: any }) => (
  <Card className="overflow-hidden transition-all duration-300">
    <CardHeader>
      <CardTitle className="text-xl font-bold text-gray-800 flex justify-between">
        {event.name}
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            typeColors[event.type as EventType] || "bg-gray-100 text-gray-800"
          }`}
        >
          {event.type}
        </span>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      {/* Event Details */}
      <div className="space-y-3">
        <EventDetail
          icon={<Calendar className="w-5 h-5" />}
          text={event.date}
        />
        <EventDetail icon={<Clock className="w-5 h-5" />} text={event.time} />
        <EventDetail
          icon={<MapPin className="w-5 h-5" />}
          text={event.location}
        />
      </div>
      {/* Description */}
      <CardDescription className="text-gray-600">
        {event.description}
      </CardDescription>
      {/* Tags */}
      <EventTags tags={event.tags} />
      {/* Action Button */}
      <div className="pt-4">
        <Link
          to={`/events/${event.id}`}
          className="w-full inline-flex items-center justify-center gap-2 bg-blue text-white py-3 px-4 rounded-lg hover:bg-blue/80 transition-colors duration-200"
        >
          View Event
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </CardContent>
  </Card>
);

const EventDetail = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="flex items-center gap-2 text-gray-600">
    {icon}
    <span>{text}</span>
  </div>
);

const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex items-center gap-2 flex-wrap">
    <Tag className="w-4 h-4 text-gray-600" />
    {tags.map((tag, index) => (
      <Badge
        key={index}
        variant="secondary"
        className="bg-gray-100 text-gray-700 hover:bg-gray-200"
      >
        {tag}
      </Badge>
    ))}
  </div>
);

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
