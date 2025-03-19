import { Button } from "@/components/ui/button";
import RandomBadge from "@/components/ui/random-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionTitle } from "@/features/base";
import { Event, IOTA_TO_EVENT_TYPE } from "@/types/event";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface PastEventsProps {
  events?: Event[];
  skeletonMode?: boolean;
}

export default function PastEvents({ events, skeletonMode }: PastEventsProps) {
  if (skeletonMode) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} className="w-full rounded-sm h-[10rem]" />
        ))}
      </div>
    );
  }

  if (!events || events.length === 0) {
    return <p className="text-primary text-2xl font-bold">No past events.</p>;
  }

  const pastEvents = events.filter(
    (event) => new Date(event.start_time) < new Date()
  );

  return (
    <section id="past-events">
      <SectionTitle title="Past Events" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pastEvents.map((event) => (
          <Link key={event.id} to={`/events/${event.id}`}>
            <div
              key={event.id}
              className="group hover:shadow-md transition-shadow border rounded-sm p-4"
            >
              <div className="flex justify-between items-center gap-2">
                <div className="truncate">
                  <h3 className="font-medium line-clamp-1">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">
                    {new Date(event.start_time).toLocaleDateString()}
                  </p>
                  <RandomBadge
                    text={IOTA_TO_EVENT_TYPE[event.type]}
                    className="text-xs rounded-full px-2 py-0.5"
                  />
                </div>
              </div>
              <Button
                className="mt-4 py-4 px-0 text-blue group-hover:text-darkBlue"
                variant="nav"
              >
                <ExternalLink className="w-4 h-4" /> View Event
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
