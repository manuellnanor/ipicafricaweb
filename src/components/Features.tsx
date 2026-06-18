import { BookOpen, Megaphone, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Features() {
  const cards = [
    {
      title: "Policy Formulation & Analysis",
      description: "Guiding developmental agenda-setting and legislative formulation through evidence-informed research, extensive stakeholder consulting, and rigorous policy translation.",
      icon: BookOpen,
      bg: "bg-white",
      iconColor: "text-brand-green",
      hoverStyle: "hover:border-brand-gold hover:shadow-brand-gold/10",
    },
    {
      title: "Impact Communication & Advocacy",
      description: "Translating complex research findings and developmental data into clear, accessible formats. Disseminating advocacy materials across high-reach digital and print platforms.",
      icon: Megaphone,
      bg: "bg-white",
      iconColor: "text-brand-green",
      hoverStyle: "hover:border-brand-gold hover:shadow-brand-gold/10",
    },
    {
      title: "M&E, Strategy & Learning",
      description: "Designing cutting-edge monitoring, evaluation, and learning frameworks to measure outcomes, demonstrate accountability, and drive sustained capacity growth.",
      icon: TrendingUp,
      bg: "bg-white",
      iconColor: "text-brand-green",
      hoverStyle: "hover:border-brand-gold hover:shadow-brand-gold/10",
    },
  ];

  return (
    <section id="services" className="relative z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -translate-y-10 md:-translate-y-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 p-8 shadow-xl transition-all duration-300 md:p-10 ${card.bg} ${card.hoverStyle} hover:-translate-y-2`}
              id={`feature-card-${index}`}
            >
              <div>
                {/* Icon Container */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-light-green border border-brand-green/10 text-brand-green mb-6 transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-charcoal group-hover:scale-105">
                  <IconComponent className="h-7 w-7" />
                </div>

                {/* Heading */}
                <h3 className="font-display text-xl font-bold text-brand-charcoal tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm text-gray-400 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Read More Interaction */}
              <div className="mt-8 flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-green group-hover:text-brand-gold transition-colors duration-300">
                <span>Learn Strategy</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
