import { useEventById, useEventOrganizers } from "@/api/event-api";
import { Skeleton } from "@/components/ui/skeleton";
import { PageContent, PageHeader } from "@/features/base";

import {
  EventComments,
  EventDescription,
  EventOrganizers,
  EventResources,
  EventSummary,
} from "@/features/event";
import EventMarkdown from "@/features/event/components/event-markdown";
import { Loader2 } from "lucide-react";
import { useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";

const EventPage = () => {
  const location = useLocation();
  const eventId = useMemo(() => {
    return location.pathname.split("/").pop();
  }, [location.pathname]);

  const { data: event, isLoading } = useEventById(eventId || "");
  const { data: organizers, isLoading: organizersLoading } = useEventOrganizers(
    eventId || ""
  );

  if (!eventId) {
    return <Navigate to="/not-found" />;
  }

  return (
    <section>
      <PageHeader
        title=""
        backgroundImageSrc={
          !isLoading
            ? event?.image_src || "/images/placeholder/homeBackground-2.jpg"
            : "/images/placeholder/homeBackground-2.jpg"
        }
      />
      <PageContent>
        {isLoading || !event ? (
          <Skeleton className="w-full h-[450px] opacity-90 -mt-40 z-20" />
        ) : (
          event.image_src && (
            <img
              src={event.image_src}
              alt="Event Banner"
              className="w-full h-[450px] opacity-90 -mt-40 z-20 object-cover rounded-lg"
            />
          )
        )}

        {isLoading || !event ? (
          <Loader2 className="animate-spin text-blue m-auto" />
        ) : (
          <>
            <EventSummary {...event} />
            <EventDescription description={event.description} />
            <EventResources />
            {!organizersLoading && (
              <EventOrganizers organizers={organizers || []} />
            )}
            <EventMarkdown markdown={event.about || ""} />
            <EventComments eventId={event.id} />
          </>
        )}
      </PageContent>
    </section>
  );
};

export default EventPage;
