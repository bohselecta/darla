import { getChallenge, getChallengeSlugs } from "@/data/challenges";
import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return getChallengeSlugs().map(slug => ({ slug }));
}

export default function ChallengePage({ params }: { params: { slug: string } }) {
  const challenge = getChallenge(params.slug);
  if (!challenge) return notFound();

  const badge: Record<string, string> = {
    autonomy: "bg-cyan-500/20 text-cyan-300",
    robotics: "bg-fuchsia-500/20 text-fuchsia-300",
    cyber:    "bg-blue-500/20 text-blue-300",
    energy:   "bg-amber-500/20 text-amber-300",
  };

  return (
    <main className="text-white bg-dark-bg min-h-screen">
      {/* Hero */}
      <section className="relative">
        <Image 
          src={challenge.hero} 
          alt={challenge.title}
          width={1920}
          height={800}
          className="w-full h-[42vh] object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/60" />
        <div className="absolute bottom-6 left-6 right-6 mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-inter ${badge[challenge.domain]}`}>
              {challenge.domain.toUpperCase()}
            </span>
            <span className="px-3 py-1 rounded-full text-xs bg-white/10 font-inter">
              Tier {challenge.tier} • ${challenge.prizePool.toLocaleString()}
            </span>
            <span className="px-3 py-1 rounded-full text-xs bg-white/10 capitalize font-inter">{challenge.status}</span>
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight font-orbitron">{challenge.title}</h1>
          <p className="mt-2 text-white/80 font-inter">{challenge.tagline}</p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-[1fr_320px] gap-10">
        {/* Main */}
        <article className="prose prose-invert prose-cyan max-w-none">
          <h3 className="text-2xl font-bold text-cyan-400 font-orbitron mb-6">Brief</h3>
          <div className="prose prose-invert prose-cyan max-w-none font-inter">
            <MDXRemote source={challenge.brief} />
          </div>
          
          <h3 className="mt-10 text-2xl font-bold text-cyan-400 font-orbitron mb-6">Tracks</h3>
          <ul className="list-disc pl-6 font-inter">
            {challenge.tracks.map(t => <li key={t} className="text-white/80">{t}</li>)}
          </ul>

          <h3 className="mt-10 text-2xl font-bold text-cyan-400 font-orbitron mb-6">Rubric</h3>
          <div className="overflow-hidden rounded-lg border border-white/10">
            <table className="w-full text-sm font-inter">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-3 text-white font-semibold">Criterion</th>
                  <th className="text-left p-3 text-white font-semibold">Weight</th>
                </tr>
              </thead>
              <tbody>
                {challenge.rubric.map((r) => (
                  <tr key={r.id} className="odd:bg-white/[0.02]">
                    <td className="p-3 text-white/80">{r.label}</td>
                    <td className="p-3 text-white/80">{Math.round(r.weight * 100)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {challenge.faq?.length ? (
            <>
              <h3 className="mt-10 text-2xl font-bold text-cyan-400 font-orbitron mb-6">FAQ</h3>
              <div className="space-y-4">
                {challenge.faq.map((f, i) => (
                  <details key={i} className="rounded-md bg-white/5 p-4 font-inter">
                    <summary className="cursor-pointer font-medium text-white">{f.q}</summary>
                    <p className="mt-2 text-white/80">{f.a}</p>
                  </details>
                ))}
              </div>
            </>
          ) : null}
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-lg border border-white/10 p-5 bg-white/5 sticky top-6">
            <h4 className="font-semibold text-white font-orbitron">Timeline</h4>
            <ul className="mt-3 text-sm text-white/80 space-y-2 font-inter">
              <li>Qualifiers: <span className="text-white">{challenge.timeline.quals}</span></li>
              {challenge.timeline.semis && <li>Semifinals: <span className="text-white">{challenge.timeline.semis}</span></li>}
              {challenge.timeline.finals && <li>Finals: <span className="text-white">{challenge.timeline.finals}</span></li>}
            </ul>
            <Link href={`/studio/new?challenge=${challenge.slug}`}>
              <button className="mt-5 w-full rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2.5 transition-colors duration-200 font-inter">
                Enter Now
              </button>
            </Link>
            <button className="mt-3 w-full rounded-md border border-white/20 hover:border-white/40 py-2.5 transition-colors duration-200 font-inter">
              Save for Later
            </button>
            {challenge.rulesUrl && (
              <a href={challenge.rulesUrl} className="mt-3 block text-center underline text-white/80 hover:text-white transition-colors duration-200 font-inter">
                Download Rules (PDF)
              </a>
            )}
          </div>

          <div className="rounded-lg border border-white/10 p-5 bg-white/5">
            <h4 className="font-semibold font-orbitron">Contact & Support</h4>
            <p className="mt-2 text-sm text-white/80 font-inter">
              Questions about eligibility, sensors, or site access? Join the forum or email
              <a href="mailto:support@darla.gov" className="underline ml-1 hover:text-white transition-colors duration-200">support@darla.gov</a>.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
