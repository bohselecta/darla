"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  handle: z.string().min(2).regex(/^[a-z0-9_]+$/i, "Letters, numbers, underscores"),
  country: z.string().min(2),
  org: z.string().optional(),
  bio: z.string().max(280, "Keep it short & tactical").optional(),
  skills: z.array(z.string()).min(1, "Pick at least one skill"),
  website: z.string().url().optional().or(z.literal("")),
  repo: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().url().optional().or(z.literal("")),
});

export type ProfileFormValues = z.infer<typeof schema>;

const SKILLS = [
  "Autonomy","SLAM","Perception","Controls","Embedded","Robotics",
  "Cybersecurity","Reverse Eng","LLMs","Compilers","Distributed Systems",
  "Power Systems","Optimization","Aero","Mech Design","HF/Comms"
];

const COUNTRIES = ["United States","Canada","United Kingdom","Germany","France","Japan","Australia","India","Brazil","Mexico","Poland","Ukraine","Israel","Singapore","South Korea"];

export default function ProfileForm({ initial }: { initial?: Partial<ProfileFormValues> }) {
  const [saving, setSaving] = useState(false);
  const [skills, setSkills] = useState<string[]>(initial?.skills ?? []);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ProfileFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: initial?.name ?? "",
      handle: initial?.handle ?? "",
      country: initial?.country ?? "United States",
      org: initial?.org ?? "",
      bio: initial?.bio ?? "",
      skills: skills,
      website: initial?.website ?? "",
      repo: initial?.repo ?? "",
      linkedin: initial?.linkedin ?? "",
    }
  });

  function toggleSkill(s: string) {
    const next = skills.includes(s) ? skills.filter(x => x !== s) : [...skills, s];
    setSkills(next);
    setValue("skills", next, { shouldValidate: true });
  }

  const onSubmit = async (data: ProfileFormValues) => {
    setSaving(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(data)
    });
    setSaving(false);
    if (res.ok) {
      // simple toast
      alert("Saved. Welcome aboard.");
      window.location.href = "/dash";
    } else {
      const msg = await res.text();
      alert(`Save failed: ${msg}`);
    }
  };

  return (
    <main className="relative mx-auto max-w-3xl px-6 py-16 text-white bg-dark-bg min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/honeycomb-bg.png"
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-30"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-white/60 font-inter">
          ADVANCE • PROFILE
        </div>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-cyan-400 font-orbitron">Build your mission card</h2>
        <p className="mt-2 text-white/70 font-inter">So teams can find you. So judges know your edge.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Topbar blurb */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h1 className="text-3xl font-bold tracking-tight text-cyan-400 font-orbitron">Create your profile</h1>
          <p className="mt-2 text-white/70 font-inter">
            One minute. Then you&apos;re in. You can refine details later.
          </p>
        </div>

        {/* Name & handle */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-white/70 font-inter">Full name</label>
            <input {...register("name")} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter"
                   placeholder="Sam Carter" />
            {errors.name && <p className="mt-1 text-sm text-rose-400 font-inter">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm text-white/70 font-inter">Handle</label>
            <div className="mt-1 flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-white/10 bg-white/5 text-white/60 font-inter">@</span>
              <input {...register("handle")} className="w-full rounded-r-md bg-white/5 border border-white/10 p-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter"
                     placeholder="vector_ops" />
            </div>
            {errors.handle && <p className="mt-1 text-sm text-rose-400 font-inter">{errors.handle.message}</p>}
          </div>
        </div>

        {/* Country & org */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-white/70 font-inter">Country</label>
            <select {...register("country")} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter">
              {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            {errors.country && <p className="mt-1 text-sm text-rose-400 font-inter">{errors.country.message}</p>}
          </div>
          <div>
            <label className="block text-sm text-white/70 font-inter">Organization (optional)</label>
            <input {...register("org")} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter"
                   placeholder="Indie / University / Company" />
          </div>
        </div>

        {/* Skills chips */}
        <div>
          <label className="block text-sm text-white/70 font-inter">Skills</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {SKILLS.map(s => (
              <button type="button" key={s}
                      onClick={() => toggleSkill(s)}
                      className={`px-3 py-1 rounded-full text-sm border transition-colors duration-200 font-inter ${skills.includes(s)
                        ? "bg-cyan-500 text-black border-cyan-400"
                        : "bg-white/5 text-white/80 border-white/10 hover:border-white/30"}`}>
                {s}
              </button>
            ))}
          </div>
          {errors.skills && <p className="mt-2 text-sm text-rose-400 font-inter">{errors.skills.message as string}</p>}
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm text-white/70 font-inter">Short bio</label>
          <textarea {...register("bio")} rows={4}
                    className="mt-1 w-full rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter"
                    placeholder="What you build. What you want to solve." />
          <div className="mt-1 text-xs text-white/50 font-inter">Max 280 chars.</div>
        </div>

        {/* Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm text-white/70 font-inter">Website</label>
            <input {...register("website")} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter"
                   placeholder="https://yoursite.dev" />
          </div>
          <div>
            <label className="block text-sm text-white/70 font-inter">GitHub / Repo</label>
            <input {...register("repo")} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter"
                   placeholder="https://github.com/you" />
          </div>
          <div>
            <label className="block text-sm text-white/70 font-inter">LinkedIn</label>
            <input {...register("linkedin")} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter"
                   placeholder="https://linkedin.com/in/you" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button disabled={saving}
                  className="px-5 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors duration-200 font-inter disabled:opacity-50">
            {saving ? "Saving…" : "Save & Continue"}
          </button>
          <Link href="/challenges" className="px-5 py-3 rounded-md border border-white/20 hover:border-white/40 transition-colors duration-200 font-inter">
            I&apos;ll set this up later
          </Link>
        </div>
      </form>

        <p className="mt-8 text-center text-white/50 text-sm font-inter">
          By continuing, you agree to the program rules and code-of-conduct.
        </p>
      </div>
    </main>
  );
}
