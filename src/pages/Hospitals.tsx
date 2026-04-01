import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Bed, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const allHospitals = [
  { id: 1, name: "Apollo Multispeciality Hospital", rating: 4.8, distance: 2.3, beds: 12, price: 2500, specialties: ["Cardiology", "Neurology"], rooms: ["ICU", "Private", "General"] },
  { id: 2, name: "Fortis Healthcare", rating: 4.6, distance: 3.1, beds: 8, price: 3000, specialties: ["Orthopedics", "Oncology"], rooms: ["ICU", "General"] },
  { id: 3, name: "Max Super Speciality", rating: 4.7, distance: 4.5, beds: 15, price: 2800, specialties: ["Pediatrics", "ENT"], rooms: ["Private", "General"] },
  { id: 4, name: "Medanta - The Medicity", rating: 4.9, distance: 6.2, beds: 20, price: 4500, specialties: ["Transplant", "Cardiology"], rooms: ["ICU", "Private", "General"] },
  { id: 5, name: "AIIMS Delhi", rating: 4.9, distance: 8.0, beds: 50, price: 500, specialties: ["All Departments"], rooms: ["ICU", "General"] },
  { id: 6, name: "Manipal Hospital", rating: 4.5, distance: 5.5, beds: 10, price: 3200, specialties: ["Dermatology", "Gastro"], rooms: ["Private", "General"] },
];

const Hospitals = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Hospitals</h1>
            <p className="text-muted-foreground text-sm mt-1">{allHospitals.length} hospitals found near you</p>
          </div>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => setShowFilters(!showFilters)}>
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </Button>
        </div>

        {showFilters && (
          <div className="bg-card rounded-2xl border border-border/50 p-6 mb-6 grid grid-cols-1 sm:grid-cols-4 gap-4 shadow-soft">
            <div>
              <label className="text-xs font-medium text-muted-foreground">Price Range</label>
              <select className="w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-sm">
                <option>All prices</option>
                <option>Under ₹1,000</option>
                <option>₹1,000 - ₹3,000</option>
                <option>₹3,000+</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Distance</label>
              <select className="w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-sm">
                <option>Any distance</option>
                <option>Within 5 km</option>
                <option>Within 10 km</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Bed Availability</label>
              <select className="w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-sm">
                <option>All</option>
                <option>Available only</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Room Type</label>
              <select className="w-full mt-1 rounded-lg border border-input bg-background px-3 py-2 text-sm">
                <option>All rooms</option>
                <option>ICU</option>
                <option>Private</option>
                <option>General</option>
              </select>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allHospitals.map((h) => (
            <Link
              key={h.id}
              to={`/hospitals/${h.id}`}
              className="group bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-hover transition-all overflow-hidden"
            >
              <div className="h-40 gradient-primary flex items-center justify-center text-5xl">🏥</div>
              <div className="p-5 space-y-3">
                <h3 className="font-semibold line-clamp-1">{h.name}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Star className="h-3 w-3 text-warning fill-warning" /> {h.rating}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {h.distance} km</span>
                  <span className="flex items-center gap-1"><Bed className="h-3 w-3 text-success" /> {h.beds} beds</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {h.rooms.map((r) => (
                    <Badge key={r} variant="secondary" className="text-[10px] bg-accent text-accent-foreground border-0">{r}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-bold">From ₹{h.price.toLocaleString()}</span>
                  <Button size="sm" variant="hero">View Details</Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hospitals;
