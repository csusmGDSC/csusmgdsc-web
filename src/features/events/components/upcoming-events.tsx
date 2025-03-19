import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Event, IOTA_TO_EVENT_TYPE } from "@/types/event";
import { formatDate } from "date-fns";
import { Calendar, Clock, ExternalLink, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionTitle } from "@/features/base";
import { EventTypeBadge } from "@/components/ui/event-type-badge";

interface UpcomingEventsProps {
  events?: Event[];
  skeletonMode?: boolean;
}

export default function UpcomingEvents({
  events,
  skeletonMode,
}: UpcomingEventsProps) {
  if (skeletonMode) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((_, index) => (
          <Skeleton key={index} className="h-[28rem] rounded-sm w-full" />
        ))}
      </div>
    );
  }

  if (!events || events.length === 0) {
    return (
      <p className="text-primary text-2xl font-bold">No events coming up.</p>
    );
  }

  const upcomingEvents = events.filter(
    (event) => new Date(event.start_time) > new Date()
  );

  return (
    <section id="upcoming-events">
      <SectionTitle title="Upcoming Events" />
      <Carousel className="">
        <CarouselContent>
          {upcomingEvents.map((event) => (
            <CarouselItem key={event.id} className="md:basis-1/2 xl:basis-1/3">
              <EventCard event={event} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

const EventCard = ({ event }: { event: Event }) => (
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
          {event.title}
          <EventTypeBadge type={IOTA_TO_EVENT_TYPE[event.type]} />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Event Details */}
        <div className="space-y-3">
          <EventDetail
            icon={<Calendar className="w-5 h-5" />}
            text={formatDate(event.start_time, "PPP") || ""}
          />
          <EventDetail
            icon={<Clock className="w-5 h-5" />}
            text={
              formatDate(event.start_time, "p") +
                " - " +
                formatDate(event.end_time, "p") || ""
            }
          />
          <EventDetail
            icon={<MapPin className="w-5 h-5" />}
            text={event.location || "Virtual"}
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
