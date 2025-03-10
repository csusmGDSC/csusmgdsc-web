import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api-client";
import { API_ROUTES } from "@/config/api-routes";
import { QUERY_KEYS } from "@/config/query-keys";
import { Event } from "@/types/event";
import { z } from "zod";
import { EventSchema } from "@/features/admin/schemas/event-schema";
import { toast } from "sonner";

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

async function uploadImage(file: File) {
  // TODO: Upload the image file and get URL from CDN
  console.log("UPLOADING IMAGE: ", file);
  return "https://picsum.photos/1920/1080";
}

export const useEvents = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.EVENTS],
    queryFn: fetchEvents,
  });

  return { data: data?.events || [], isLoading };
};

async function createEvent(values: z.infer<typeof EventSchema>) {
  if (values.imageSrc instanceof File) {
    // Upload the image file and get a URL
    const imageUrl = await uploadImage(values.imageSrc);
    values.imageSrc = imageUrl;
  }

  console.log("SUBMITTING POST WITH VALUES: ", values);
  return api.post(API_ROUTES.EVENTS.CREATE_EVENT, values);
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
