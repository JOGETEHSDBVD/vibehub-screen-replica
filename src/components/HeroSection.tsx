import { ArrowRight, HelpCircle, Sparkles } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-foreground text-sm font-medium mb-8">
            <Sparkles size={16} className="text-primary" />
            JOIN THE UNIVERSITY PULSE
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif leading-[1.1] text-foreground mb-6">
            Connect,<br />
            Create, &<br />
            <em className="text-primary">Compete</em> at<br />
            VibeHub
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
            The ultimate university hub for Sports, Culture, and Entrepreneurship. Join a community that vibes with your passions and fuels your ambition.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200">
              Explore Events
              <ArrowRight size={18} />
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted transition-colors duration-200">
              Take the Test
              <HelpCircle size={18} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-stats">
            <img
              src={heroBuilding}
              alt="Cité des Métiers et des Compétences"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="px-6 py-4">
              <p className="text-stats-foreground text-sm font-display font-semibold tracking-wider uppercase text-center">
                Cité des Métiers et des Compétences<br />
                de la région Casablanca-Settat
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 left-4 md:left-8 bg-background rounded-xl shadow-lg px-6 py-4">
            <span className="block text-3xl font-bold text-primary font-display">2026</span>
            <span className="text-xs font-display font-semibold tracking-wider text-muted-foreground uppercase">
              Membership Open
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
