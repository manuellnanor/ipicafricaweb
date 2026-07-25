import { UserRound } from "lucide-react";
import { motion } from "motion/react";
import femalePlaceholderImage from "../assets/team/female-placeholder.png";
import malePlaceholderImage from "../assets/team/male-placeholder.jpg";

const TEAM = [
  { name: "D.K. Ampofo Adjei, PhD, PMP®", role: "Chief Advisor", image: malePlaceholderImage },
  { name: "Evelyn Acquah, PhD", role: "Policy and Research", image: femalePlaceholderImage },
  { name: "Marian Angela Kyei, Esq.", role: "Legal and Digital Advocacy", image: femalePlaceholderImage },
  { name: "Deborah Boadu, MSc", role: "Governance and Operations", image: femalePlaceholderImage },
];

export default function Volunteers() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-9 max-w-2xl sm:mb-12">
        <div className="mb-3 flex items-center gap-2 text-brand-green">
          <UserRound className="h-5 w-5 text-brand-gold" />
          <span className="font-display text-xs font-extrabold uppercase tracking-widest">Our Team</span>
        </div>
        <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-4xl md:text-5xl">
          Expertise that turns evidence into impact
        </h2>
        <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
          Meet the advisors leading IPIC Africa’s policy, research, advocacy, and operations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((member, index) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="overflow-hidden rounded-3xl border border-brand-green/10 bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-light-green sm:aspect-[5/4]">
              <img src={member.image} alt="" aria-hidden="true" className="h-full w-full object-cover object-top opacity-80 grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-green backdrop-blur-sm">
                Photo coming soon
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="font-display text-lg font-extrabold leading-snug text-brand-charcoal">{member.name}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-brand-green">{member.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
