import { ArrowRight, BookOpen, Check, FileText, Megaphone, Radio, ShieldCheck, TrendingUp } from "lucide-react";
import teamImage from "../assets/hero/ipic-team-collaboration.jpg";
import strategyImage from "../assets/hero/ipic-financial-strategy.jpg";

export default function ServicesPage() {
  const services = [
    {
      icon: BookOpen,
      title: "Policy Formulation & Analysis",
      text: "Evidence reviews, stakeholder consultation, policy briefs, legislative analysis, and agenda-setting support.",
      points: ["Policy diagnostics", "Technical briefs", "Stakeholder mapping"],
    },
    {
      icon: Megaphone,
      title: "Impact Communication & Advocacy",
      text: "Clear campaigns and communication products that translate complex research for public and institutional audiences.",
      points: ["Advocacy strategy", "Digital campaigns", "Print and media packs"],
    },
    {
      icon: TrendingUp,
      title: "M&E, Strategy & Learning",
      text: "Monitoring, evaluation, accountability, and learning systems that help partners prove and improve impact.",
      points: ["Results frameworks", "Learning reviews", "Impact dashboards"],
    },
  ];

  return (
    <main className="bg-brand-cream pt-[72px] text-brand-charcoal sm:pt-20">
      <section className="bg-brand-green text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_430px] lg:px-8 lg:py-24">
          <div>
            <div className="mb-4 flex items-center gap-2 text-brand-gold">
              <ShieldCheck className="h-5 w-5" />
              <span className="font-display text-xs font-extrabold uppercase tracking-widest">
                Services
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Advisory services for evidence, influence, and accountability.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
              IPIC Africa supports institutions across the policy cycle: from research translation
              and stakeholder engagement to public communication, learning systems, and impact reporting.
            </p>
          </div>
          <img
            src={strategyImage}
            alt="IPIC Africa strategic planning session"
            className="h-full min-h-[320px] w-full rounded-lg border-4 border-brand-gold object-cover shadow-2xl"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        {services.map(({ icon: Icon, title, text, points }) => (
          <article key={title} className="group bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-light-green text-brand-green group-hover:bg-brand-gold group-hover:text-brand-charcoal">
              <Icon className="h-7 w-7" />
            </div>
            <h2 className="font-display text-2xl font-extrabold leading-tight text-brand-charcoal">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-gray-500">{text}</p>
            <div className="mt-6 space-y-3">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm font-bold text-brand-green">
                  <Check className="h-4 w-4 text-brand-gold" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img
            src={teamImage}
            alt="IPIC Africa team collaboration"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-xl"
          />
          <div>
            <div className="mb-3 flex items-center gap-2 text-brand-green">
              <FileText className="h-5 w-5 text-brand-gold" />
              <span className="font-display text-xs font-extrabold uppercase tracking-widest">
                Delivery Model
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              From technical evidence to usable public products.
            </h2>
            <p className="mt-5 text-sm leading-8 text-gray-500">
              Each engagement is built around practical outputs: policy briefs, strategy documents,
              engagement plans, public explainers, dissemination events, and evaluation tools that
              decision-makers can use immediately.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Research synthesis", "Policy packaging", "Multimedia dissemination", "Learning workshops"].map((item) => (
                <div key={item} className="border border-gray-100 bg-brand-cream p-4 font-display text-sm font-extrabold text-brand-charcoal">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 bg-brand-dark p-8 text-white sm:p-10 lg:flex-row lg:items-center">
          <div>
            <Radio className="mb-4 h-8 w-8 text-brand-gold" />
            <h2 className="font-display text-2xl font-extrabold">Need a tailored policy communication brief?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/65">
              Share your evidence, audience, and policy objective. IPIC Africa can shape the message,
              format, and dissemination pathway.
            </p>
          </div>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-display text-sm font-extrabold text-brand-charcoal transition hover:bg-white"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
