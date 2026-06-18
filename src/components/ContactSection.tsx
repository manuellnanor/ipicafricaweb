import { Mail, PhoneCall, MapPin, Sparkles } from "lucide-react";
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
      title: "+233 302 123 456",
      subtitle: "Any Time Call Us",
      icon: PhoneCall,
      href: "tel:+233302123456",
    },
    {
      title: "Accra High Street, Accra, Ghana",
      subtitle: "Our Address",
      icon: MapPin,
      href: "https://maps.google.com/?q=Accra+Ghana",
    },
  ];

  return (
    <section id="contact-us" className="bg-brand-gold py-8 mx-auto -translate-y-6 max-w-7xl px-4 sm:px-6 lg:px-8 rounded-3xl shadow-xl relative z-20 border border-white/10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-charcoal/10 items-center">
        {contactBlocks.map((block, index) => {
          const IconComponent = block.icon;
          return (
            <motion.a
              key={index}
              href={block.href}
              target={block.icon === MapPin ? "_blank" : undefined}
              rel={block.icon === MapPin ? "noreferrer" : undefined}
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-4 p-4 first:pt-0 md:first:pt-4 last:pb-0 md:last:pb-4 justify-center md:justify-start hover:text-brand-green duration-300"
            >
              {/* Gold/Charcoal visual ring */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-charcoal text-brand-gold shrink-0 shadow-md">
                <IconComponent className="h-5 w-5 stroke-2" />
              </div>

              <div>
                <span className="block text-[10px] text-brand-charcoal/50 uppercase tracking-widest font-black leading-none mb-1 text-brand-charcoal/80">
                  {block.subtitle}
                </span>
                <span className="block text-sm sm:text-base font-extrabold text-brand-charcoal tracking-wide truncate">
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
