import { useState, FormEvent } from "react";
import { Clock, HelpCircle, ArrowRight, Heart, Flame, Sparkles, X, Check, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DonationCampaign } from "../types";

const INITIAL_CAMPAIGNS: DonationCampaign[] = [
  {
    id: "camp-1",
    title: "Rights-Based Democratic Governance Dialogue",
    category: "Governance",
    daysLeft: 60,
    raised: 15400,
    goal: 25000,
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "camp-2",
    title: "Responsible AI & Inclusive ICT Policy Suite",
    category: "Technology",
    daysLeft: 90,
    raised: 28500,
    goal: 40000,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "camp-3",
    title: "Evidence-Driven Action Support Framework",
    category: "Research",
    daysLeft: 45,
    raised: 9200,
    goal: 20000,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
];

export default function GreenerTomorrow() {
  const [campaigns, setCampaigns] = useState<DonationCampaign[]>(INITIAL_CAMPAIGNS);
  const [selectedCamp, setSelectedCamp] = useState<DonationCampaign | null>(null);
  const [donationAmount, setDonationAmount] = useState<number>(250);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const openDonateModal = (camp: DonationCampaign) => {
    setSelectedCamp(camp);
    setIsSuccess(false);
    setDonorName("");
    setDonorEmail("");
    setDonationAmount(250);
    setCustomAmount("");
  };

  const handlePledge = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedCamp) return;

    const finalValue = customAmount ? parseFloat(customAmount) : donationAmount;
    if (isNaN(finalValue) || finalValue <= 0) return;

    // Advance Campaign raised metrics
    setCampaigns((prev) =>
      prev.map((c) => {
        if (c.id === selectedCamp.id) {
          const updatedRaised = c.raised + finalValue;
          return { ...c, raised: updatedRaised };
        }
        return c;
      })
    );

    setIsSuccess(true);
    setTimeout(() => {
      setSelectedCamp(null);
      setIsSuccess(false);
    }, 2500);
  };

  return (
    <section id="projects-insights-campaigns" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Intro Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 text-brand-green mb-3">
            <Flame className="h-5 w-5 text-brand-gold fill-brand-gold animate-pulse" />
            <span className="font-display text-xs font-extrabold uppercase tracking-widest text-brand-green">
              Active Advocacy & Campaigns
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl md:text-5xl leading-tight">
            Our Key Policy Engagements
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            Support our rights-based social enterprise missions. Partner with us to fund open-access policy briefings, digital inclusivity workshops, and legislative translations.
          </p>
        </div>
      </div>

      {/* Grid of campaigns */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {campaigns.map((camp, index) => {
          const completionPercentage = Math.min(Math.round((camp.raised / camp.goal) * 100), 100);
          return (
            <motion.div
              key={camp.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl hover:border-brand-green/15 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-56 bg-brand-charcoal overflow-hidden group">
                  <div className="absolute top-4 left-4 z-20">
                    <span className="rounded-full bg-brand-gold px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-brand-charcoal shadow-sm">
                      {camp.category}
                    </span>
                  </div>
                  <img
                    src={camp.image}
                    alt={camp.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                </div>

                {/* Content body */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-brand-charcoal leading-snug hover:text-brand-green transition-colors duration-200">
                    {camp.title}
                  </h3>

                  {/* Stat bars */}
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between items-center text-xs text-gray-500 font-bold">
                      <span>Funded Target</span>
                      <span className="text-brand-green">{completionPercentage}%</span>
                    </div>
                    {/* Bar */}
                    <div className="w-full bg-brand-light-green h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-brand-green h-full rounded-full transition-all duration-1000"
                        style={{ width: `${completionPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Detailed counter row */}
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Mobilized</span>
                      <span className="font-display text-sm font-extrabold text-brand-green">
                        ${camp.raised.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Goal Target</span>
                      <span className="font-display text-sm font-extrabold text-brand-charcoal">
                        ${camp.goal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pledge Support button block at bottom */}
              <div className="p-6 border-t border-gray-50 bg-gray-50/50 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-wider flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-brand-gold" />
                  {camp.daysLeft} Days Remain
                </span>
                <button
                  onClick={() => openDonateModal(camp)}
                  className="rounded-full bg-brand-green text-white hover:bg-brand-gold hover:text-brand-charcoal px-4 py-2 text-xs font-bold transition-all cursor-pointer"
                >
                  Pledge Grant Support
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Grant Pledge Lightbox Modal */}
      <AnimatePresence>
        {selectedCamp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            {/* Backdrop Dismiss */}
            <div className="absolute inset-0" onClick={() => setSelectedCamp(null)} />

            <motion.div
              initial={{ y: 25, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 25, scale: 0.95 }}
              className="relative overflow-hidden rounded-3xl bg-white max-w-md w-full shadow-2xl z-10 p-6 md:p-8 text-brand-charcoal border border-gray-100"
            >
              {/* Modal header */}
              <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
                <div>
                  <span className="rounded-full bg-brand-gold/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-green">
                    Pledge Partnership Support
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCamp(null)}
                  className="rounded-lg border border-gray-150 p-1.5 hover:bg-gray-50 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              {isSuccess ? (
                <div className="py-12 text-center" id="pledge-success-card">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6"
                  >
                    <Check className="h-8 w-8 stroke-[3]" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-black text-brand-charcoal mb-2">
                    Partnership Registered!
                  </h3>
                  <p className="text-sm text-gray-500 max-w-xs mx-auto">
                    Thank you. IPIC Africa program officers will reach out shortly with formal grant/CSR framework agreements. Let's form African social impact together!
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePledge}>
                  <div className="flex items-center space-x-2 text-brand-green mb-2">
                    <Heart className="h-5 w-5 text-brand-gold fill-brand-gold animate-pulse" />
                    <span className="font-display text-xs font-bold uppercase tracking-wider">
                      Empower Nature & People
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-brand-charcoal mb-4">
                    {selectedCamp.title}
                  </h3>

                  {/* Quick amounts selectors */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[100, 250, 500, 1000].map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => {
                          setDonationAmount(amt);
                          setCustomAmount("");
                        }}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                          donationAmount === amt && !customAmount
                            ? "bg-brand-green border-brand-green text-white shadow-md shadow-brand-green/20"
                            : "bg-white border-gray-200 text-gray-600 hover:bg-brand-light-green"
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>

                  {/* Custom amount */}
                  <div className="mb-4">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Custom Pledge Amount ($)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 5000"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full text-sm py-3 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all"
                    />
                  </div>

                  {/* Donor Name */}
                  <div className="mb-4">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Organization / Partner Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Accra Policy Labs"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full text-sm py-3 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  {/* Donor Email */}
                  <div className="mb-6">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Official Contact Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. contact@policylab.org"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full text-sm py-3 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full rounded-full bg-brand-green hover:bg-brand-gold hover:text-brand-charcoal text-white py-3.5 font-display text-sm font-bold shadow-lg transition-all"
                  >
                    Confirm Grant Pledge
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
