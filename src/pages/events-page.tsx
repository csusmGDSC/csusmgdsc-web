import { useEvents } from "@/api/event-api";
import { PageContent, PageHeader } from "@/features/base";
import { EventsFilter, PastEvents, UpcomingEvents } from "@/features/events";
import { useFilteredEvents } from "@/hooks/use-filtered-events";

export default function EventsPage() {
  const { data: events, isLoading } = useEvents();

  const { filteredEvents, selectedTags, setSelectedTags, setSearchQuery } =
    useFilteredEvents(events);

  return (
    <main>
      <PageHeader
        title="Events"
        subTitle="Join us for workshops, coding sessions, and more!"
        backgroundImageSrc="/images/placeholder/homeBackground.jpg"
      />
      <PageContent>
        <UpcomingEvents
          events={events.filter(
            (event) => new Date(event.startTime) > new Date()
          )}
          skeletonMode={isLoading}
        />
        <EventsFilter
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          setSearchQuery={setSearchQuery}
        />
        <PastEvents events={filteredEvents} skeletonMode={isLoading} />
      </PageContent>
    </main>
  );
}
