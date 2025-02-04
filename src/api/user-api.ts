import { useQuery } from "@tanstack/react-query";
import { api } from "./api-client";
import { API_ROUTES } from "@/config/api-routes";
import { User } from "@/types/gdsc-user";

const fetchUsers: () => Promise<User[]> = async () => {
  const { data } = await api.get(API_ROUTES.USERS.GET_USERS);
  return data;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"], // Ensures shared cache across components
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000, // 5 minutes, prevents unnecessary refetches
    refetchOnWindowFocus: false, // Avoids refetching on window focus
  });
};
