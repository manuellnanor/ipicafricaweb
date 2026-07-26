import { UserRound } from "lucide-react";
import { motion } from "motion/react";
import type { CSSProperties } from "react";
import dkAmpofoAdjeiImage from "../assets/team/dk-ampofo-adjei.jpeg";
import paulKofiAgbadiImage from "../assets/team/paul-kofi-agbadi-grey.png";
import deborahBoaduImage from "../assets/team/deborah-boadu-grey.png";
import evelynAcquahImage from "../assets/team/evelyn-acquah-grey.png";

const TEAM = [
  {
    name: "D.K. Ampofo Adjei, PhD, PMP®",
    role: "Chief Advisor",
    image: dkAmpofoAdjeiImage,
    imagePosition: "50% 30%",
    imageTransform: "scale(1)",
  },
  {
    name: "Evelyn Acquah, PhD",
    role: "Policy, Research, and Programmes",
    image: evelynAcquahImage,
    imagePosition: "50% 12%",
    imageTransform: "translateY(10%) scale(1.38)",
  },
  {
    name: "Paul Kofi Agbadi",
    role: "Digital Innovation & AI",
    image: paulKofiAgbadiImage,
    imagePosition: "50% 10%",
    imageTransform: "translateY(14%) scale(1.4)",
    desktopImageTransform: "translateY(18%) scale(1.4)",
  },
  {
    name: "Deborah Boadu, MSc",
    role: "Governance and Operations",
    image: deborahBoaduImage,
    imagePosition: "50% 10%",
    imageTransform: "translateY(11%) scale(1.4)",
    desktopImageTransform: "translateY(7%) scale(1.4)",
  },
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
            className="group relative min-h-[390px] overflow-hidden rounded-2xl bg-[linear-gradient(90deg,#fbfbfb_0%,#f3f3f3_55%,#ededed_100%)] shadow-sm sm:min-h-[430px] lg:min-h-[344px]"
          >
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[linear-gradient(90deg,#fbfbfb_0%,#f3f3f3_55%,#ededed_100%)]">
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="team-portrait h-full w-full object-cover"
                style={{
                  objectPosition: member.imagePosition,
                  "--portrait-transform": member.imageTransform,
                  "--portrait-transform-desktop": member.desktopImageTransform ?? member.imageTransform,
                } as CSSProperties}
              />
            </div>
            <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/75 bg-white/95 px-4 py-4 shadow-[0_8px_28px_rgba(15,29,25,0.12)] backdrop-blur-sm sm:inset-x-4 sm:bottom-4">
              <h3 className="font-display text-base font-extrabold leading-snug text-brand-charcoal">{member.name}</h3>
              <p className="mt-1 text-xs font-semibold leading-5 text-brand-green">{member.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
