import { useState, FormEvent } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessagesSquare, Users2, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQItem } from "../types";

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Who coordinates IPIC Africa's operations?",
    answer: "Our operations are guided by director Prof. Ama Boateng and our advisory board in Accra. We are registered in Ghana as a Company Limited by Guarantee, ensuring a social enterprise approach to sustainable development research.",
  },
  {
    id: "faq-2",
    question: "What are the three core pillars of IPIC Africa?",
    answer: "We focus on: 1) Policy Formulation & Analysis across the entire policy cycle; 2) Impact Communication & Advocacy using print and digital platforms; and 3) M&E, Strategy & Learning to measure and scale social impact.",
  },
  {
    id: "faq-3",
    question: "Who can request research translation services?",
    answer: "Governments, developmental partners (donors), academic institutions, media platforms, and civil society organizations can partner with us to transform scientific research into local-language formats, audio, and visual briefs.",
  },
  {
    id: "faq-4",
    question: "Where do you operate?",
    answer: "We are headquartered in Accra, Ghana, and actively deliver consulting services and social advocacy projects multi-regionally across West Africa and the wider African continent.",
  },
  {
    id: "faq-5",
    question: "How are grant pledges and sponsorships utilized?",
    answer: "All grant pledges and donor sponsorships fund open-access policy translations, rural communication toolkits, and civic workshops for inclusive developmental dialogues.",
  },
];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>("faq-2");
  const [userQuery, setUserQuery] = useState("");
  const [querySubmitted, setQuerySubmitted] = useState(false);

  const handleQuerySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!userQuery) return;
    setQuerySubmitted(true);
    setTimeout(() => {
      setQuerySubmitted(false);
      setUserQuery("");
    }, 3000);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-b border-gray-150">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        
        {/* Left Column: Interactive Accordion of FAQs */}
        <div className="lg:col-span-7">
          <div className="flex items-center space-x-2 text-brand-green mb-3">
            <HelpCircle className="h-5 w-5 text-brand-gold animate-bounce" />
            <span className="font-display text-xs font-extrabold uppercase tracking-widest text-brand-green">
              Advisory Answers
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl md:text-5xl leading-tight mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => {
              const isOpen = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-gray-150 bg-white shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-display text-sm sm:text-base font-extrabold text-brand-charcoal hover:bg-brand-cream transition-colors cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <div className={`p-1 rounded-full border border-gray-200 transition-transform ${isOpen ? "bg-brand-green text-white rotate-180" : "bg-transparent text-gray-500"}`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-sm text-gray-500 leading-relaxed border-t border-gray-100 bg-gray-50 font-normal">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Query Form */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="rounded-3xl bg-brand-gold p-8 md:p-10 shadow-xl border border-brand-gold/10 text-brand-charcoal">
            <div className="flex items-center space-x-2 text-brand-green mb-4">
              <MessagesSquare className="h-5 w-5 animate-pulse" />
              <span className="font-display text-xs font-extrabold uppercase tracking-widest leading-none text-brand-green">
                Get In Touch
              </span>
            </div>

            <h3 className="font-display text-2xl font-black text-brand-charcoal leading-tight mb-4">
              Have You Any Questions? Let's Talk!
            </h3>

            <p className="text-sm text-brand-charcoal/85 leading-relaxed font-normal mb-8">
              We translate intricate scientific research into accessible formats, and disseminate information through high-reach platforms. Let us support your advocacy goals today.
            </p>

            {querySubmitted ? (
              <div className="rounded-2xl bg-white p-5 text-center shadow-inner">
                <Sparkles className="h-8 w-8 text-brand-green mx-auto mb-3 animate-spin-slow" />
                <h4 className="font-display text-base font-extrabold text-brand-charcoal">
                  Query Logged!
                </h4>
                <p className="text-xs text-gray-500 mt-2">
                  Our coordinator will respond directly to your organization's email address shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuerySubmit} className="space-y-4">
                <textarea
                  required
                  placeholder="Type your strategic query, advisory requirement or research translation proposal..."
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-transparent text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent font-medium shadow-sm h-28 resize-none placeholder:text-gray-400"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 rounded-full bg-brand-charcoal hover:bg-brand-green text-white py-3 font-display text-sm font-bold transition-all duration-300 shadow-md cursor-pointer"
                >
                  <span>Submit Consultation Query</span>
                  <Send className="h-3.5 w-3.5 fill-current" />
                </button>
              </form>
            )}

            {/* Avatars Cluster footer block */}
            <div className="mt-8 border-t border-brand-charcoal/10 pt-6 flex items-center space-x-4">
              {/* Avatars Row */}
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100"
                  alt="Member"
                  referrerPolicy="no-referrer"
                  className="h-9 w-9 rounded-full border-2 border-brand-gold object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"
                  alt="Member"
                  referrerPolicy="no-referrer"
                  className="h-9 w-9 rounded-full border-2 border-brand-gold object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                  alt="Member"
                  referrerPolicy="no-referrer"
                  className="h-9 w-9 rounded-full border-2 border-brand-gold object-cover"
                />
              </div>

              <div>
                <span className="block font-display text-base font-black text-brand-charcoal leading-none">
                  120+
                </span>
                <span className="block text-[10px] text-brand-charcoal/70 uppercase tracking-widest font-sans font-bold leading-none mt-1">
                  Partners Engaged
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
