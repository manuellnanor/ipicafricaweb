import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import teamCollaborationImage from "../assets/hero/ipic-team-collaboration.jpg";
import financialStrategyImage from "../assets/hero/ipic-financial-strategy.jpg";
import womanLeadershipImage from "../assets/hero/ipic-woman-leadership.jpg";

interface HeroProps {
  onDiscoverClick: () => void;
}

const SLIDES = [
  {
    heading: "Bridging Research, Communication, and Policy in Africa",
    bgImage: teamCollaborationImage,
    imagePosition: "center 58%",
    tagline: "We turn complex scientific research into accessible communication and actionable policy frameworks across the continent.",
  },
  {
    heading: "Empowering organizations for sustainable social impact",
    bgImage: financialStrategyImage,
    imagePosition: "center",
    tagline: "Supporting governments, development partners, and civil society with cutting-edge knowledge, technology, and advocacy.",
  },
  {
    heading: "Advancing democratic rights and digital inclusion",
    bgImage: womanLeadershipImage,
    imagePosition: "center 45%",
    tagline: "Promoting rights-based governance, digital equity, and responsible AI deployment to foster accountable, inclusive progress.",
  },
];

export default function Hero({ onDiscoverClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-brand-dark">
      {/* All images stay mounted so each transition is a seamless crossfade. */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, idx) => (
          <motion.div
            key={slide.bgImage}
            initial={false}
            animate={{
              opacity: currentSlide === idx ? 1 : 0,
              scale: currentSlide === idx ? 1 : 1.045,
            }}
            transition={{
              opacity: { duration: 1.6, ease: [0.4, 0, 0.2, 1] },
              scale: { duration: 7, ease: "linear" },
            }}
            className="absolute inset-0"
            aria-hidden={currentSlide !== idx}
          >
            <img
              src={slide.bgImage}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectPosition: slide.imagePosition }}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-dark/80 via-brand-charcoal/55 to-brand-dark/35" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center justify-center text-center">
        <div className="mx-auto grid w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          {SLIDES.map((slide, idx) => (
            <motion.div
              key={slide.heading}
              initial={false}
              animate={{
                opacity: currentSlide === idx ? 1 : 0,
                y: currentSlide === idx ? 0 : 18,
                filter: currentSlide === idx ? "blur(0px)" : "blur(3px)",
              }}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
              className="col-start-1 row-start-1 self-center"
              style={{ pointerEvents: currentSlide === idx ? "auto" : "none" }}
              aria-hidden={currentSlide !== idx}
            >
              <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {slide.heading.split("Africa")[0]}
                {slide.heading.includes("Africa") && (
                  <span className="block text-brand-gold md:inline">Africa</span>
                )}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-white/90 sm:text-lg md:text-xl">
                {slide.tagline}
              </p>

              <div className="mt-10">
                <button
                  onClick={onDiscoverClick}
                  className="group inline-flex cursor-pointer items-center space-x-3 rounded-full bg-brand-gold px-8 py-4 font-display text-base font-extrabold text-brand-charcoal shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white"
                >
                  <span>Explore Who We Are</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-charcoal text-white transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Gold Grid & Slide controls */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
              currentSlide === idx ? "w-8 bg-brand-gold" : "w-2.5 bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Dot Decorative Matrix (Bottom Right) */}
      <div className="absolute bottom-10 right-10 z-10 hidden md:grid grid-cols-5 gap-1.5 opacity-30">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="h-1 w-1 rounded-full bg-brand-gold" />
        ))}
      </div>
    </section>
  );
}
