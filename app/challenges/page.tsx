import Link from "next/link";
import Image from "next/image";
import { CHALLENGES } from "@/data/challenges";

const color: Record<string, string> = {
  autonomy: "from-cyan-500/30 to-cyan-500/0",
  robotics: "from-fuchsia-500/30 to-fuchsia-500/0",
  cyber:    "from-blue-500/30 to-blue-500/0",
  energy:   "from-amber-500/30 to-amber-500/0",
};

export default function ChallengesIndex() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-white bg-dark-bg min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-orbitron">Challenges</h1>
        <p className="mt-2 text-white/70 font-inter">Pick a mission. Build with purpose.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHALLENGES.map(c => (
          <Link key={c.slug} href={`/challenges/${c.slug}`}
            className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/30 transition-all duration-200 hover:bg-white/10">
            <div className="relative">
              <Image 
                src={c.hero} 
                alt={c.title} 
                width={400}
                height={160}
                className="h-40 w-full object-cover opacity-60" 
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${color[c.domain]}`} />
            </div>
            <div className="p-4">
              <div className="text-xs uppercase tracking-wide text-white/70 font-inter">
                {c.domain} • Tier {c.tier} • ${c.prizePool.toLocaleString()}
              </div>
              <h3 className="mt-1 text-lg font-semibold font-orbitron">{c.title}</h3>
              <p className="mt-1 text-sm text-white/70 line-clamp-2 font-inter">{c.tagline}</p>
              <div className="mt-4 text-sm text-white/60 capitalize font-inter">{c.status}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-cyan-400 font-orbitron mb-4">Ready to Advance?</h2>
        <p className="text-white/80 font-inter mb-6">
          Join thousands of engineers, students, and innovators building the future of defense and discovery.
        </p>
        <Link href="/profile" className="inline-block px-6 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors duration-200 font-inter">
          Create Profile
        </Link>
      </div>
    </main>
  );
}
