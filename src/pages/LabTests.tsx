import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Home, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const tests = [
  { id: 1, name: "Complete Blood Count (CBC)", price: 350, lab: "Dr. Lal PathLabs", homeCollection: true },
  { id: 2, name: "Thyroid Profile (T3, T4, TSH)", price: 600, lab: "SRL Diagnostics", homeCollection: true },
  { id: 3, name: "Lipid Profile", price: 500, lab: "Metropolis", homeCollection: false },
  { id: 4, name: "Liver Function Test (LFT)", price: 450, lab: "Dr. Lal PathLabs", homeCollection: true },
  { id: 5, name: "Kidney Function Test (KFT)", price: 550, lab: "Thyrocare", homeCollection: true },
  { id: 6, name: "Vitamin D Test", price: 800, lab: "SRL Diagnostics", homeCollection: false },
  { id: 7, name: "HbA1c (Diabetes)", price: 400, lab: "Metropolis", homeCollection: true },
  { id: 8, name: "COVID-19 RT-PCR", price: 300, lab: "Thyrocare", homeCollection: true },
];

const LabTests = () => {
  const [cart, setCart] = useState<number[]>([]);

  const toggleCart = (id: number) => {
    setCart((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Lab Tests</h1>
            <p className="text-muted-foreground text-sm mt-1">Book tests from top labs at best prices</p>
          </div>
          <Button variant="outline" className="gap-2 relative">
            <ShoppingCart className="h-4 w-4" /> Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tests.map((t) => (
            <div key={t.id} className="bg-card rounded-2xl border border-border/50 p-5 shadow-soft hover:shadow-hover transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-sm">{t.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{t.lab}</p>
                </div>
                {t.homeCollection && (
                  <Badge className="bg-success/10 text-success border-0 gap-1 text-[10px]"><Home className="h-3 w-3" /> Home</Badge>
                )}
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold">₹{t.price}</span>
                <Button
                  size="sm"
                  variant={cart.includes(t.id) ? "destructive" : "hero"}
                  onClick={() => toggleCart(t.id)}
                >
                  {cart.includes(t.id) ? "Remove" : "Add to Cart"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LabTests;
