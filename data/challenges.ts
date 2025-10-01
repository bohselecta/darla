export type Challenge = {
  slug: string;
  title: string;
  tagline: string;
  domain: "autonomy" | "robotics" | "cyber" | "energy";
  tier: 1 | 2;
  prizePool: number;
  status: "upcoming" | "open" | "closed";
  hero: string;            // /images/...
  tracks: string[];        // ["Sim","Hardware"]
  timeline: { quals: string; semis?: string; finals?: string };
  brief: string;           // markdown
  rulesUrl?: string;
  rubric: { id: string; label: string; weight: number }[];
  faq?: { q: string; a: string }[];
};

export const CHALLENGES: Challenge[] = [
  {
    slug: "subt-lite",
    title: "SubT-Lite: Find the Lost Drone",
    tagline: "Map, locate, extract — when comms fail and dust blinds.",
    domain: "robotics",
    tier: 1,
    prizePool: 500_000,
    status: "open",
    hero: "/images/drone-tunnel.png",
    tracks: ["Sim", "Hardware"],
    timeline: { quals: "2026-01-31", semis: "2026-03-15", finals: "2026-06-10" },
    brief: `
### Mission
Search a multi-room/basement maze with intermittent comms. Produce a 2D/3D map and locate **N** RFID beacons in \`≤ 30 min\`.

### Deliverables
- Map artifact (PLY/GLB + coverage heatmap)
- Beacon coordinates + confidence
- Autonomy logs + safety case
- Repro steps (Sim) / Course video (HW)

### Scoring
- Beacons found (precision/recall)
- Map accuracy (IoU vs ground truth)
- Time to first beacon + total time
- Autonomy ratio (no teleop)
    `.trim(),
    rulesUrl: "/docs/subt-lite-rules.pdf",
    rubric: [
      { id: "safety", label: "Operational Safety", weight: 0.30 },
      { id: "perf",  label: "Performance / Time", weight: 0.35 },
      { id: "repro", label: "Reproducibility / Docs", weight: 0.20 },
      { id: "impact",label: "Field Impact", weight: 0.15 }
    ],
    faq: [
      { q: "Can we use drones + UGVs?", a: "Yes, multi-robot teams are allowed; coordinate via your own link budget." },
      { q: "What sensors are permitted?", a: "Any passive sensors; active emitters must meet safety limits (lidar class 1, etc.)." }
    ]
  },
  {
    slug: "ai-patchwork",
    title: "AI Patchwork: Autonomously Find & Fix Vulns",
    tagline: "Ship an agent that discovers CVEs and proposes verified patches.",
    domain: "cyber",
    tier: 2,
    prizePool: 1_000_000,
    status: "open",
    hero: "/images/cyber-globe.png",
    tracks: ["Sandbox CTF"],
    timeline: { quals: "2026-02-20", semis: "2026-04-05", finals: "2026-06-20" },
    brief: `
### Mission
Autonomously triage OSS repos, surface true vulns, and open mergeable PRs with tests.

### Scoring
- New vulns found (validated)
- Accepted patches (merged)
- False-positive rate
- Runtime & resource use
    `.trim(),
    rubric: [
      { id: "valid", label: "Valid Findings", weight: 0.45 },
      { id: "patch", label: "Patch Quality & Tests", weight: 0.30 },
      { id: "fp",    label: "Low False Positives", weight: 0.15 },
      { id: "eff",   label: "Efficiency", weight: 0.10 }
    ]
  },
  {
    slug: "microgrid",
    title: "Resilient Microgrid Control",
    tagline: "Stabilize under shocks; black-start in minutes.",
    domain: "energy",
    tier: 1,
    prizePool: 500_000,
    status: "upcoming",
    hero: "/images/solar-flare.png",
    tracks: ["Simulation"],
    timeline: { quals: "2026-03-10", semis: "2026-05-01", finals: "2026-07-01" },
    brief: `
### Mission
Maintain QoS under stochastic loads and component failures; minimize ENS (energy not served).

### Metrics
- Stability score (frequency/voltage)
- ENS & curtailment
- Black-start recovery time
    `.trim(),
    rubric: [
      { id: "stab",  label: "Stability", weight: 0.40 },
      { id: "ens",   label: "Energy Not Served", weight: 0.35 },
      { id: "reco",  label: "Recovery Time", weight: 0.15 },
      { id: "docs",  label: "Documentation", weight: 0.10 }
    ]
  },
  {
    slug: "lunar-defense",
    title: "Lunar Defense Challenge",
    tagline: "Defend, stabilize, and thrive in contested space.",
    domain: "autonomy",
    tier: 2,
    prizePool: 2_000_000,
    status: "upcoming",
    hero: "/images/moonbase.png",
    tracks: ["Simulation", "Hardware"],
    timeline: { quals: "2026-08-01" },
    brief: `
### Mission
Design autonomous systems for lunar outpost defense, resource management, and strategic positioning in contested space environments.

### Deliverables
- Autonomous defense protocols
- Resource optimization algorithms
- Strategic positioning systems
- Multi-nation coordination frameworks

### Coming Soon
This challenge is currently in development. Registration will open in Q3 2026.
    `.trim(),
    rubric: [
      { id: "defense", label: "Defense Systems", weight: 0.35 },
      { id: "resource", label: "Resource Management", weight: 0.25 },
      { id: "strategy", label: "Strategic Positioning", weight: 0.25 },
      { id: "coordination", label: "Multi-Nation Coordination", weight: 0.15 }
    ],
    faq: [
      { q: "When will registration open?", a: "Registration for the Lunar Defense Challenge will open in Q3 2026. Sign up for notifications to be the first to know." },
      { q: "What simulation environments will be used?", a: "We're developing custom lunar terrain simulations with realistic gravity, radiation, and resource constraints." }
    ]
  }
];

export const getChallenge = (slug: string) =>
  CHALLENGES.find(c => c.slug === slug);
export const getChallengeSlugs = () => CHALLENGES.map(c => c.slug);
