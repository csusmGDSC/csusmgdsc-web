import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { GDSCEvent } from "@/types/gdsc-event";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function PastEvents({ events }: { events: GDSCEvent[] }) {
  return (
    <section id="past-events">
      <Title>Past Events</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <Link key={event.id} to={`/events/${event.id}`}>
            <div
              key={event.id}
              className="group hover:shadow-md transition-shadow border rounded-sm p-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">
                    {new Date(event.startTime).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500 capitalize">
                    {event.type}
                  </p>
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
