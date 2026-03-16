import { Calendar } from "lucide-react";
import eventGala from "@/assets/event-gala.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";
import eventBasketball from "@/assets/event-basketball.jpg";

const events = [
  {
    image: eventGala,
    date: "Oct 12, 2024",
    title: "Annual Vibe Gala Night",
    desc: "A celebration of talent, culture, and achievements of our members...",
    tag: "CULTURE",
  },
  {
    image: eventWorkshop,
    date: "Oct 18, 2024",
    title: "Start-up Pitch Deck Workshop",
    desc: "Learn how to craft winning presentations with guest mentors from the local tech...",
    tag: "ENTREPRENEURSHIP",
  },
  {
    image: eventBasketball,
    date: "Oct 25, 2024",
    title: "Intra-University Cup",
    desc: "The most anticipated basketball tournament of the year. Bring your tea...",
    tag: "SPORTS",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground">Upcoming Events</h2>
            <p className="text-muted-foreground mt-2">Mark your calendars for the hottest dates on campus</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
            View Full Calendar <Calendar size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.title} className="bg-background rounded-xl border border-border overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-2 text-primary text-xs font-medium mb-2">
                  <Calendar size={14} />
                  {event.date}
                </div>
                <h3 className="font-bold font-serif text-lg text-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{event.desc}</p>
                <div className="border-t border-border pt-3 flex items-center justify-between">
                  <span className="text-xs font-semibold border border-border rounded px-2 py-1 text-foreground uppercase tracking-wider">
                    {event.tag}
                  </span>
                  <a href="#" className="text-sm font-semibold text-foreground hover:text-primary">RSVP</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
