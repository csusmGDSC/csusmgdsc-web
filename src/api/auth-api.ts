import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "./api-client";
import {
  UserLoginAPIResponse,
  User,
  UserSignUpAPIResponse,
} from "@/types/user";
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
export function useUser(): User | null {
  // Fetch user from API
  const fetchUser = async (): Promise<User | null> => {
    const { data } = await api.get(API_ROUTES.AUTH.GET_CURRENT_USER);
    data.graduation_date = new Date(data.graduation_date);
    console.log("GOT USER DATA FROM API /me:", data);
    return data;
  };

  // Fetch access token from local storage
  const fetchAccessToken = async (): Promise<string | null> => {
    const { data } = await userStore.getAccessTokenFromLocalStorage();
    return data;
  };

  // Query access token
  const { data: accessToken } = useQuery<string | null>({
    queryKey: [QUERY_KEYS.ACCESS_TOKEN],
    queryFn: fetchAccessToken,
    initialData: userStore.getAccessTokenFromLocalStorage,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  });

  // Query user data
  const { data: user } = useQuery<User | null>({
    queryKey: [QUERY_KEYS.USER],
    queryFn: fetchUser,
    initialData: userStore.getUserFromLocalStorage,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: !!accessToken,
    staleTime: Infinity,
  });

  // Sync local storage with user state
  useEffect(() => {
    if (user) {
      userStore.saveUserToLocalStorage(user);
      userStore.saveAccessTokenToLocalStorage(accessToken || "");
    } else {
      userStore.removeUserFromLocalStorage();
      userStore.removeAccessTokenFromLocalStorage();
    }
  }, [user, accessToken]);

  return user || null;
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

  return useMutation<UserLoginAPIResponse, unknown, Credentials>({
    mutationFn: async ({ email, password }) => {
      const { data } = await api.post<UserLoginAPIResponse>(
        API_ROUTES.AUTH.LOGIN,
        {
          email,
          password,
        }
      );
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.USER], data.user);
      queryClient.setQueryData([QUERY_KEYS.ACCESS_TOKEN], data.accessToken);
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
  return useMutation<UserSignUpAPIResponse, unknown, Credentials>({
    mutationFn: async ({ email, password }) => {
      const { data } = await api.post<UserSignUpAPIResponse>(
        API_ROUTES.AUTH.REGISTER,
        {
          email,
          password,
        }
      );
      return data;
    },
    onSuccess: () => {
      // TO-DO: SEND CONFIRMATION EMAIL
      toast.success(
        "Successfully signed up! Please check your email to confirm your account."
      );
    },
    onError: (error) => {
      toast.error("Oops, something went wrong when creating an account.");
      console.log("ERROR IN SIGNING UP: ", error);
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
      queryClient.setQueryData([QUERY_KEYS.ACCESS_TOKEN], null);
      userStore.removeUserFromLocalStorage();
      userStore.removeAccessTokenFromLocalStorage();
    }
  }, [navigate, queryClient]);

  return signOut;
}
