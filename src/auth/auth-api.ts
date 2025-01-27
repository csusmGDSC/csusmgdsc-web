import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "./api-client";
import { GDSCUser } from "@/types/gdsc-user";
import { toast } from "sonner";

import * as userStore from "./user.localstore";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_ROUTES } from "@/config/api-routes";
import { QUERY_KEYS } from "@/config/query-keys";

interface Credentials {
  email: string;
  password: string;
}

/**
 * Fetch the user from the API, or from local storage.
 * If the user is not found, remove them from local storage.
 * If the user is found, save them to local storage.
 *
 * @example
 * const { user } = useUser();
 *
 * <div>{user ? user.user.firstName + ": " + user.accessToken : "User not found"}</div>
 *
 * @returns An object with a single property, `user`, which contains the user or null if not found.
 *
 */
export function useUser(): { user: GDSCUser | null } {
  // Fetch the user from the API, or from local storage
  const { data: user } = useQuery<GDSCUser | null>({
    queryKey: [QUERY_KEYS.USER],
    queryFn: async (): Promise<GDSCUser | null> => {
      const { data } = await api.get(API_ROUTES.AUTH.GETUSER);
      return data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialData: userStore.getUserFromLocalStorage,
  });

  // When the user changes, save or remove them from local storage
  useEffect(() => {
    if (!user) userStore.removeUserFromLocalStorage();
    else userStore.saveUserToLocalStorage(user);
  }, [user]);

  // Return the user, or null if not found
  return {
    user: user ?? null,
  };
}

/**
 * Signs in a user with the provided email and password.
 *
 * If the user is signed in successfully, the user is stored in the query
 * cache and the user is redirected to the home page.
 *
 * If there is an error, an error is shown to the user and the error is
 * logged to the console.
 *
 * @example
 * const signIn = useSignIn();
 * signIn.mutate({ email, password });
 *
 * // Call this function after successful sign-in.
 * const user = useUser();
 *
 * @param email The email of the user to sign in.
 * @param password The password of the user to sign in.
 * @returns A mutation function that can be called to sign in the user.
 */
export function useSignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<GDSCUser, unknown, Credentials>({
    mutationFn: async ({ email, password }) => {
      const { data } = await api.post<GDSCUser>(API_ROUTES.AUTH.LOGIN, {
        email,
        password,
      });
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.USER], data);
      navigate("/");
    },
    onError: (error) => {
      toast.error("Oops, something went wrong when signing in.");
      console.log("ERROR IN SIGNING IN: ", error);
    },
  });
}

/**
 * Creates a user with the provided email and password.
 *
 * If the user is signed up successfully, the user is stored in the query
 * cache and the user is redirected to the onboarding page.
 *
 * If there is an error, an error is shown to the user and the error is
 * logged to the console.
 *
 * @example
 * const signUp = useSignUp();
 * signUp.mutate({ email, password });
 *
 * // Call this function after successful sign-up.
 * const user = useUser();
 *
 * @param email The email of the user to sign up.
 * @param password The password of the user to sign up.
 * @returns A mutation function that can be called to sign up the user.
 */
export function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<GDSCUser, unknown, Credentials>({
    mutationFn: async ({ email, password }) => {
      const { data } = await api.post<GDSCUser>(API_ROUTES.AUTH.SIGNUP, {
        email,
        password,
      });
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.USER], data);
      navigate("/");
    },
    onError: (error) => {
      toast.error("Oops, something went wrong when creating an account.");
      console.log("ERROR IN SIGNING UP: ", error);
    },
  });
}

/**
 * Updates the user with the provided user object.
 *
 * If the user is updated successfully, the user is stored in the query
 * cache and the user is redirected to the onboarding page.
 *
 * If there is an error, an error is shown to the user and the error is
 * logged to the console.
 *
 * @example
 * const updateUser = useUpdateUser();
 * updateUser.mutate({ user });
 *
 * // Call this function after successful update.
 * const user = useUser();
 *
 * @param user The user object to update.
 * @returns A mutation function that can be called to update the user.
 */
export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation<GDSCUser, unknown, GDSCUser>({
    mutationFn: async (user) => {
      const { data } = await api.put<GDSCUser>(
        API_ROUTES.AUTH.UPDATE_USER,
        user
      );
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.USER], data);
    },
    onError: (error) => {
      toast.error("Oops, something went wrong when updating your profile.");
      console.log("ERROR IN UPDATING USER: ", error);
    },
  });
}

/**
 * Returns a function that can be used to sign out the user from the application.
 *
 * When the returned function is called, it will clear the user from the query
 * cache and redirect the user to the sign-in page.
 *
 * @example
 * const signOut = useSignOut();
 * signOut();
 *
 * @returns A function that can be called to sign out the user.
 */
export function useSignOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const signOut = useCallback(async () => {
    try {
      await api.post(API_ROUTES.AUTH.LOGOUT);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      queryClient.setQueryData([QUERY_KEYS.USER], null);
      navigate("/auth/sign-in");
    }
  }, [navigate, queryClient]);

  return signOut;
}
