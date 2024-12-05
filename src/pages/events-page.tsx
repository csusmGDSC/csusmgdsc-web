import { PageContent, PageHeader } from "@/features/base";
import { EventsFilter, PastEvents, UpcomingEvents } from "@/features/events";
import { useEffect, useState } from "react";

const upcomingEvents = [
  {
    id: 1,
    name: "Q2 Planning Session",
    date: "2024-04-25",
    time: "10:00 AM",
    room: "Conference Room A",
    capacity: 50,
    type: "leetcode",
    tags: ["planning", "quarterly"],
    location: "Conference Room A",
    description:
      "This is a description of the event. It should be at least a few sentences long. We love short descriptions.",
  },
  {
    id: 2,
    name: "Tech Workshop",
    date: "2024-05-15",
    type: "workshop",
    time: "10:00 AM",
    room: "Conference Room A",
    capacity: 50,
    tags: ["technical", "learning"],
    location: "Virtual",
    description:
      "This is a description of the event. It should be at least a few sentences long. We love short descriptions.",
  },
  {
    id: 3,
    name: "Tech Workshop",
    date: "2024-05-15",
    type: "workshop",
    time: "10:00 AM",
    room: "Conference Room A",
    capacity: 50,
    tags: ["technical", "learning"],
    location: "Virtual",
    description:
      "This is a description of the event. It should be at least a few sentences long. We love short descriptions.",
  },
];

export default function EventsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [events, setEvents] = useState(upcomingEvents);

  useEffect(() => {
    setEvents(
      upcomingEvents.filter((event) =>
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
        <UpcomingEvents events={events} />
        <EventsFilter
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <PastEvents />
      </PageContent>
    </main>
  );
}
