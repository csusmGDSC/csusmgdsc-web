import { useEvents } from "@/api/event-api";
import { PageContent, PageHeader } from "@/features/base";
import { EventsFilter, PastEvents, UpcomingEvents } from "@/features/events";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function EventsPage() {
  const { data: events, isLoading } = useEvents();

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredEvents, setFilteredEvents] = useState(events || []);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Since events may not be immediately available, return early if there are no events. This won't affect selecting tags
    if (!events || selectedTags.length === 0 || events.length === 0) {
      setFilteredEvents(events);
      return;
    }
    setFilteredEvents(
      events.filter((event) =>
        selectedTags.some((tag) => event.type.includes(tag))
      )
    );
  }, [selectedTags]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredEvents(events);
      return;
    }

    setFilteredEvents(
      events.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <main>
      <PageHeader
        title="Events"
        subTitle="Join us for workshops, coding sessions, and more!"
        backgroundImageSrc="/images/placeholder/homeBackground.jpg"
      />
      <PageContent>
        {isLoading ? (
          <Loader2 className="animate-spin text-blue mx-auto size-10" />
        ) : events.length > 0 ? (
          <UpcomingEvents
            events={events.filter(
              (event) => new Date(event.startTime) > new Date()
            )}
          />
        ) : (
          <p className="text-primary text-2xl font-bold">
            No upcoming events found
          </p>
        )}
        <EventsFilter
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          setSearchQuery={setSearchQuery}
        />

        {isLoading ? (
          <Loader2 className="animate-spin text-blue mx-auto size-10" />
        ) : filteredEvents.length > 0 ? (
          <PastEvents
            events={filteredEvents.filter(
              (event) => event.startTime < new Date()
            )}
          />
        ) : (
          <p className="text-primary text-2xl font-bold">
            No past events found
          </p>
        )}
      </PageContent>
    </main>
  );
}
