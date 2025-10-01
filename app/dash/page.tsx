"use client";
import Link from "next/link";
import { useAuth } from "@/lib/fake-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  
  useEffect(() => { 
    if (!user) router.replace("/login"); 
  }, [user, router]);

  if (!user) return null;
  
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-white bg-dark-bg min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-cyan-400 font-orbitron mb-4">Welcome Aboard, {user.name}</h1>
        <p className="text-white/80 font-inter">Your profile is set. Ready to advance?</p>
        <p className="text-white/60 font-inter text-sm mt-2">@{user.handle} • {user.email}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/challenges" className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/30 transition-all duration-200">
          <h3 className="text-xl font-semibold text-cyan-400 font-orbitron mb-2">Browse Challenges</h3>
          <p className="text-white/70 font-inter">Explore available missions and find your next project.</p>
        </Link>

        <Link href="/profile" className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/30 transition-all duration-200">
          <h3 className="text-xl font-semibold text-cyan-400 font-orbitron mb-2">Edit Profile</h3>
          <p className="text-white/70 font-inter">Update your skills, bio, and contact information.</p>
        </Link>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 underline font-inter">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
