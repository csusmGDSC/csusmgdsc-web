import { PageContent, PageHeader } from "@/features/base";

import {
  // EventComments,
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

// const mockComments = [
//   {
//     id: 1,
//     user_id: 101,
//     event_id: 201,
//     content: "This is the first comment.",
//     pinnedBy: "Jane Smith",
//     commentIDs: [2, 3], // Replies
//     createdAt: new Date("2024-11-01T10:00:00Z"),
//     updatedAt: new Date("2024-11-01T10:00:00Z"),
//     isDeleted: false,
//   },
//   {
//     id: 2,
//     user_id: 102,
//     event_id: 202,
//     content: "Pinned comment with no replies.",
//     commentIDs: [],
//     createdAt: new Date("2024-11-02T14:30:00Z"),
//     updatedAt: new Date("2024-11-02T15:00:00Z"),
//   },
//   {
//     id: 3,
//     user_id: 103,
//     event_id: 203,
//     content: "Another comment with multiple replies.",
//     commentIDs: [4],
//     createdAt: new Date("2024-11-03T09:00:00Z"),
//     updatedAt: new Date("2024-11-03T09:10:00Z"),
//     isDeleted: true,
//   },
//   {
//     id: 4,
//     user_id: 104,
//     event_id: 204,
//     content: "This is a standalone comment.",
//     commentIDs: [],
//     createdAt: new Date("2024-11-04T16:45:00Z"),
//     updatedAt: new Date("2024-11-04T16:45:00Z"),
//   },
// ];

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
        {/* <EventComments comments={mockComments} onPostComment={() => {}} /> */}
      </PageContent>
    </section>
  );
};

export default EventPage;
