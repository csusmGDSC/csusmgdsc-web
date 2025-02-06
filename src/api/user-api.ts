import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api-client";
import { API_ROUTES } from "@/config/api-routes";
import { QUERY_KEYS } from "@/config/query-keys";
import { GDSC_BRANCH_IOTA, GDSC_POSITION_IOTA, User } from "@/types/gdsc-user";
import { useUser } from "./auth-api";
import { ProfileSchema } from "@/features/settings/schemas/profile-schema";
import { toast } from "sonner";
import { z } from "zod";

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

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const user = useUser();

  if (!user) {
    throw new Error("User not found, can't update user.");
  }

  const userId = user.id;

  return useMutation<any, unknown, z.infer<typeof ProfileSchema>>({
    mutationFn: async (values: z.infer<typeof ProfileSchema>) => {
      const payload = Object.fromEntries(
        Object.entries({
          position: values.position
            ? GDSC_POSITION_IOTA[
                values.position as keyof typeof GDSC_POSITION_IOTA
              ]
            : null,
          branch: values.branch
            ? GDSC_BRANCH_IOTA[values.branch as keyof typeof GDSC_BRANCH_IOTA]
            : null,
          graduation_date: values.graduation_date ?? null,
          first_name: values.first_name,
          last_name: values.last_name,
          full_name: `${values.first_name} ${values.last_name}`,
          github: values.github,
          linkedin: values.linkedin,
          instagram: values.instagram,
          discord: values.discord,
          website: values.website,
          bio: values.bio,
          tags: values.tags,
          is_onboarded: true,
          image: "https://avatar.iran.liara.run/public",
        }).filter(
          ([_, value]) => value !== undefined && value !== "" && value !== null
        )
      );

      console.log("SENDING PAYLOAD: ", payload);

      await api.put<any>(API_ROUTES.AUTH.UPDATE_USER + "/" + userId, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return payload;
    },
    onSuccess: (updatedFields) => {
      const data = { ...user, ...updatedFields };
      queryClient.setQueryData([QUERY_KEYS.USER], data);
      toast.success("Successfully updated your profile!");
    },
    onError: (error) => {
      toast.error("Oops, something went wrong when updating your profile.");
      console.log("ERROR IN UPDATING USER: ", error);
    },
  });
}
