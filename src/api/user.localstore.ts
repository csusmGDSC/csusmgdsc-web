import { QUERY_KEYS } from "@/config/query-keys";

export function saveUserToLocalStorage(user: any): void {
  localStorage.setItem(QUERY_KEYS.USER, JSON.stringify(user));
}

export function getUserFromLocalStorage(): any | undefined {
  const user = localStorage.getItem(QUERY_KEYS.USER);
  return user ? JSON.parse(user) : undefined;
}

export function removeUserFromLocalStorage(): void {
  localStorage.removeItem(QUERY_KEYS.USER);
}

export function saveAccessTokenToLocalStorage(accessToken: string): void {
  localStorage.setItem(QUERY_KEYS.ACCESS_TOKEN, accessToken);
}

export function getAccessTokenFromLocalStorage(): any | undefined {
  return localStorage.getItem(QUERY_KEYS.ACCESS_TOKEN);
}

export function removeAccessTokenFromLocalStorage(): void {
  localStorage.removeItem(QUERY_KEYS.ACCESS_TOKEN);
}
