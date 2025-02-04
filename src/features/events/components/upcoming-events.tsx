import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Title from "@/components/ui/title";
import { Calendar, Clock, ExternalLink, MapPin } from "lucide-react";
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
  <Link to={`/events/${event.id}`}>
    <Card className="group overflow-hidden hover:shadow-md transition-all">
      {/* Project Image */}
      <div className="relative group overflow-hidden">
        <img
          src="https://placehold.co/600x400"
          alt="Event Image"
          className="w-full dark:opacity-40 h-[14rem] object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary flex justify-between">
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
        {/* Action Button */}
        <Button
          className="mt-4 py-4 px-0 text-blue group-hover:text-darkBlue"
          variant="nav"
        >
          <ExternalLink className="w-4 h-4" /> View Event
        </Button>
      </CardContent>
    </Card>
  </Link>
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

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <section id="upcoming-events">
      <Title>Upcoming Events</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
