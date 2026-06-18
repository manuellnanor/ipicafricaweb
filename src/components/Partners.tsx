import { Sparkles, HelpingHand } from "lucide-react";
import { motion } from "motion/react";

export default function Partners() {
  const partners = [
    { name: "Kudi", style: "font-display text-2xl font-black italic text-teal-300" },
    { name: "DISRUPT", style: "font-sans text-xl font-bold tracking-widest text-emerald-300" },
    { name: "AIR PEACE", style: "font-display text-lg font-black tracking-tighter text-blue-350" },
    { name: "Arik", style: "font-serif text-2xl font-semibold italic text-red-300" },
    { name: "TRANSIT", style: "font-mono text-lg font-extrabold text-amber-250" },
    { name: "Spectranet", style: "font-display text-xl font-bold tracking-tight text-indigo-300" },
  ];

  return (
    <section className="bg-brand-charcoal py-12 border-b border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Caption Grid label */}
        <div className="flex items-center justify-center space-x-2 text-white/40 mb-6">
          <div className="h-px w-10 bg-white/10" />
          <span className="text-[10px] uppercase font-bold tracking-widest">Major Partners & Sponsors</span>
          <div className="h-px w-10 bg-white/10" />
        </div>

        {/* Partners Strip */}
        <div className="grid grid-cols-2 gap-8 items-center justify-items-center md:grid-cols-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, y: -2 }}
              className={`text-center py-2 px-4 rounded-xl cursor-default transition-all select-none`}
            >
              <div className={`${p.style} drop-shadow-sm`}>
                {p.name}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
