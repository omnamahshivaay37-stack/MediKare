import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Hospitals", path: "/hospitals" },
  { label: "Ambulance", path: "/ambulance" },
  { label: "Lab Tests", path: "/lab-tests" },
  { label: "Medicines", path: "/medicines" },
  { label: "Insurance", path: "/insurance" },
  { label: "Equipment", path: "/equipment" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        
        {/* Only Logo Image - Text Removed */}
        <Link to="/" className="flex items-center">
          <img 
            src="/src/components/logo.png" 
            alt="Medikare Logo" 
            className="h-10 w-auto" 
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">Dashboard</Button>
          </Link>
          <Link to="/vendor">
            <Button variant="ghost" size="sm">Vendor</Button>
          </Link>
          <Link to="/admin">
            <Button variant="ghost" size="sm">Admin</Button>
          </Link>
          <Link to="/login">
            <Button variant="hero" size="sm">Sign In</Button>
          </Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-card p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex gap-2">
            <Link to="/dashboard" className="flex-1">
              <Button variant="outline" size="sm" className="w-full">Dashboard</Button>
            </Link>
            <Link to="/login" className="flex-1">
              <Button variant="hero" size="sm" className="w-full">Sign In</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;