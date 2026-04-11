"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import type { AuthUser } from "@/store/authStore";

export function useAuth() {
  const pathname = usePathname();
  const [role, setRole] = useState<AuthUser["role"]>("investor");

  useEffect(() => {
    const savedRole = window.localStorage.getItem("onile:role");
    if (savedRole === "owner" || savedRole === "admin" || savedRole === "investor") {
      setRole(savedRole);
    }
  }, []);

  const user = useMemo<AuthUser | null>(() => {
    if (!pathname.startsWith("/dashboard") && pathname !== "/properties" && pathname !== "/portfolio" && pathname !== "/trading") {
      return null;
    }

    return {
      id: "demo-user",
      name: role === "owner" ? "Ayo Owner" : role === "admin" ? "Admin User" : "Maya Investor",
      role,
    };
  }, [pathname, role]);

  return { user, loading: false, isAuthenticated: Boolean(user) } as const;
}

export default useAuth;
