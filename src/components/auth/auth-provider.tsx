"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export interface AuthContextValue {
  status: AuthStatus;
  isAuthenticated: boolean;
  isLoading: boolean;
  refresh: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const AUTH_CHECK_ENDPOINT = "/api/auth/check";

interface AuthProviderProps {
  children: ReactNode;
  /**
   * Начальное состояние, если оно уже известно на стороне сервера.
   * По умолчанию — "loading", и проверка делается на клиенте на маунте.
   */
  initialStatus?: AuthStatus;
}

export const AuthProvider = ({
  children,
  initialStatus = "loading",
}: AuthProviderProps) => {
  const [status, setStatus] = useState<AuthStatus>(initialStatus);

  const refresh = useCallback(async () => {
    try {
      const response = await fetch(AUTH_CHECK_ENDPOINT, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      if (response.status === 204 || response.ok) {
        setStatus("authenticated");
        return;
      }

      setStatus("unauthenticated");
    } catch {
      setStatus("unauthenticated");
    }
  }, []);

  useEffect(() => {
    if (initialStatus === "loading") {
      void refresh();
    }
  }, [initialStatus, refresh]);

  const value = useMemo<AuthContextValue>(
    () => ({
      status,
      isAuthenticated: status === "authenticated",
      isLoading: status === "loading",
      refresh,
    }),
    [status, refresh],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error(
      "useAuth must be used within an <AuthProvider />, now value in AuthProvider not defined",
    );
  }
  return ctx;
};
