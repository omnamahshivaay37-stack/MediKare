import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Search } from "lucide-react";
import { useState } from "react";

const medicines = [
  { id: 1, name: "Paracetamol 500mg", price: 30, company: "Cipla", category: "Pain Relief" },
  { id: 2, name: "Amoxicillin 250mg", price: 85, company: "Sun Pharma", category: "Antibiotics" },
  { id: 3, name: "Omeprazole 20mg", price: 60, company: "Dr. Reddy's", category: "Digestive" },
  { id: 4, name: "Cetirizine 10mg", price: 25, company: "Cipla", category: "Allergy" },
  { id: 5, name: "Metformin 500mg", price: 45, company: "USV", category: "Diabetes" },
  { id: 6, name: "Atorvastatin 10mg", price: 120, company: "Lupin", category: "Heart" },
  { id: 7, name: "Azithromycin 500mg", price: 95, company: "Zydus", category: "Antibiotics" },
  { id: 8, name: "Pantoprazole 40mg", price: 70, company: "Alkem", category: "Digestive" },
];

const Medicines = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [search, setSearch] = useState("");

  const filtered = medicines.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Medicines</h1>
          <Button variant="outline" className="gap-2 relative">
            <ShoppingCart className="h-4 w-4" /> Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-bold">{cart.length}</span>
            )}
          </Button>
        </div>

        <div className="flex items-center gap-2 bg-card rounded-xl border border-border/50 px-4 py-2 mb-6 shadow-soft max-w-md">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Search medicines..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-transparent outline-none text-sm" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((m) => (
            <div key={m.id} className="bg-card rounded-2xl border border-border/50 p-5 shadow-soft hover:shadow-hover transition-all">
              <div className="h-24 rounded-xl bg-muted flex items-center justify-center text-3xl mb-3">💊</div>
              <Badge className="bg-accent text-accent-foreground border-0 text-[10px] mb-2">{m.category}</Badge>
              <h3 className="font-semibold text-sm">{m.name}</h3>
              <p className="text-xs text-muted-foreground">{m.company}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold">₹{m.price}</span>
                <Button size="sm" variant={cart.includes(m.id) ? "destructive" : "hero"} onClick={() => setCart(p => p.includes(m.id) ? p.filter(i => i !== m.id) : [...p, m.id])}>
                  {cart.includes(m.id) ? "Remove" : "Add"}
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

export default Medicines;
