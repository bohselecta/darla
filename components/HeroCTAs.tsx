"use client";
import Link from "next/link";
import { useAuth } from "@/lib/fake-auth";

export default function HeroCTAs() {
  const { user } = useAuth();
  return (
    <div className="mt-10 flex justify-center gap-4">
      <Link
        href={user ? "/challenges" : "/login"}
        className="px-6 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition-colors duration-200 font-inter"
      >
        {user ? "Enter a Challenge" : "Sign up / Log in"}
      </Link>
      <Link
        href="/profile"
        className="px-6 py-3 rounded-md border border-white/20 hover:border-white/40 transition-colors duration-200 font-inter"
      >
        Create Profile
      </Link>
    </div>
  );
}
