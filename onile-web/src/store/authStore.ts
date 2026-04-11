export type AuthUser = {
  id: string;
  name: string;
  role: "investor" | "owner" | "admin";
};

export const authStore = {
  user: null as AuthUser | null,
};

export default authStore;
