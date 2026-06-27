import { Award, Check, Globe, HeartHandshake, Sparkles, Users2 } from "lucide-react";
import AboutUs from "../components/AboutUs";
import Volunteers from "../components/Volunteers";
import aboutUsGroupImage from "../assets/news/menstrual-health-policy-hero.jpeg";
import aboutUsIpicSpeakerImage from "../assets/news/about-us-speaker-ipic.jpeg";

interface AboutPageProps {
  onPartnerClick: () => void;
}

export default function AboutPage({ onPartnerClick }: AboutPageProps) {
  const values = [
    "Evidence-informed decisions",
    "Accessible public communication",
    "Rights-based policy engagement",
    "Measurable social impact",
  ];

  return (
    <main className="bg-brand-cream pt-[72px] text-brand-charcoal sm:pt-20">
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0">
          <img
            src={aboutUsGroupImage}
            alt="IPIC Africa policy dissemination forum"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-green/70" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-brand-gold">
              <HeartHandshake className="h-5 w-5" />
              <span className="font-display text-xs font-extrabold uppercase tracking-widest">
                About IPIC Africa
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Translating knowledge into policy and social impact.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
              We are a Ghana-registered consulting and social enterprise helping institutions move
              research from technical spaces into public understanding, policy action, and measurable
              development outcomes.
            </p>
          </div>

          <div className="self-end rounded-3xl border-l-4 border-brand-gold bg-white/10 p-6 backdrop-blur-md">
            <img
              src={aboutUsIpicSpeakerImage}
              alt="IPIC Africa representative speaking"
              className="mb-5 aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <p className="font-display text-2xl font-extrabold leading-snug">
              Evidence becomes useful when people can understand it, trust it, and act on it.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {values.map((value) => (
          <div key={value} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-light-green text-brand-green">
              <Check className="h-5 w-5" />
            </div>
            <h2 className="font-display text-base font-extrabold text-brand-charcoal">{value}</h2>
          </div>
        ))}
      </section>

      <AboutUs onPartnerClick={onPartnerClick} />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            { icon: Globe, title: "Vision", text: "To be a leading African institution advancing communication, policy engagement, and innovation." },
            { icon: Sparkles, title: "Mission", text: "To empower partners to communicate effectively, influence policy, and measure impact through knowledge and innovation." },
            { icon: Award, title: "Positioning", text: "A bridge between research institutions, public agencies, communities, civil society, media, and development partners." },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border-t-4 border-brand-gold bg-brand-cream p-7 shadow-sm">
              <Icon className="mb-5 h-8 w-8 text-brand-green" />
              <h3 className="font-display text-xl font-extrabold text-brand-charcoal">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-brand-green">
          <Users2 className="h-5 w-5 text-brand-gold" />
          <span className="font-display text-xs font-extrabold uppercase tracking-widest">
            Advisory Team
          </span>
        </div>
      </div>
      <Volunteers />
    </main>
  );
}
