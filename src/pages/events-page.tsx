import { PageContent, PageHeader } from "@/features/base";
import EventsPageee from "@/features/events/components/test";

export default function EventsPage() {
  return (
    <main>
      <PageHeader
        title="Events"
        subTitle="Join us for workshops, coding sessions, and more!"
        backgroundImageSrc="./src/assets/images/placeholder/homeBackground.jpg"
      />
      <PageContent>
        <EventsPageee />
      </PageContent>
    </main>
  );
}
