"use client";
import { createContext, useContext, useEffect, useState } from "react";

type User = { id: string; name: string; handle: string; email: string };

type Ctx = {
  user: User | null;
  signIn: (u: Partial<User>) => void;
  signOut: () => void;
};

const AuthCtx = createContext<Ctx | null>(null);

export function FakeAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("darla_user");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  function signIn(u: Partial<User>) {
    const newUser: User = {
      id: u.id ?? crypto.randomUUID(),
      name: u.name ?? "Guest",
      handle: u.handle ?? "guest",
      email: u.email ?? "guest@example.com",
    };
    localStorage.setItem("darla_user", JSON.stringify(newUser));
    setUser(newUser);
  }

  function signOut() {
    localStorage.removeItem("darla_user");
    setUser(null);
  }

  return <AuthCtx.Provider value={{ user, signIn, signOut }}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth must be used within FakeAuthProvider");
  return ctx;
}
