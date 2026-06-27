import { Check, Mail, MapPin, MessageSquare, PhoneCall, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const contactCards = [
    { icon: Mail, title: "Email", value: "info@ipicafrica.org", href: "mailto:info@ipicafrica.org" },
    { icon: PhoneCall, title: "Phone", value: "+233 302 123 456", href: "tel:+233302123456" },
    { icon: MapPin, title: "Office", value: "Accra High Street, Accra, Ghana", href: "https://maps.google.com/?q=Accra+Ghana" },
  ];

  return (
    <main className="bg-brand-cream pt-[72px] text-brand-charcoal sm:pt-20">
      <section className="bg-brand-green text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-brand-gold">
              <MessageSquare className="h-5 w-5" />
              <span className="font-display text-xs font-extrabold uppercase tracking-widest">
                Contact Us
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let’s shape your next policy, communication, or impact brief.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
              Reach our Accra secretariat for consulting, partnership, research translation,
              dissemination, and monitoring or evaluation assignments.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        {contactCards.map(({ icon: Icon, title, value, href }) => (
          <a
            key={title}
            href={href}
            target={title === "Office" ? "_blank" : undefined}
            rel={title === "Office" ? "noreferrer" : undefined}
            className="group bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-charcoal group-hover:bg-brand-green group-hover:text-white">
              <Icon className="h-5 w-5" />
            </div>
            <span className="font-display text-xs font-extrabold uppercase tracking-widest text-brand-green">{title}</span>
            <p className="mt-2 text-sm font-bold leading-6 text-brand-charcoal">{value}</p>
          </a>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div className="bg-white p-6 shadow-md sm:p-8">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-light-green text-brand-green">
                <Check className="h-8 w-8" />
              </div>
              <h2 className="font-display text-2xl font-extrabold">Message received</h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
                Thank you for contacting IPIC Africa. Our team will review your request and respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div>
                <span className="font-display text-xs font-extrabold uppercase tracking-widest text-brand-green">
                  Send a Message
                </span>
                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight">
                  Tell us what you are working on.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="Full name"
                  className="w-full border border-gray-150 bg-brand-cream px-4 py-3 text-sm font-semibold outline-none focus:border-brand-gold"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full border border-gray-150 bg-brand-cream px-4 py-3 text-sm font-semibold outline-none focus:border-brand-gold"
                />
              </div>
              <input
                type="text"
                placeholder="Organisation"
                className="w-full border border-gray-150 bg-brand-cream px-4 py-3 text-sm font-semibold outline-none focus:border-brand-gold"
              />
              <select className="w-full border border-gray-150 bg-brand-cream px-4 py-3 text-sm font-semibold outline-none focus:border-brand-gold">
                <option>Policy Formulation & Analysis</option>
                <option>Impact Communication & Advocacy</option>
                <option>M&E, Strategy & Learning</option>
                <option>Publication or media request</option>
              </select>
              <textarea
                required
                rows={7}
                placeholder="Describe your project, audience, timeline, and the type of support needed."
                className="w-full resize-none border border-gray-150 bg-brand-cream px-4 py-3 text-sm font-semibold outline-none focus:border-brand-gold"
              />
              <button
                type="submit"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-gold px-7 py-3 font-display text-sm font-extrabold text-brand-charcoal transition hover:bg-brand-green hover:text-white"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        <aside className="bg-brand-dark p-8 text-white shadow-md">
          <MapPin className="mb-5 h-8 w-8 text-brand-gold" />
          <h2 className="font-display text-2xl font-extrabold">Accra Secretariat</h2>
          <p className="mt-4 text-sm leading-8 text-white/65">
            IPIC Africa coordinates consulting, advocacy, and research translation support from Ghana,
            working with partners across West Africa and the wider continent.
          </p>
          <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
            <p>
              <span className="block font-display text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                Availability
              </span>
              Monday to Saturday, 08:30am to 05:00pm
            </p>
            <p>
              <span className="block font-display text-xs font-extrabold uppercase tracking-widest text-brand-gold">
                Response Window
              </span>
              Partnership and consulting requests are reviewed within two working days.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
