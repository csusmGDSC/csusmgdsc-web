import { useQuery } from "@tanstack/react-query";
import { api } from "./api-client";
import { API_ROUTES } from "@/config/api-routes";
import { QUERY_KEYS } from "@/config/query-keys";
import { User } from "@/types/gdsc-user";

async function fetchUsers(): Promise<User[]> {
  const { data } = await api.get(
    API_ROUTES.USERS.GET_USERS({ limit: 500 }) // TODO: Handle pagination when it becomes an issue using useInfiniteQuery
  );
  return data.users || [];
}

export const useUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: fetchUsers,
  });

  return { data: data || [], isLoading };
};

export const useUserById = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.USERS, id],
    queryFn: () =>
      fetchUsers().then((users) => users.find((user) => user.id === id)), // TODO: Discuss whether we do this or use fetch user by id api call
  });

  return { data, isLoading };
};
