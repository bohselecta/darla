"use client";
import Link from "next/link";
import { useAuth } from "@/lib/fake-auth";

export default function Header() {
  const { user, signOut } = useAuth();
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-dark-bg/80 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-cyan-400 tracking-widest text-sm font-orbitron">ADVANCE</span>
          <span className="text-white/50 text-xs font-inter">by DARLA</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/challenges" className="text-white/70 hover:text-white text-sm font-inter transition-colors duration-200">Challenges</Link>
          <Link href="/about" className="text-white/70 hover:text-white text-sm font-inter transition-colors duration-200">About</Link>

          {!user ? (
            // always visible login link (small, unobtrusive)
            <Link href="/login" className="text-white hover:text-cyan-300 text-sm font-inter transition-colors duration-200">
              Log in
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/dash" className="text-white/80 hover:text-white text-sm font-inter transition-colors duration-200">Dashboard</Link>
              <button onClick={signOut}
                      className="text-sm text-white/70 hover:text-white font-inter transition-colors duration-200">Sign out</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
