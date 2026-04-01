import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Bed, Image, Users, Stethoscope } from "lucide-react";

const hospital = {
  name: "Apollo Multispeciality Hospital",
  rating: 4.8,
  reviews: 2340,
  address: "21 Greams Lane, Off Greams Road, Chennai",
  beds: 12,
  facilities: ["ICU", "Oxygen Supply", "Ventilator", "24/7 Pharmacy", "Blood Bank", "MRI/CT Scan"],
  rooms: [
    { type: "General Ward", price: "₹2,500/day", available: true },
    { type: "Private Room", price: "₹5,500/day", available: true },
    { type: "ICU", price: "₹12,000/day", available: false },
    { type: "Deluxe Suite", price: "₹15,000/day", available: true },
  ],
  doctors: [
    { name: "Dr. Priya Sharma", specialty: "Cardiologist", exp: "15 yrs" },
    { name: "Dr. Rahul Verma", specialty: "Neurologist", exp: "12 yrs" },
    { name: "Dr. Anita Desai", specialty: "Orthopedic", exp: "10 yrs" },
  ],
  reviewsList: [
    { user: "Amit K.", rating: 5, text: "Excellent care and modern facilities. Highly recommended!" },
    { user: "Sneha R.", rating: 4, text: "Good hospital, slightly expensive but worth it." },
  ],
};

const HospitalDetails = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden mb-6">
        <div className="h-56 gradient-primary flex items-center justify-center gap-4">
          {[1,2,3].map(i => (
            <div key={i} className="h-40 w-48 rounded-xl bg-card/20 backdrop-blur flex items-center justify-center">
              <Image className="h-8 w-8 text-primary-foreground/50" />
            </div>
          ))}
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">{hospital.name}</h1>
              <p className="text-muted-foreground text-sm mt-1 flex items-center gap-1"><MapPin className="h-4 w-4" /> {hospital.address}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="flex items-center gap-1 text-sm"><Star className="h-4 w-4 text-warning fill-warning" /> {hospital.rating}</span>
                <span className="text-sm text-muted-foreground">({hospital.reviews} reviews)</span>
                <Badge className="bg-success/10 text-success border-0 gap-1"><Bed className="h-3 w-3" /> {hospital.beds} beds available</Badge>
              </div>
            </div>
            <Button variant="hero" size="lg">Book Admission / Appointment</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Facilities */}
          <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-soft">
            <h2 className="text-lg font-bold mb-4">Facilities</h2>
            <div className="flex flex-wrap gap-2">
              {hospital.facilities.map(f => (
                <Badge key={f} variant="secondary" className="bg-accent text-accent-foreground border-0 px-3 py-1">{f}</Badge>
              ))}
            </div>
          </div>

          {/* Rooms */}
          <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-soft">
            <h2 className="text-lg font-bold mb-4">Room Types & Pricing</h2>
            <div className="space-y-3">
              {hospital.rooms.map(r => (
                <div key={r.type} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                  <div>
                    <span className="font-medium text-sm">{r.type}</span>
                    <p className="text-muted-foreground text-xs">{r.price}</p>
                  </div>
                  <Badge className={r.available ? "bg-success/10 text-success border-0" : "bg-destructive/10 text-destructive border-0"}>
                    {r.available ? "Available" : "Full"}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-soft">
            <h2 className="text-lg font-bold mb-4">Reviews & Ratings</h2>
            <div className="space-y-4">
              {hospital.reviewsList.map((r, i) => (
                <div key={i} className="p-4 rounded-xl bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{r.user[0]}</div>
                    <span className="font-medium text-sm">{r.user}</span>
                    <div className="flex gap-0.5">{Array.from({length: r.rating}, (_, j) => <Star key={j} className="h-3 w-3 text-warning fill-warning" />)}</div>
                  </div>
                  <p className="text-sm text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Doctors */}
        <div className="space-y-6">
          <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-soft">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><Stethoscope className="h-5 w-5" /> Doctors</h2>
            <div className="space-y-3">
              {hospital.doctors.map(d => (
                <div key={d.name} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{d.name}</p>
                    <p className="text-xs text-muted-foreground">{d.specialty} · {d.exp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default HospitalDetails;
