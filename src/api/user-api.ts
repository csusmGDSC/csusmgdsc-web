import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api-client";
import { API_ROUTES } from "@/config/api-routes";
import { QUERY_KEYS } from "@/config/query-keys";
import { User } from "@/types/user";
import { useUser } from "./auth-api";

import { toast } from "sonner";
import { z } from "zod";
import { ProfileSchema } from "@/features/onboarding/schemas/profile-schema";

interface FetchUsersRequest {
  users: User[];
  limit: number;
  page: number;
  totalCount: number;
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

async function fetchUsers(): Promise<FetchUsersRequest> {
  const { data } = await api.get(
    API_ROUTES.USERS.GET_USERS({ limit: 500, page: 1 }) // TODO: Handle pagination when it becomes an issue using useInfiniteQuery
  );
  return data;
}

async function fetchUserById(id: string): Promise<User> {
  const { data } = await api.get(API_ROUTES.USERS.GET_USER_BY_ID(id));
  return data;
}

async function updateUser(
  userId: string,
  values: z.infer<typeof ProfileSchema>
) {
  const payload: Partial<User> = Object.fromEntries(
    Object.entries({
      position: values.position,
      branch: values.branch,
      graduation_date: values.graduation_date?.toISOString() ?? null,
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
      image: values.image,
    }).filter(
      // eslint-disable-next-line
      ([_, value]) => value !== undefined && value !== "" && value !== null
    )
  );

  console.log("SENDING PAYLOAD: ", payload);

  await api.put(API_ROUTES.AUTH.UPDATE_USER + "/" + userId, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return payload;
}

export const useUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: fetchUsers,
  });

  return { data: data?.users || [], isLoading };
};

export const useUserById = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.USERS, id],
    queryFn: () => fetchUserById(id),
  });

  return { data, isLoading };
};

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const user = useUser();

  if (!user) {
    throw new Error("User not found, can't update user.");
  }

  return useMutation<Partial<User>, unknown, z.infer<typeof ProfileSchema>>({
    mutationFn: async (values: z.infer<typeof ProfileSchema>) => {
      if (values.image instanceof File) {
        const imageUrl = await uploadImage(values.image);
        values.image = imageUrl;
      }
      return updateUser(user.id, values);
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
