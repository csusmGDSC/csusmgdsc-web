import { useQuery } from "@tanstack/react-query";
import { api } from "./api-client";
import { API_ROUTES } from "@/config/api-routes";
import { QUERY_KEYS } from "@/config/query-keys";
import { GDSCEvent } from "@/types/gdsc-event";

async function fetchEvents(): Promise<GDSCEvent[]> {
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

  return { data: data || [], isLoading };
};
