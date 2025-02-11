import { PageContent, PageHeader } from "@/features/base";

import {
  EventComments,
  EventDescription,
  EventOrganizers,
  EventResources,
  EventSummary,
} from "@/features/event";

const mockEvent = {
  date: "Tuesday, November 12",
  time: "10:00 AM - 11:00 AM",
  location: "Conference Room A",
  title: "Q2 Planning Session",
  description:
    "This is a description of the event. It should be at least a few sentences long. We love short descriptions.",
  tags: ["planning", "quarterly"],
};

const EventPage = () => {
  return (
    <section>
      <PageHeader
        title=""
        backgroundImageSrc="/images/placeholder/csed-week.png"
      />
      <PageContent>
        <EventSummary {...mockEvent} />
        <EventDescription description={mockEvent.description} />
        <EventResources />
        <EventOrganizers />
        <EventComments />
      </PageContent>
    </section>
  );
};

export default EventPage;
