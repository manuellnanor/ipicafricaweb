import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { EconestEvent } from "../types";
import teamCollaborationImage from "../assets/hero/ipic-team-collaboration.jpg";
import financialStrategyImage from "../assets/hero/ipic-financial-strategy.jpg";

const EVENTS: EconestEvent[] = [
  {
    id: "evt-1",
    title: "West African Policy Translation Roundtable: Crucial Research Nexus",
    dateRange: "28 Jul, 2026",
    daysLabel: "Jul 28, 2026",
    timeRange: "10:00am - 3:00pm",
    location: "Ghana Institute of Languages Auditorium, Accra",
    joinedCount: 45,
    image: teamCollaborationImage,
  },
  {
    id: "evt-2",
    title: "Digital Inclusivity & Ethical AI Governance Regional Summit",
    dateRange: "14 Aug, 2026",
    daysLabel: "Aug 14, 2026",
    timeRange: "9:00am - 4:40pm",
    location: "Kempinski Gold Coast City Hotel, Accra",
    joinedCount: 88,
    image: financialStrategyImage,
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="border-b border-gray-150 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="mb-3 flex items-center space-x-2 text-brand-green">
            <Calendar className="h-5 w-5 text-brand-gold" />
            <span className="font-display text-xs font-extrabold uppercase tracking-widest">
              Upcoming Events
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-4xl md:text-5xl">
            IPIC Africa Scheduled Events
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {EVENTS.map((event, index) => {
            const [month, day, year] = event.daysLabel.split(" ");

            return (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-brand-charcoal">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/65 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-white text-brand-green shadow-lg">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">
                      {month}
                    </span>
                    <span className="font-display text-2xl font-black leading-none">
                      {day.replace(",", "")}
                    </span>
                    <span className="mt-1 text-[9px] font-bold text-gray-500">{year}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-4 flex flex-col gap-2 text-xs font-bold text-gray-500 sm:flex-row sm:flex-wrap sm:gap-4">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4 shrink-0 text-brand-gold" />
                      {event.timeRange}
                    </span>
                    <span className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                      {event.location}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-extrabold leading-snug text-brand-charcoal transition-colors group-hover:text-brand-green sm:text-2xl">
                    {event.title}
                  </h3>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
