import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Siren } from "lucide-react";
import { useState } from "react";

const ambulanceTypes = [
  { type: "Basic", price: "₹15/km", icon: "🚑", desc: "Non-AC, first aid kit", available: true },
  { type: "ICU", price: "₹35/km", icon: "🏥", desc: "ICU equipment, doctor onboard", available: true },
  { type: "Oxygen-supported", price: "₹25/km", icon: "💨", desc: "Oxygen cylinders, trained staff", available: false },
];

const AmbulanceBooking = () => {
  const [selected, setSelected] = useState("Basic");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Book Ambulance</h1>
        <p className="text-muted-foreground text-sm mb-8">Choose your ambulance type and book instantly</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {ambulanceTypes.map((a) => (
            <button
              key={a.type}
              onClick={() => a.available && setSelected(a.type)}
              className={`text-left p-5 rounded-2xl border transition-all ${
                selected === a.type ? "border-primary bg-accent shadow-soft" : "border-border/50 bg-card hover:shadow-soft"
              } ${!a.available ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              <span className="text-3xl">{a.icon}</span>
              <h3 className="font-semibold mt-3">{a.type}</h3>
              <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="font-bold text-sm">{a.price}</span>
                <Badge className={a.available ? "bg-success/10 text-success border-0" : "bg-destructive/10 text-destructive border-0"}>
                  {a.available ? "Available" : "Busy"}
                </Badge>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-soft space-y-4">
          <h2 className="font-bold text-lg">Booking Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground">Pickup Location</label>
              <div className="flex items-center gap-2 mt-1 rounded-xl border border-input bg-background px-3 py-2.5">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <input placeholder="Enter pickup address" className="w-full bg-transparent outline-none text-sm" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Drop Location</label>
              <div className="flex items-center gap-2 mt-1 rounded-xl border border-input bg-background px-3 py-2.5">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <input placeholder="Enter hospital / destination" className="w-full bg-transparent outline-none text-sm" />
              </div>
            </div>
          </div>
          <Button variant="hero" size="lg" className="w-full gap-2 mt-4">
            <Siren className="h-4 w-4" /> Book Now
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AmbulanceBooking;
