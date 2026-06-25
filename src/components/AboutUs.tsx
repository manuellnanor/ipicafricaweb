import { useState } from "react";
import { Check, ArrowRight, Award, Zap, Globe, FileText, Users, HeartHandshake, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import aboutUsGroupImage from "../assets/news/menstrual-health-policy-hero.jpeg";
import aboutUsChairSpeakerImage from "../assets/news/about-us-speaker-chair.jpeg";
import aboutUsIpicSpeakerImage from "../assets/news/about-us-speaker-ipic.jpeg";

interface AboutUsProps {
  onPartnerClick: () => void;
}

export default function AboutUs({ onPartnerClick }: AboutUsProps) {
  const [activeTab, setActiveTab] = useState<"who-we-are" | "vision-mission">("who-we-are");

  const whoWeServe = [
    "Governments and public agencies",
    "Development partners and donors",
    "Civil society organisations and media",
    "Corporate organisations with CSR/advocacy focus",
    "Academic and research institutions",
  ];

  return (
    <section id="who-we-are" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 items-stretch gap-16 lg:grid-cols-12">
        {/* Left Column: Overlapping Collage */}
        <div className="relative lg:col-span-6 flex flex-col justify-center">
          <div className="grid grid-cols-12 gap-4">
            {/* Main top left image */}
            <div className="col-span-8 relative">
              <div className="overflow-hidden rounded-2xl shadow-xl aspect-[4/3] border-4 border-white bg-brand-charcoal">
                <img
                  src={aboutUsGroupImage}
                  alt="IPiC Africa team at menstrual health research dissemination forum"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              
              {/* Overlapping experience badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -bottom-8 -right-6 md:right-4 z-20 flex flex-col justify-center rounded-2xl bg-brand-gold px-6 py-5 text-brand-charcoal shadow-2xl border-2 border-white"
              >
                <span className="font-display text-4xl font-black leading-none tracking-tight">Accra</span>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-widest leading-none text-brand-charcoal/80">
                  Headquarters<br />Ghana
                </span>
              </motion.div>
            </div>

            {/* Bottom left small photo */}
            <div className="col-span-5 -mt-8 relative z-10">
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-square border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-300 bg-brand-charcoal">
                <img
                  src={aboutUsIpicSpeakerImage}
                  alt="IPiC Africa representative speaking at a research dissemination forum"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Bottom right photo */}
            <div className="col-span-7 -mt-16 sm:-mt-24">
              <div className="overflow-hidden rounded-2xl shadow-xl aspect-[16/10] border-4 border-white bg-brand-charcoal">
                <img
                  src={aboutUsChairSpeakerImage}
                  alt="Forum speaker presenting menstrual health research"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Decorative Globe Background Badge */}
          <div className="absolute -left-12 -top-12 -z-10 text-brand-light-green select-none pointer-events-none">
            <Globe className="h-56 w-56 opacity-40 transform -rotate-12 animate-pulse" />
          </div>
        </div>

        {/* Right Column: Information & Interactive Widget */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            {/* Tab Swapper */}
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActiveTab("who-we-are")}
                className={`px-4 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "who-we-are"
                    ? "bg-brand-green text-white shadow-md"
                    : "bg-brand-light-green text-brand-green hover:bg-brand-green/10"
                }`}
              >
                Who We Are
              </button>
              <button
                onClick={() => setActiveTab("vision-mission")}
                className={`px-4 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "vision-mission"
                    ? "bg-brand-green text-white shadow-md"
                    : "bg-brand-light-green text-brand-green hover:bg-brand-green/10"
                }`}
              >
                Vision & Mission
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "who-we-are" ? (
                <motion.div
                  key="who-we-are-content"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center space-x-2 text-brand-green mb-3">
                    <HeartHandshake className="h-5 w-5 text-brand-gold animate-bounce" />
                    <span className="font-display text-xs font-extrabold uppercase tracking-widest text-brand-green">
                      Ghana-registered Company Limited by Guarantee
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-charcoal sm:text-3xl lg:text-4xl leading-tight">
                    Bridging the Gap Between <br />
                    <span className="text-brand-green">Research, Communication, and Policy</span>
                  </h2>

                  <p className="mt-4 text-sm text-gray-400 leading-relaxed font-normal">
                    The Africa Institute for Policy and Impact Communication (IPIC Africa) is a consulting and social enterprise registered as a Company Limited by Guarantee in Ghana. We exist to advance evidence-informed policy and measurable social impact across Africa.
                  </p>

                  <p className="mt-3 text-sm text-gray-400 leading-relaxed font-normal">
                    We support governments, development partners, civil society organizations, academia, and communities to amplify voices, translate complex research into accessible formats, and disseminate information through high-reach digital and print platforms.
                  </p>

                  {/* Who We Serve List */}
                  <div className="mt-6">
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-brand-green mb-3">
                      Who We Serve:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {whoWeServe.map((item) => (
                        <div key={item} className="flex items-start space-x-2">
                          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-gold text-brand-charcoal mt-0.5 shrink-0">
                            <Check className="h-2.5 w-2.5 stroke-[4] text-brand-charcoal" />
                          </div>
                          <span className="text-xs font-semibold text-brand-charcoal leading-tight">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="vision-mission-content"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <div className="flex items-center space-x-2 text-brand-green mb-2">
                      <Sparkles className="h-4.5 w-4.5 text-brand-gold" />
                      <span className="font-display text-xs font-extrabold uppercase tracking-widest text-brand-green">
                        Our Ambition
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-charcoal">Vision</h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed font-normal bg-brand-light-green/40 p-4 rounded-xl border-l-[4px] border-brand-green">
                      "To be a leading African institution advancing communication, policy engagement, and innovation that translates evidence into sustainable social impact."
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 text-brand-green mb-2">
                      <Globe className="h-4.5 w-4.5 text-brand-gold" />
                      <span className="font-display text-xs font-extrabold uppercase tracking-widest text-brand-green">
                        Our Assignment
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-charcoal">Mission</h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed font-normal bg-brand-light-green/40 p-4 rounded-xl border-l-[4px] border-brand-gold">
                      "To empower governments, development partners, civil society, academia, and communities to communicate effectively, influence policy, and measure impact through knowledge, innovation, and rights-based approaches that promote equity, accountability, and inclusive development."
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
