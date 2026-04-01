import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const equipment = [
  { id: 1, name: "Manual Wheelchair", category: "Wheelchairs", price: 8500, rent: 500, img: "♿" },
  { id: 2, name: "Oxygen Cylinder 10L", category: "Oxygen", price: 12000, rent: 800, img: "🫁" },
  { id: 3, name: "Digital BP Monitor", category: "BP Machines", price: 2200, rent: null, img: "💓" },
  { id: 4, name: "Motorized Wheelchair", category: "Wheelchairs", price: 45000, rent: 2000, img: "♿" },
  { id: 5, name: "Pulse Oximeter", category: "Monitors", price: 1200, rent: null, img: "🩺" },
  { id: 6, name: "Nebulizer Machine", category: "Respiratory", price: 2500, rent: 300, img: "💨" },
  { id: 7, name: "Hospital Bed (Adjustable)", category: "Beds", price: 35000, rent: 1500, img: "🛏" },
  { id: 8, name: "Oxygen Concentrator", category: "Oxygen", price: 55000, rent: 3000, img: "🫁" },
];

const Equipment = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(equipment.map(e => e.category))];
  const filtered = filter === "All" ? equipment : equipment.filter(e => e.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Medical Equipment</h1>
        <p className="text-muted-foreground text-sm mb-6">Buy or rent medical equipment at the best prices</p>

        <div className="flex gap-2 mb-6 flex-wrap">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map(e => (
            <div key={e.id} className="bg-card rounded-2xl border border-border/50 p-5 shadow-soft hover:shadow-hover transition-all">
              <div className="h-28 rounded-xl bg-muted flex items-center justify-center text-4xl mb-3">{e.img}</div>
              <Badge className="bg-accent text-accent-foreground border-0 text-[10px] mb-2">{e.category}</Badge>
              <h3 className="font-semibold text-sm">{e.name}</h3>
              <div className="mt-3 space-y-1">
                <p className="text-sm font-bold">₹{e.price.toLocaleString()} <span className="text-xs font-normal text-muted-foreground">to buy</span></p>
                {e.rent && <p className="text-xs text-muted-foreground">₹{e.rent}/month to rent</p>}
              </div>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="hero" className="flex-1">Buy</Button>
                {e.rent && <Button size="sm" variant="outline" className="flex-1">Rent</Button>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Equipment;
