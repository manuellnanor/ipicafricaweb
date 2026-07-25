import { Mail, PhoneCall, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  const contactBlocks = [
    {
      title: "info@ipicafrica.org",
      subtitle: "Send an Email",
      icon: Mail,
      href: "mailto:info@ipicafrica.org",
    },
    {
      title: "+233 50 148 1260",
      subtitle: "Call Us",
      icon: PhoneCall,
      href: "tel:+233501481260",
    },
    {
      title: "Adentan Municipality",
      subtitle: "Our Address",
      icon: MapPin,
      href: "https://maps.google.com/?q=Adentan+Municipality,+Ghana",
    },
  ];

  return (
    <section id="contact-us" className="relative z-20 mx-4 -translate-y-6 rounded-3xl border border-white/10 bg-brand-gold px-4 py-5 shadow-xl sm:mx-6 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-3">
        {contactBlocks.map((block, index) => {
          const IconComponent = block.icon;
          return (
            <motion.a
              key={index}
              href={block.href}
              target={block.icon === MapPin ? "_blank" : undefined}
              rel={block.icon === MapPin ? "noreferrer" : undefined}
              whileHover={{ scale: 1.02 }}
              className="flex min-w-0 items-center gap-3 rounded-2xl bg-white/25 p-4 transition-colors duration-300 hover:bg-white/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal"
            >
              {/* Gold/Charcoal visual ring */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-charcoal text-brand-gold shrink-0 shadow-md">
                <IconComponent className="h-5 w-5 stroke-2" />
              </div>

              <div className="min-w-0">
                <span className="block text-[10px] text-brand-charcoal/50 uppercase tracking-widest font-black leading-none mb-1 text-brand-charcoal/80">
                  {block.subtitle}
                </span>
                <span className="block break-words text-sm font-extrabold leading-5 text-brand-charcoal sm:text-base">
                  {block.title}
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
