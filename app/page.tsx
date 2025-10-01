import Image from "next/image";
import MagazineSection from "@/components/MagazineSection";
import HeroCTAs from "@/components/HeroCTAs";

export default function Home() {
  return (
    <main className="bg-dark-bg text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/honeycomb-bg.png"
            alt="Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-60"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-400 font-orbitron">
            ADVANCE by DARLA
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 font-inter">
            Civilian-accessible engineering moonshots. Transparent, measurable,
            patriotic. <br /> Join challenges that define the next generation of
            defense and discovery.
          </p>
          <HeroCTAs />
        </div>
      </section>

      {/* Section 1: Autonomy */}
      <MagazineSection
        image="/images/drone-tunnel.png"
        heading="Autonomy in the Unknown"
        body="From subterranean mazes to collapsed cities, autonomy defines survival. Our SubT-Lite Challenge calls on teams to build robots that map, navigate, and rescue where humans cannot. Dust, darkness, and broken comms — this is your proving ground."
        cta="View SubT-Lite Challenge"
        ctaLink="/challenges/subt-lite"
      />

      {/* Section 2: AI Security */}
      <MagazineSection
        image="/images/cyber-globe.png"
        heading="AI for Defense & Security"
        body="Every day, vulnerabilities are discovered. Imagine an AI agent that finds, patches, and secures systems before adversaries can exploit them. With the AI Patchwork Challenge, coders and hackers compete to secure the backbone of our digital world."
        cta="Explore AI Patchwork"
        ctaLink="/challenges/ai-patchwork"
        reverse
      />

      {/* Section 3: Energy Resilience */}
      <MagazineSection
        image="/images/solar-flare.png"
        heading="Energy & Resilience"
        body="Wars of the future may be won on resilience, not firepower. How do we stabilize microgrids under fire? How do we recover in minutes, not hours? The Resilient Microgrid Challenge dares innovators to keep the lights on when it matters most."
        cta="See Microgrid Challenge"
        ctaLink="/challenges/microgrid"
      />

      {/* Section 4: Showcase Winner */}
      <section className="relative py-32 bg-black/80">
        <div className="absolute inset-0">
          <Image
            src="/images/robotdog-peak.png"
            alt="Robot Dog with Soldier"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-cyan-400 font-orbitron">
            2024 Winner: The Path Forward
          </h2>
          <p className="mt-6 text-white/80 text-lg leading-relaxed font-inter">
            Teams of students, veterans, and garage builders advanced robotics
            beyond expectation. This is the legacy: partnership between human
            and machine, tested in terrain where every step matters.
          </p>
        </div>
      </section>

      {/* Section 5: Lunar Frontiers */}
      <MagazineSection
        image="/images/moonbase.png"
        heading="Lunar Frontiers"
        body="Within the decade, multiple nations will establish permanent outposts on the Moon. Advance by DARLA asks: how do we defend, stabilize, and thrive in contested space? The Lunar Defense Challenge will test autonomous systems, resource management, and strategic positioning in the ultimate frontier."
        cta="Preview Lunar Defense Challenge"
        ctaLink="/challenges/lunar-defense"
        reverse
      />

      {/* Footer */}
      <footer className="bg-dark-secondary py-12 text-center text-white/60 text-sm font-inter">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-cyan-400 font-orbitron mb-2">DARLA</h3>
            <p className="text-white/80">
              Civilian-accessible moonshots. Transparent, measurable, patriotic.
            </p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a href="/about" className="hover:text-white transition-colors duration-200">
              About
            </a>
            <a href="/press" className="hover:text-white transition-colors duration-200">
              Press
            </a>
            <a href="/terms" className="hover:text-white transition-colors duration-200">
              Terms
            </a>
            <a href="/contact" className="hover:text-white transition-colors duration-200">
              Contact
            </a>
          </div>
          <div className="mb-4 p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-white/70 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> DARLA does not exist. This is a creative exercise in military branding for &ldquo;DARLA Challenges&rdquo; by a civilian designer. 
              All content, challenges, and branding are fictional and created for design demonstration purposes only.
            </p>
          </div>
          <p>© 2025 DARLA. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
