export function useAuth() {
  return { user: null, loading: false } as const;
}

export default useAuth;
