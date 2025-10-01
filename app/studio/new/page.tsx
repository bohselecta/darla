"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function NewSubmissionForm() {
  const sp = useSearchParams();
  const challenge = sp.get("challenge");
  
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white bg-dark-bg min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-orbitron">Create Submission</h1>
        <p className="mt-2 text-white/80 font-inter">
          Starting entry for <span className="font-semibold text-cyan-400">{challenge ?? "a challenge"}</span>.
        </p>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2 font-inter">Project Title</label>
          <input 
            className="w-full rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter" 
            placeholder="Enter your project title" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2 font-inter">Description</label>
          <textarea 
            className="w-full h-40 rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter" 
            placeholder="Describe your approach, methodology, and expected outcomes (Markdown supported)"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2 font-inter">Repository URL</label>
          <input 
            className="w-full rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-200 font-inter" 
            placeholder="https://github.com/your-username/your-repo" 
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button className="rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2.5 transition-colors duration-200 font-inter">
            Save Draft
          </button>
          <Link href="/challenges" className="inline-block px-5 py-2.5 rounded-md border border-white/20 hover:border-white/40 transition-colors duration-200 font-inter">
            Back to Challenges
          </Link>
        </div>
      </form>

      {/* Help Section */}
      <div className="mt-12 p-6 rounded-lg border border-white/10 bg-white/5">
        <h3 className="text-lg font-semibold text-cyan-400 font-orbitron mb-3">Need Help?</h3>
        <p className="text-white/80 font-inter mb-4">
          Review the challenge brief, check the FAQ, and join our community forum for guidance.
        </p>
        <div className="flex gap-4">
          <Link href={`/challenges/${challenge}`} className="text-cyan-400 hover:text-cyan-300 underline font-inter">
            View Challenge Details
          </Link>
          <a href="mailto:support@darla.gov" className="text-cyan-400 hover:text-cyan-300 underline font-inter">
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}

export default function NewSubmission() {
  return (
    <Suspense fallback={
      <main className="mx-auto max-w-3xl px-6 py-16 text-white bg-dark-bg min-h-screen">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-orbitron">Create Submission</h1>
          <p className="mt-2 text-white/80 font-inter">Loading...</p>
        </div>
      </main>
    }>
      <NewSubmissionForm />
    </Suspense>
  );
}
