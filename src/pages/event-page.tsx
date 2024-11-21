import { PageContent, PageHeader } from "@/features/base";

import {
  EventComments,
  EventDescription,
  EventOrganizers,
  EventResources,
  EventSummary,
} from "@/features/event";

const EventPage = () => {
  return (
    <section>
      <PageHeader
        title=""
        backgroundImageSrc="/images/placeholder/csed-week.png"
      />
      <PageContent>
        <EventSummary />
        <EventDescription />
        <EventResources />
        <EventOrganizers />
        <EventComments />
      </PageContent>
    </section>
  );
};

export default EventPage;
