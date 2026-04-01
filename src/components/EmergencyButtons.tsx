import { Phone, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EmergencyButtons = () => (
  <section className="container mx-auto px-4 py-12">
    <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-xl font-bold mb-1">Emergency?</h3>
        <p className="text-muted-foreground text-sm">Get immediate help — call emergency services or book an ambulance now.</p>
      </div>
      <div className="flex gap-3 shrink-0">
        <a href="tel:102">
          <Button variant="emergency" size="lg" className="gap-2">
            <Phone className="h-4 w-4" /> Call 102
          </Button>
        </a>
        <Link to="/ambulance">
          <Button variant="hero" size="lg" className="gap-2">
            <Siren className="h-4 w-4" /> Book Ambulance
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default EmergencyButtons;
