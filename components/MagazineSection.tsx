import Image from "next/image";

type SectionProps = {
  image: string;
  heading: string;
  body: string;
  cta: string;
  ctaLink: string;
  reverse?: boolean;
};

export default function MagazineSection({ 
  image, 
  heading, 
  body, 
  cta, 
  ctaLink, 
  reverse = false 
}: SectionProps) {
  return (
    <section className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} items-center py-20 px-6 max-w-7xl mx-auto`}>
      <div className="lg:w-1/2 px-6">
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <Image 
            src={image} 
            alt={heading} 
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
      <div className="lg:w-1/2 px-6 mt-8 lg:mt-0">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-wide text-cyan-400 font-orbitron mb-6">
          {heading}
        </h2>
        <p className="text-white/80 leading-relaxed text-lg mb-8 font-inter">
          {body}
        </p>
        <a 
          href={ctaLink} 
          className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-md transition-colors duration-200 font-inter"
        >
          {cta}
        </a>
      </div>
    </section>
  );
}
