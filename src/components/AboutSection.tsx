import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

const AboutSection = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="flex gap-4">
          <img
            src={about1}
            alt="VibeHub event"
            className="w-1/2 h-64 object-cover rounded-xl border-4 border-primary/30"
          />
          <img
            src={about2}
            alt="VibeHub member"
            className="w-1/2 h-64 object-cover rounded-xl border-4 border-primary/30 mt-8"
          />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
            About VibeHub Club
          </h2>
          <div className="w-16 h-1 bg-primary mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            VibeHub is more than just a club; it's a movement within the university. We bridge the gap between passion and professional growth by providing a platform for students to excel in physical sports, express their cultural identities, and launch innovative entrepreneurial ventures.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Founded on the pillars of inclusivity and excellence, we empower students to step out of their comfort zones and lead the next generation of campus life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
