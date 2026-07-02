import { useState, FormEvent } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Send, ArrowUp, AlertCircle, Check } from "lucide-react";
import ipicAfricaLogo from "../assets/brand/ipic-africa-logo.png";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [newsEmail, setNewsEmail] = useState("");
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [subSuccess, setSubSuccess] = useState(false);
  const [subError, setSubError] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!agreePolicy) {
      setSubError("Please consent to our policy first");
      setTimeout(() => setSubError(""), 3000);
      return;
    }
    setSubSuccess(true);
    setSubError("");
    setTimeout(() => {
      setSubSuccess(false);
      setNewsEmail("");
      setAgreePolicy(false);
    }, 3000);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-gray-300 pt-24 pb-12 relative overflow-hidden">
      
      {/* Background details */}
      <div className="absolute right-0 bottom-0 opacity-[0.02] text-9xl select-none leading-none -mb-10 mr-4 font-mono">
        🇬🇭
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Major Columns row */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 pb-16 border-b border-white/5">
          
          {/* Logo description Column */}
          <div className="lg:col-span-4">
            <button
              onClick={() => onNavigate("/")}
              className="mb-6 block cursor-pointer"
              aria-label="Go to the IPIC Africa homepage"
            >
              <img
                src={ipicAfricaLogo}
                alt="IPIC Africa — Translating Knowledge into Policy and Social Impact"
                className="h-20 w-auto max-w-[280px] object-contain object-left transition-transform duration-300 hover:scale-[1.02]"
              />
            </button>

            <p className="text-sm text-gray-400 leading-relaxed font-normal">
              The Africa Institute for Policy and Impact Communication (IPIC Africa) bridges the gap between research, communication, and policy to advance evidence-informed action across the continent.
            </p>

            <div className="mt-4 text-xs font-semibold">
              <span className="text-brand-gold">Accra Secretariat Office Available:</span>
              <span className="block text-gray-400 mt-1">Mon-Sat: 08:30am to 05:00pm</span>
            </div>

            {/* Social Icons row */}
            <div className="mt-6 flex space-x-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-brand-gold hover:text-brand-charcoal hover:border-brand-gold transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 col-span-1">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About Us", id: "/about-us" },
                { name: "Advisory Team", id: "/about-us" },
                { name: "Our Services", id: "/services" },
                { name: "Publications", id: "/publications-insights" },
                { name: "Gallery", id: "/gallery" },
                { name: "Contact Us", id: "/contact-us" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-brand-gold text-gray-400 transition-colors cursor-pointer text-left py-0.5"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="lg:col-span-2 col-span-1">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/5">
              Core Pillars
            </h4>
            <ul className="space-y-3 text-sm text-gray-450 font-normal">
              {[
                "Policy Formulation & Analysis",
                "Impact Communication & Advocacy",
                "M&E, Strategy & Learning",
                "Legislative Brief Translation",
                "Digital & Audio Dissemination",
                "Rights-Based Approaches",
              ].map((serv) => (
                <li key={serv}>
                  <button
                    onClick={() => onNavigate("/services")}
                    className="hover:text-brand-gold text-gray-400 text-left transition-colors cursor-pointer"
                  >
                    {serv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 col-span-1">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/5">
              Insights Newsletter
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed font-normal mb-4">
              Subscribe to receive open-access policy briefings, legal guides, and regional roundtable schedules.
            </p>

            {subSuccess ? (
              <div className="rounded-2xl bg-white/5 p-4 text-center border border-emerald-500/30 text-emerald-400 text-xs flex items-center justify-center space-x-2">
                <Check className="h-4 w-4 shrink-0" />
                <span>Subscribed successfully, Thank you!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    className="w-full px-4 py-3 pb-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-brand-gold placeholder:text-gray-500 animate-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 rounded-lg bg-brand-gold px-3.5 text-brand-charcoal hover:bg-white transition-colors cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <Send className="h-3 w-3 fill-current text-brand-charcoal" />
                  </button>
                </div>

                {/* Agree Checkbox */}
                <label className="flex items-start space-x-2 text-[10px] text-gray-400 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreePolicy}
                    onChange={(e) => setAgreePolicy(e.target.checked)}
                    className="mt-0.5 rounded border-white/15 bg-white/5 text-brand-gold accent-brand-gold focus:ring-0 cursor-pointer"
                  />
                  <span>I agree to receive communications and project briefs from IPIC Africa.</span>
                </label>

                {subError && (
                  <div className="text-[10px] text-brand-gold flex items-center space-x-1">
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    <span>{subError}</span>
                  </div>
                )}
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-550 font-normal">
          
          {/* Back to top gold button */}
          <button
            onClick={handleScrollTop}
            className="group flex items-center space-x-2 rounded-full bg-brand-gold px-4 py-2 font-display text-xs font-bold text-brand-charcoal hover:bg-white hover:scale-105 transition-all cursor-pointer shadow-md"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 text-brand-charcoal" />
          </button>

          <span>
            © {currentYear} IPIC Africa. Registered social enterprise, Ghana. All Rights Reserved.
          </span>

          <div className="flex space-x-4 md:space-x-6">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
