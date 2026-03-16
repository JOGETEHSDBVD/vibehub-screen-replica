import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import SignInModal from "./SignInModal";
import JoinModal from "./JoinModal";

const navLinks = ["Home", "About", "Events", "MBTI Test", "Admin"];

const Navbar = () => {
  const { user, signOut } = useAuth();
  const [signInOpen, setSignInOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
              <span className="font-display font-bold text-primary text-sm">HL</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground">VibeHub</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className={`text-sm font-medium transition-colors duration-200 ${
                  link === "Home" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">
                  {user.user_metadata?.full_name || user.email}
                </span>
                <button
                  onClick={signOut}
                  className="inline-flex items-center gap-1 px-5 py-2 text-sm font-medium rounded-full border border-border text-foreground hover:bg-muted transition-colors duration-200"
                >
                  <LogOut size={14} />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setSignInOpen(true)}
                  className="px-5 py-2 text-sm font-medium rounded-full border border-primary text-primary hover:bg-primary/5 transition-colors duration-200"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setJoinOpen(true)}
                  className="px-5 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                >
                  Join Club
                </button>
              </>
            )}
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className={`block py-2 text-sm font-medium ${
                  link === "Home" ? "text-primary" : "text-foreground"
                }`}
              >
                {link}
              </a>
            ))}
            <div className="flex gap-3 mt-3">
              {user ? (
                <button
                  onClick={() => { signOut(); setMobileOpen(false); }}
                  className="flex-1 px-4 py-2 text-sm font-medium rounded-full border border-border text-foreground"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <button
                    onClick={() => { setSignInOpen(true); setMobileOpen(false); }}
                    className="flex-1 px-4 py-2 text-sm font-medium rounded-full border border-primary text-primary"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => { setJoinOpen(true); setMobileOpen(false); }}
                    className="flex-1 px-4 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground"
                  >
                    Join Club
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <SignInModal open={signInOpen} onOpenChange={setSignInOpen} onSwitchToJoin={() => { setSignInOpen(false); setJoinOpen(true); }} />
      <JoinModal open={joinOpen} onOpenChange={setJoinOpen} onSwitchToSignIn={() => { setJoinOpen(false); setSignInOpen(true); }} />
    </>
  );
};

export default Navbar;
