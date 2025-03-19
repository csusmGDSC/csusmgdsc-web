import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api-client";
import { API_ROUTES } from "@/config/api-routes";
import { QUERY_KEYS } from "@/config/query-keys";
import { Event } from "@/types/event";
import { z } from "zod";
import { EventSchema } from "@/features/admin/schemas/event-schema";
import { toast } from "sonner";
import { User } from "@/types/user";

interface FetchEventRequest {
  events: Event[];
  limit: number;
  page: number;
  totalCount: number;
}

async function fetchEvents(): Promise<FetchEventRequest> {
  const { data } = await api.get(
    API_ROUTES.EVENTS.GET_EVENTS({ limit: 500 }) // TODO: Handle pagination when it becomes an issue using useInfiniteQuery
  );
  return data;
}

async function fetchEvent(id: string): Promise<Event> {
  const { data } = await api.get(API_ROUTES.EVENTS.GET_EVENT_BY_ID(id));
  return data;
}

async function fetchEventOrganizers(id: string): Promise<User[]> {
  const { data } = await api.get(
    API_ROUTES.EVENTS.GET_EVENT_ORGANIZERS_BY_EVENT_ID(id)
  );
  return data;
}

async function deleteEventById(id: string): Promise<{ message: string }> {
  const { data } = await api.delete(
    API_ROUTES.EVENTS.DELETE_EVENT_BY_EVENT_ID(id)
  );
  return data;
}

async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append("image", file);
  const { data } = await api.post(API_ROUTES.UTILS.UPLOAD_IMAGE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data.url;
}

export const useEvents = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.EVENTS],
    queryFn: fetchEvents,
  });

  return { data: data?.events || [], isLoading };
};

export const useEventOrganizers = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.EVENT_ORGANIZERS, id],
    queryFn: () => fetchEventOrganizers(id),
  });

  return { data, isLoading };
};

export const useEventById = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.EVENTS, id],
    queryFn: () => fetchEvent(id),
    staleTime: 60 * 1000, // 1 minute,
    refetchOnMount: true, // refetches when stale
  });

  return { data, isLoading };
};

export const useDeleteEventById = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteEventById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EVENTS],
      });
      toast.success("Successfully deleted event!");
    },
    onError: (data) => {
      toast.error("Failed to delete event: " + data);
    },
  });
};

async function createEvent(values: z.infer<typeof EventSchema>) {
  if (values.imageSrc instanceof File) {
    // Upload the image file and get a URL
    const imageUrl = await uploadImage(values.imageSrc);
    values.imageSrc = imageUrl;
  }

  const payload = {
    title: values.title,
    room: values.room,
    tags: values.tags,
    start_time: values.startTime?.toISOString(),
    end_time: values.endTime?.toISOString(),
    type: values.type,
    location: values.location,
    date: values.date.toISOString(),
    repository_url: values.githubRepo,
    slides_url: values.slidesURL,
    image_src: values.imageSrc,
    virtual_url: values.virtualURL,
    description: values.description,
    about: values.about,
  };

  console.log("SUBMITTING POST WITH VALUES: ", values);
  const { data } = await api.post(API_ROUTES.EVENTS.CREATE_EVENT, payload);

  // Add organizers to event
  for (const organizerId of values.organizerIds) {
    await api.post(
      API_ROUTES.EVENTS.ADD_EVENT_ORGANIZER_BY_EVENT_ID(
        data.eventID,
        organizerId
      )
    );
  }

  return data;
}

export function useCreateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: z.infer<typeof EventSchema>) => createEvent(values),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.EVENTS],
      });

      toast.success("Successfully created event!");
    },
    onError: (data) => {
      toast.error("Failed to create event: " + data);
    },
  });
}
