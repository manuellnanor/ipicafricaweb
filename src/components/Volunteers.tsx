import { UserRound } from "lucide-react";
import { motion } from "motion/react";
import paulKofiAgbadiImage from "../assets/team/paul-kofi-agbadi.png";
import deborahBoaduImage from "../assets/team/deborah-boadu.png";
import evelynAcquahImage from "../assets/team/evelyn-acquah.png";

const TEAM = [
  { name: "D.K. Ampofo Adjei, PhD, PMP®", role: "Chief Advisor" },
  { name: "Evelyn Acquah, PhD", role: "Policy, Research, and Programmes", image: evelynAcquahImage },
  { name: "Paul Kofi Agbadi", role: "Digital Innovation & AI", image: paulKofiAgbadiImage },
  { name: "Deborah Boadu, MSc", role: "Governance and Operations", image: deborahBoaduImage },
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
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-white sm:aspect-[5/4]">
              {member.image ? (
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-brand-green/55">
                  <UserRound className="h-16 w-16 stroke-[1.25]" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Photo coming soon</span>
                </div>
              )}
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
