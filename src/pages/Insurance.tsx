import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Basic Health",
    premium: "₹5,000/yr",
    coverage: "₹3 Lakh",
    features: ["Hospitalization", "Day care", "Pre-hospitalization (30 days)"],
    missing: ["Maternity", "Dental", "International coverage"],
    popular: false,
  },
  {
    name: "Family Shield",
    premium: "₹12,000/yr",
    coverage: "₹10 Lakh",
    features: ["Hospitalization", "Day care", "Pre & Post hospitalization", "Maternity cover", "No room rent limit"],
    missing: ["International coverage"],
    popular: true,
  },
  {
    name: "Premium Care",
    premium: "₹25,000/yr",
    coverage: "₹25 Lakh",
    features: ["Hospitalization", "Day care", "Maternity", "Dental", "International coverage", "Air ambulance"],
    missing: [],
    popular: false,
  },
];

const Insurance = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">Health Insurance Plans</h1>
        <p className="text-muted-foreground text-sm mt-2">Compare plans and find the right coverage for you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div key={p.name} className={`bg-card rounded-2xl border p-6 transition-all relative ${p.popular ? "border-primary shadow-hover scale-[1.02]" : "border-border/50 shadow-soft"}`}>
            {p.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground border-0">Most Popular</Badge>}
            <h3 className="text-lg font-bold mt-2">{p.name}</h3>
            <div className="mt-4">
              <span className="text-3xl font-extrabold">{p.premium}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Coverage up to {p.coverage}</p>
            <div className="mt-6 space-y-2">
              {p.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-success shrink-0" /> {f}</div>
              ))}
              {p.missing.map(f => (
                <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><X className="h-4 w-4 text-muted-foreground shrink-0" /> {f}</div>
              ))}
            </div>
            <Button variant={p.popular ? "hero" : "outline"} className="w-full mt-6">Buy Plan</Button>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default Insurance;
