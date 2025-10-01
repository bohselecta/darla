"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/fake-auth";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");

  function doSignIn(data?: {name?: string; handle?: string; email?: string}) {
    signIn({
      name: data?.name ?? (name || "Pilot"),
      handle: data?.handle ?? (handle || "pilot"),
      email: data?.email ?? (email || "pilot@example.com"),
    });
    router.push("/dash");
  }

  return (
    <main className="relative mx-auto max-w-md px-6 py-20 text-white bg-dark-bg min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/honeycomb-bg.png"
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-20"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h1 className="text-2xl font-bold tracking-tight text-cyan-400 font-orbitron">Log in</h1>
          <p className="mt-2 text-white/70 text-sm font-inter">
            Instant fake auth for demo. Swap to Clerk/NextAuth later.
          </p>

          <button
            onClick={() => doSignIn({ name: "Google User", handle: "g_user", email: "guser@example.com" })}
            className="mt-6 w-full rounded-md bg-white text-black py-3 hover:bg-white/90 font-semibold transition-colors duration-200 font-inter"
          >
            Continue with Google (demo)
          </button>

          <div className="my-6 h-px bg-white/10" />

          <form
            onSubmit={(e) => { e.preventDefault(); doSignIn(); }}
            className="space-y-3"
          >
            <input
              value={name} onChange={(e)=>setName(e.target.value)}
              className="w-full rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter"
              placeholder="Full name"
            />
            <input
              value={handle} onChange={(e)=>setHandle(e.target.value)}
              className="w-full rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter"
              placeholder="Handle"
            />
            <input
              value={email} onChange={(e)=>setEmail(e.target.value)}
              className="w-full rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter"
              placeholder="Email"
            />

            <button className="w-full rounded-md bg-cyan-500 hover:bg-cyan-400 text-black py-3 font-semibold transition-colors duration-200 font-inter">
              Log in
            </button>
          </form>

          <p className="mt-4 text-center text-white/60 text-sm font-inter">
            New here? <a href="/profile" className="underline hover:text-white transition-colors duration-200">Create profile</a>
          </p>
        </div>
      </div>
    </main>
  );
}
