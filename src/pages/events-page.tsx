import { useEvents } from "@/api/event-api";
import { PageContent, PageHeader } from "@/features/base";
import { EventsFilter, PastEvents, UpcomingEvents } from "@/features/events";
import { GDSCEvent } from "@/types/gdsc-event";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const testEvents: GDSCEvent[] = [
  {
    id: "1",
    title: "Q2 Planning Session",
    date: new Date("2024-05-15"),
    startTime: new Date("2024-05-15"),
    endTime: new Date("2024-05-15T11:00:00.000Z"),
    organizerIds: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    room: null,
    type: "leetcode",
    tags: ["planning", "quarterly"],
    location: "Conference Room A",
    description:
      "This is a description of the event. It should be at least a few sentences long. We love short descriptions.",
  },
  {
    id: "2",
    title: "Tech Workshop",
    date: new Date("2024-05-15"),
    type: "workshop",
    startTime: new Date("2024-05-15"),
    endTime: new Date("2024-05-16T11:00:00.000Z"),
    organizerIds: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    room: null,
    tags: ["technical", "learning"],
    location: "Virtual",
    description:
      "This is a description of the event. It should be at least a few sentences long. We love short descriptions.",
  },
  {
    id: "3",
    title: "Tech Workshop",
    date: new Date("2024-05-15"),
    type: "workshop",
    startTime: new Date("2024-05-15"),
    endTime: new Date("2024-05-16T11:00:00.000Z"),
    organizerIds: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    room: null,
    tags: ["technical", "learning"],
    location: "Virtual",
    description:
      "This is a description of the event. It should be at least a few sentences long. We love short descriptions.",
  },
  {
    id: "4",
    title: "Tech Workshop 2",
    date: new Date("2025-08-15"),
    type: "workshop",
    startTime: new Date("2025-08-15"),
    endTime: new Date("2025-08-16T02:00:00.000Z"),
    organizerIds: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    room: null,
    tags: ["technical", "learning"],
    location: "Virtual",
    description:
      "This is a description of the event. It should be at least a few sentences long. We love short descriptions.",
  },
];

export default function EventsPage() {
  const { data: events, isLoading } = useEvents();

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredEvents, setFilteredEvents] = useState(testEvents || []);

  useEffect(() => {
    // Since events may not be immediately available, return early if there are no events. This won't affect selecting tags
    if (!events || selectedTags.length === 0 || events.length === 0) return;
    setFilteredEvents(
      events.filter((event) =>
        selectedTags.every((tag) => event.type.includes(tag))
      )
    );
  }, [selectedTags]);

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
        ) : filteredEvents.length > 0 ? (
          <UpcomingEvents
            events={filteredEvents.filter(
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
