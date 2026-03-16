const stats = [
  { value: "500+", label: "ACTIVE MEMBERS" },
  { value: "25+", label: "ANNUAL EVENTS" },
  { value: "15+", label: "SKILL WORKSHOPS" },
  { value: "2k+", label: "PARTICIPANTS" },
];

const StatsSection = () => {
  return (
    <section className="bg-stats py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl md:text-5xl font-bold font-serif text-primary">{stat.value}</p>
            <p className="text-xs font-display font-semibold tracking-wider text-stats-foreground mt-2 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
