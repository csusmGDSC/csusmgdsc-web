import { useQuery } from "@tanstack/react-query";
import { api } from "./api-client";
import { API_ROUTES } from "@/config/api-routes";
import { QUERY_KEYS } from "@/config/query-keys";
import { Event } from "@/types/event";

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

export const useEvents = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.EVENTS],
    queryFn: fetchEvents,
  });

  return { data: data?.events || [], isLoading };
};
