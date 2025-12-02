import { createContext, useContext, ReactNode } from 'react';

// Auth has been removed from the app. Provide a small stub so imports don't crash.

interface AuthContextType {
  user: null;
  profile: null;
  session: null;
  loading: false;
  signUp: (...args: any[]) => Promise<{ error: any }>;
  signIn: (...args: any[]) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  resetPassword: (...args: any[]) => Promise<{ error: any }>;
}

const noopAsync = async () => ({ error: null });
const noop = async () => {};

const defaultValue: AuthContextType = {
  user: null,
  profile: null,
  session: null,
  loading: false,
  signUp: noopAsync,
  signIn: noopAsync,
  signOut: noop,
  resetPassword: noopAsync,
};

const AuthContext = createContext<AuthContextType>(defaultValue);

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={defaultValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
