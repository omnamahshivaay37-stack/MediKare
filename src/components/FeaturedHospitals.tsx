import { Link } from "react-router-dom";
import { Star, MapPin, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const hospitals = [
  { id: 1, name: "Apollo Multispeciality Hospital", rating: 4.8, distance: "2.3 km", beds: 12, price: "₹2,500", img: "🏥", specialties: ["Cardiology", "Neurology"] },
  { id: 2, name: "Fortis Healthcare", rating: 4.6, distance: "3.1 km", beds: 8, price: "₹3,000", img: "🏥", specialties: ["Orthopedics", "Oncology"] },
  { id: 3, name: "Max Super Speciality", rating: 4.7, distance: "4.5 km", beds: 15, price: "₹2,800", img: "🏥", specialties: ["Pediatrics", "ENT"] },
  { id: 4, name: "Medanta - The Medicity", rating: 4.9, distance: "6.2 km", beds: 20, price: "₹4,500", img: "🏥", specialties: ["Transplant", "Cardiology"] },
];

const FeaturedHospitals = () => (
  <section className="container mx-auto px-4 py-12">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold">Featured Hospitals</h2>
      <Link to="/hospitals">
        <Button variant="ghost" size="sm">View All →</Button>
      </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {hospitals.map((h) => (
        <Link
          key={h.id}
          to={`/hospitals/${h.id}`}
          className="group bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-hover transition-all duration-200 overflow-hidden"
        >
          <div className="h-36 gradient-primary flex items-center justify-center text-5xl opacity-80 group-hover:opacity-100 transition-opacity">
            {h.img}
          </div>
          <div className="p-4 space-y-3">
            <h3 className="font-semibold text-sm leading-tight line-clamp-1">{h.name}</h3>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Star className="h-3 w-3 text-warning fill-warning" /> {h.rating}</span>
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {h.distance}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {h.specialties.map((s) => (
                <Badge key={s} variant="secondary" className="text-[10px] px-2 py-0 bg-accent text-accent-foreground border-0">{s}</Badge>
              ))}
            </div>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1 text-xs">
                <Bed className="h-3 w-3 text-success" />
                <span className="text-success font-medium">{h.beds} beds</span>
              </div>
              <span className="text-sm font-bold">From {h.price}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default FeaturedHospitals;
