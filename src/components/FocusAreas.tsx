import { Dribbble, Theater, Rocket, ArrowUpRight } from "lucide-react";

const areas = [
  {
    icon: <Dribbble size={24} className="text-primary" />,
    iconBg: "bg-primary/10",
    title: "Sports & Fitness",
    desc: "From competitive leagues to casual weekend matches, we promote physical excellence and teamwork.",
  },
  {
    icon: <Theater size={24} className="text-orange-500" />,
    iconBg: "bg-orange-50",
    title: "Arts & Culture",
    desc: "Celebrating diversity through music, dance, theater, and fine arts. Express your creative soul.",
  },
  {
    icon: <Rocket size={24} className="text-green-600" />,
    iconBg: "bg-green-50",
    title: "Entrepreneurship",
    desc: "Incubating ideas and fostering leadership. Build your startup with the support of a like-minded community.",
  },
];

const FocusAreas = () => {
  return (
    <section className="bg-accent py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground">Our Focus Areas</h2>
          <p className="text-muted-foreground mt-2">Find your tribe and explore your interests</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div key={area.title} className="bg-background rounded-xl p-8 border border-border">
              <div className={`w-12 h-12 rounded-xl ${area.iconBg} flex items-center justify-center mb-6`}>
                {area.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-foreground mb-3">{area.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{area.desc}</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
                Learn More <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
