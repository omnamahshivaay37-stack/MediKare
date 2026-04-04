import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Updated Logo Section - Only Image */}
        <div>
          <div className="flex items-center mb-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Hospikare Logo" 
                className="h-9 w-auto" 
              />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Where Health Meets Access. Your one-stop platform for all healthcare needs.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link to="/hospitals" className="block hover:text-foreground">Hospitals</Link>
            <Link to="/ambulance" className="block hover:text-foreground">Ambulance</Link>
            <Link to="/lab-tests" className="block hover:text-foreground">Lab Tests</Link>
            <Link to="/medicines" className="block hover:text-foreground">Medicines</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link to="/about" className="block hover:text-foreground">About Us</Link>
            <Link to="/contact" className="block hover:text-foreground">Contact</Link>
            <Link to="/careers" className="block hover:text-foreground">Careers</Link>
            <Link to="/privacy" className="block hover:text-foreground">Privacy Policy</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 1800-XXX-XXXX</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@HospiKare.in</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Mumbai, India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
        © 2026 HospiKare. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
