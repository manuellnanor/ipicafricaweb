import { Play, Sparkles, Check } from "lucide-react";
import { motion } from "motion/react";
import teamCollaborationImage from "../assets/hero/ipic-team-collaboration.jpg";

interface InteractiveBannerProps {
  onPlayClick: () => void;
}

export default function InteractiveBanner({ onPlayClick }: InteractiveBannerProps) {
  return (
    <section className="relative w-full py-10 md:py-20 bg-brand-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Video Banner Card */}
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] min-h-[350px] shadow-2xl group border border-brand-green/15">
          
          {/* Overlay Darkener */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-black/40 to-transparent z-10 transition-opacity group-hover:opacity-90" />
          
          {/* Banner cover image */}
          <img
            src={teamCollaborationImage}
            alt="IPIC Africa Policy Summit Presentation"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[10s] group-hover:scale-105"
          />

          {/* Centered Pulsing Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.button
              onClick={onPlayClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-brand-green hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 shadow-2xl cursor-pointer"
            >
              {/* Pulsing rings */}
              <span className="absolute inset-0 rounded-full border-4 border-white opacity-40 animate-ping" />
              <span className="absolute -inset-4 rounded-full border border-white/20 opacity-30 animate-pulse" />
              <Play className="h-8 w-8 fill-current translate-x-0.5" />
            </motion.button>
          </div>

          {/* Floating 'Dust Recycling' Stats Board (Overlapping Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute bottom-6 left-6 z-20 max-w-md rounded-2xl bg-brand-charcoal/95 p-6 text-white backdrop-blur-md shadow-2xl border border-white/10 hidden md:block animate-pulse-slow"
          >
            <div className="flex items-center space-x-2 text-brand-gold mb-3">
              <Sparkles className="h-4 w-4" />
              <h4 className="font-display text-sm font-black uppercase tracking-widest text-brand-gold">
                Translating Science to Action
              </h4>
            </div>

            <div className="space-y-1 text-xs text-gray-300 font-medium mb-6">
              <div className="flex items-center space-x-1.5">
                <Check className="h-3.5 w-3.5 text-brand-gold stroke-3" />
                <span>Rigorous Scientific Research Standards</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Check className="h-3.5 w-3.5 text-brand-gold stroke-3" />
                <span>Creative Digital Media & Translation Suites</span>
              </div>
            </div>

            {/* Progress Bar 1 */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1 text-xs font-bold text-gray-200">
                <span>Policy Engagement Rate</span>
                <span className="text-brand-gold">88%</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "88%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-brand-gold h-full rounded-full"
                />
              </div>
            </div>

            {/* Progress Bar 2 */}
            <div>
              <div className="flex justify-between items-center mb-1 text-xs font-bold text-gray-200">
                <span>Strategic Campaign Output</span>
                <span className="text-brand-gold">95%</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-brand-gold h-full rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile alternative stats block */}
        <div className="mt-6 rounded-2xl bg-brand-charcoal p-5 text-white shadow-lg space-y-4 md:hidden">
          <h4 className="font-display text-sm font-black text-brand-gold uppercase tracking-wider">
            Policy & Strategic Output
          </h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1 col-span-1 border-b border-white/5 pb-1">
                <span>Policy Engagement Rate</span>
                <span>88%</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full">
                <div className="bg-brand-gold h-full w-[88%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Strategic Campaign Output</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full">
                <div className="bg-brand-gold h-full w-[95%] rounded-full" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
