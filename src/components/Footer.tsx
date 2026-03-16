import { Globe, Play, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stats py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
                <span className="font-display font-bold text-primary text-sm">HL</span>
              </div>
              <span className="font-display font-bold text-lg text-stats-foreground">VibeHub</span>
            </div>
            <p className="text-sm text-stats-foreground/70 leading-relaxed">
              The premier student-led organization for well-rounded university experiences.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary text-sm tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Events", "MBTI Test"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-stats-foreground/70 hover:text-primary transition-colors duration-200">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary text-sm tracking-wider uppercase mb-4">Support</h4>
            <ul className="space-y-2">
              {["FAQ", "Contact Support", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-stats-foreground/70 hover:text-primary transition-colors duration-200">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary text-sm tracking-wider uppercase mb-4">Connect</h4>
            <div className="flex gap-3">
              {[Globe, Play, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-stats-foreground/30 flex items-center justify-center text-stats-foreground/70 hover:text-primary hover:border-primary transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-stats-foreground/20 pt-6">
          <p className="text-center text-sm text-stats-foreground/50">
            © 2024 VibeHub Club. Empowering university students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
