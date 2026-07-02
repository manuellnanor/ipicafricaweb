import { useState } from "react";
import { FolderGit2, ArrowRight, Download, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CampingProject } from "../types";
import teamCollaborationImage from "../assets/hero/ipic-team-collaboration.jpg";
import financialStrategyImage from "../assets/hero/ipic-financial-strategy.jpg";
import womanLeadershipImage from "../assets/hero/ipic-woman-leadership.jpg";
import menstrualHealthPolicyBriefImage from "../assets/projects/menstrual-health-policy-brief.png";

const PROJECTS: CampingProject[] = [
  {
    id: "proj-1",
    title: "Menstrual Health Is Mental Health: Evidence and Policy Actions to Support Adolescent Girls in Ghana",
    category: "Research",
    description: "A policy brief translating evidence on menstrual hygiene management and psychological wellbeing into practical recommendations for schools and policymakers.",
    image: menstrualHealthPolicyBriefImage,
    briefUrl: "/downloads/menstrual-health-policy-brief.pdf",
  },
  {
    id: "proj-2",
    title: "Responsible AI Advisory Program",
    category: "Technology",
    description: "Formulating rights-based algorithmic ethics blueprints for technology hubs and civil society advocates in Ghana.",
    image: womanLeadershipImage,
  },
  {
    id: "proj-3",
    title: "Ghana Education Strategy Formulation",
    category: "Governance",
    description: "Facilitating multi-ministerial consultative sessions to construct the 2026-2030 sustainable development strategy paper.",
    image: financialStrategyImage,
  },
  {
    id: "proj-4",
    title: "Rural Health Research Translation",
    category: "Research",
    description: "Adapting intricate maternal health medical findings into graphical local-language print and audio campaigns.",
    image: teamCollaborationImage,
  },
];

export default function CampingProjects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Governance", "Communication", "Technology", "Research"];
  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="projects-insights" className="border-y border-brand-green/5 bg-brand-cream/60 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center space-x-2 text-brand-green">
              <FolderGit2 className="h-5 w-5 text-brand-gold" />
              <span className="font-display text-xs font-extrabold uppercase tracking-widest">
                Impact Projects Portfolio
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-4xl md:text-5xl">
              Explore Our Successful Missions
            </h2>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 md:mt-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition-all ${
                  activeFilter === filter
                    ? "bg-brand-green text-white shadow-md"
                    : "border border-gray-100 bg-white text-gray-500 hover:bg-brand-light-green hover:text-brand-green"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-gray-100 bg-brand-charcoal shadow-lg"
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/60 to-black/10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between">
                  <span className="rounded-full bg-brand-gold px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                    {project.category}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-brand-gold backdrop-blur-sm">
                    <Star className="h-3.5 w-3.5 fill-current" />
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-6 text-white">
                  <h3 className="line-clamp-4 font-display text-base font-bold leading-snug transition-colors group-hover:text-brand-gold">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-300">
                    {project.description}
                  </p>
                  {project.briefUrl ? (
                    <a
                      href={project.briefUrl}
                      download
                      className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-brand-gold transition-colors hover:text-white"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        Download Brief
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-white transition-transform group-hover:translate-y-[-2px]">
                        <Download className="h-4 w-4" />
                      </span>
                    </a>
                  ) : (
                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                        View Mission Brief
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
