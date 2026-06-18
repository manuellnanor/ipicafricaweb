import { useState, FormEvent, MouseEvent } from "react";
import { UserPlus, Share2, Facebook, Twitter, Instagram, Linkedin, Heart, HelpCircle, X, Check, HeartHandshake } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Volunteer } from "../types";
import amaBoatengImage from "../assets/team/ama-boateng.jpg";
import yaoMensahImage from "../assets/team/yao-mensah.png";
import ebenezerKwabenaImage from "../assets/team/ebenezer-kwabena.jpg";
import rosemaryAppiahImage from "../assets/team/rosemary-appiah.jpg";

const VOLUNTEERS: Volunteer[] = [
  {
    id: "vol-1",
    name: "Prof. Ama Boateng",
    role: "Director of Policy & Research",
    image: amaBoatengImage,
    socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: "vol-2",
    name: "Dr. Yao Mensah",
    role: "M&E and Learning Specialist",
    image: yaoMensahImage,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    id: "vol-3",
    name: "Ebenezer Kwabena",
    role: "Digital Advocacy Lead",
    image: ebenezerKwabenaImage,
    socials: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: "vol-4",
    name: "Rosemary Appiah",
    role: "Governance & Operations",
    image: rosemaryAppiahImage,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

export default function Volunteers() {
  const [volunteersList, setVolunteersList] = useState<Volunteer[]>(VOLUNTEERS);
  const [activeShareId, setActiveShareId] = useState<string | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  const [applicantName, setApplicantName] = useState("");
  const [applicantArea, setApplicantArea] = useState("Policy Analysis");
  const [applicantEmail, setApplicantEmail] = useState("");

  const handleApplySubmit = (e: FormEvent) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setIsApplyModalOpen(false);
      setApplySuccess(false);
      setApplicantName("");
      setApplicantEmail("");
    }, 2500);
  };

  const toggleShare = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setActiveShareId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="team" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="flex items-center space-x-2 text-brand-green mb-3">
            <UserPlus className="h-5 w-5 text-brand-gold animate-bounce" />
            <span className="font-display text-xs font-extrabold uppercase tracking-widest text-brand-green">
              Our Experts & Advisors
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl md:text-5xl leading-tight">
            Together For Sustainable Social Impact
          </h2>
        </div>

        <div className="mt-4 md:mt-0 max-w-sm text-sm text-gray-500 md:text-right">
          Meet our world-class advisory of policy architects, communication specialists, and monitoring experts based in Accra.
        </div>
      </div>

      {/* Grid of Volunteer Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {volunteersList.map((vol) => (
          <div
            key={vol.id}
            className="group relative overflow-hidden rounded-3xl aspect-[3/4] shadow-md border border-gray-100 bg-white"
          >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/45 to-transparent z-10" />

            {/* Portrait Image */}
            <img
              src={vol.image}
              alt={vol.name}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

            {/* Sharing toggle button */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={(e) => toggleShare(vol.id, e)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-charcoal hover:bg-white hover:scale-110 shadow-lg cursor-pointer transition-all duration-300"
              >
                <Share2 className="h-4 w-4" />
              </button>

              {/* Floating Social Icons Overlay */}
              <AnimatePresence>
                {activeShareId === vol.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -10 }}
                    className="absolute right-11 top-0 flex items-center space-x-1.5 rounded-full bg-brand-charcoal/90 px-3.5 py-1.5 text-white shadow-xl backdrop-blur-sm border border-white/10"
                  >
                    <a href="#" className="hover:text-brand-gold text-white/85 text-xs transition-colors"><Facebook className="h-3.5 w-3.5" /></a>
                    <a href="#" className="hover:text-brand-gold text-white/85 text-xs transition-colors"><Twitter className="h-3.5 w-3.5" /></a>
                    <a href="#" className="hover:text-brand-gold text-white/85 text-xs transition-colors"><Instagram className="h-3.5 w-3.5" /></a>
                    <a href="#" className="hover:text-brand-gold text-white/85 text-xs transition-colors"><Linkedin className="h-3.5 w-3.5" /></a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Member detail Box overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl bg-brand-charcoal/95 p-4 text-center border border-white/5 shadow-inner">
              <h4 className="font-display text-base font-extrabold text-white">
                {vol.name}
              </h4>
              <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mt-1">
                {vol.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Joining Banner */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 border-t border-brand-green/10 pt-8">
        <button
          onClick={() => setIsApplyModalOpen(true)}
          className="group flex items-center space-x-3 rounded-full bg-brand-gold px-8 py-3.5 font-display text-sm font-bold text-brand-charcoal hover:bg-brand-green hover:text-white transition-all duration-300 shadow-md cursor-pointer"
        >
          <span>Become a Research Fellow</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-charcoal text-white group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-transform group-hover:translate-x-1 animate-pulse">
            <UserPlus className="h-3 w-3" />
          </span>
        </button>

        <div className="text-sm font-normal text-gray-500 text-center sm:text-left">
          Want to influence policy or support M&E strategy across Africa?{" "}
          <button
            onClick={() => setIsApplyModalOpen(true)}
            className="text-brand-green font-bold hover:text-brand-gold transition-colors cursor-pointer"
          >
            Apply as an Associate Advisor now →
          </button>
        </div>
      </div>

      {/* Volunteer Registration Modal */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <div className="absolute inset-0" onClick={() => setIsApplyModalOpen(false)} />

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl p-6 md:p-8 z-10 text-brand-charcoal border border-gray-100"
            >
              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="absolute top-5 right-5 rounded-full bg-gray-100 p-1.5 text-gray-500 hover:bg-brand-gold hover:text-brand-charcoal transition-all cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              {applySuccess ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6 scale-110 animate-bounce">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-brand-charcoal">
                    Application Lodged!
                  </h3>
                  <p className="mt-3 text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-brand-green">{applicantName}</span>! Your associate advisor proposal for the{" "}
                    <span className="font-semibold text-brand-gold uppercase">{applicantArea}</span> department has been recorded. Our research office will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit}>
                  <div className="flex items-center space-x-2 text-brand-green mb-2">
                    <HeartHandshake className="h-5 w-5 text-brand-gold animate-pulse" />
                    <span className="font-display text-xs font-bold uppercase tracking-wider">
                      Empower Dialogue
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-extrabold leading-tight tracking-tight mb-6">
                    Apply as an Associate Advisor
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Emilia Rose"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green animate-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="emilia@ipicafrica.org"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Deployment Area
                      </label>
                      <select
                        value={applicantArea}
                        onChange={(e) => setApplicantArea(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green font-semibold text-brand-charcoal"
                      >
                        <option value="Policy Analysis">Policy Formulation & analysis</option>
                        <option value="Impact Communication">Impact Communication & Advocacy</option>
                        <option value="M&E, Strategy & Learning">M&E, Strategy & Learning</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 rounded-full bg-brand-gold hover:bg-brand-green hover:text-white py-3.5 font-display text-sm font-bold text-brand-charcoal transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <span>Submit Advisor Proposal</span>
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
