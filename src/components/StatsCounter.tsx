import { useState, useEffect } from "react";
import { BarChart3, Lightbulb, ThumbsUp, Users } from "lucide-react";
import { motion } from "motion/react";

export default function StatsCounter() {
  const stats = [
    {
      target: 99,
      suffix: "%",
      label: "Translation Accuracy",
      icon: BarChart3,
    },
    {
      target: 140,
      suffix: "+",
      label: "Policy Briefs Published",
      icon: Lightbulb,
    },
    {
      target: 250,
      suffix: "k+",
      label: "Citizens Reached",
      icon: ThumbsUp,
    },
    {
      target: 45,
      suffix: "+",
      label: "African Partnerships",
      icon: Users,
    },
  ];

  return (
    <section className="bg-brand-charcoal text-white py-16 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#eeb030_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-4 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Floating Icon accent */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/15 text-brand-gold">
                  <Icon className="h-6 w-6 stroke-[1.5]" />
                </div>

                {/* Counter value */}
                <span className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white">
                  <AnimatedNumber value={stat.target} />
                  <span className="text-brand-gold">{stat.suffix}</span>
                </span>

                {/* Label */}
                <span className="mt-2 text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest leading-normal">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Simple React counter animation hook helper
function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalDuration = 2000; // 2 seconds count duration
    const incrementTime = Math.max(Math.floor(totalDuration / end), 15);

    const timer = setInterval(() => {
      start += Math.ceil(end / 100); // chunk increment
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
}
