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

const checkAuthStatus = async (): Promise<AuthStatus> => {
  try {
    const response = await fetch(AUTH_CHECK_ENDPOINT, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    return response.status === 204 || response.ok
      ? "authenticated"
      : "unauthenticated";
  } catch {
    return "unauthenticated";
  }
};

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
    setStatus(await checkAuthStatus());
  }, []);

  useEffect(() => {
    if (initialStatus !== "loading") {
      return;
    }

    let ignore = false;

    checkAuthStatus().then((nextStatus) => {
      if (!ignore) {
        setStatus(nextStatus);
      }
    });

    return () => {
      ignore = true;
    };
  }, [initialStatus]);

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
