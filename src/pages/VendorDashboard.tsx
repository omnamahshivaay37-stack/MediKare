import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart3, Package, Calendar, MapPin, Star, Settings, Plus, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

const stats = [
  { label: "Total Orders", value: "1,234", icon: Package, color: "text-primary" },
  { label: "Revenue", value: "₹4.5L", icon: BarChart3, color: "text-success" },
  { label: "Active Services", value: "8", icon: Settings, color: "text-warning" },
  { label: "Avg Rating", value: "4.7", icon: Star, color: "text-secondary" },
];

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "products", label: "Products" },
  { id: "bookings", label: "Bookings" },
  { id: "availability", label: "Availability" },
  { id: "reviews", label: "Reviews" },
];

const mockProducts = [
  { id: 1, name: "Paracetamol 500mg", type: "Medicine", price: "₹30", stock: 150 },
  { id: 2, name: "Digital BP Monitor", type: "Equipment", price: "₹2,200", stock: 12 },
  { id: 3, name: "CBC Test", type: "Lab Test", price: "₹350", stock: null },
];

const mockBookings = [
  { id: 1, customer: "Amit K.", service: "ICU Ambulance", date: "Apr 1, 2026", status: "Pending" },
  { id: 2, customer: "Sneha R.", service: "CBC Test", date: "Apr 2, 2026", status: "Confirmed" },
  { id: 3, customer: "Raj M.", service: "Wheelchair Rent", date: "Mar 30, 2026", status: "Pending" },
];

const VendorDashboard = () => {
  const [tab, setTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
          <Button variant="hero" size="sm" className="gap-2"><Plus className="h-4 w-4" /> Add Product</Button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${tab === t.id ? "bg-primary text-primary-foreground shadow-soft" : "bg-card text-muted-foreground border border-border/50 hover:bg-muted"}`}>{t.label}</button>
          ))}
        </div>

        {tab === "overview" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map(s => (
                <div key={s.label} className="bg-card rounded-2xl border border-border/50 p-5 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{s.label}</span>
                    <s.icon className={`h-5 w-5 ${s.color}`} />
                  </div>
                  <p className="text-2xl font-bold mt-2">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-soft h-64 flex items-center justify-center text-muted-foreground">
              <BarChart3 className="h-8 w-8 mr-3" /> Sales & Bookings chart will appear here
            </div>
          </>
        )}

        {tab === "products" && (
          <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border bg-muted/50"><th className="text-left p-4 font-medium">Product</th><th className="text-left p-4 font-medium">Type</th><th className="text-left p-4 font-medium">Price</th><th className="text-left p-4 font-medium">Stock</th><th className="p-4"></th></tr></thead>
              <tbody>
                {mockProducts.map(p => (
                  <tr key={p.id} className="border-b border-border/50"><td className="p-4 font-medium">{p.name}</td><td className="p-4 text-muted-foreground">{p.type}</td><td className="p-4">{p.price}</td><td className="p-4">{p.stock ?? "N/A"}</td><td className="p-4"><Button size="sm" variant="ghost">Edit</Button></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "bookings" && (
          <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border bg-muted/50"><th className="text-left p-4 font-medium">Customer</th><th className="text-left p-4 font-medium">Service</th><th className="text-left p-4 font-medium">Date</th><th className="text-left p-4 font-medium">Status</th><th className="p-4 font-medium">Actions</th></tr></thead>
              <tbody>
                {mockBookings.map(b => (
                  <tr key={b.id} className="border-b border-border/50">
                    <td className="p-4 font-medium">{b.customer}</td><td className="p-4 text-muted-foreground">{b.service}</td><td className="p-4 text-muted-foreground">{b.date}</td>
                    <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${b.status === "Confirmed" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{b.status}</span></td>
                    <td className="p-4 flex gap-2">{b.status === "Pending" && <><Button size="sm" variant="success" className="gap-1"><CheckCircle className="h-3 w-3" /> Accept</Button><Button size="sm" variant="destructive" className="gap-1"><XCircle className="h-3 w-3" /> Reject</Button></>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "availability" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{label: "ICU Ambulance", status: "Available"}, {label: "Basic Ambulance", status: "Busy"}, {label: "CBC Test Slots (Today)", status: "5 slots"}, {label: "Wheelchair Stock", status: "3 units"}].map(a => (
              <div key={a.label} className="bg-card rounded-2xl border border-border/50 p-5 shadow-soft flex items-center justify-between">
                <span className="font-medium">{a.label}</span>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${a.status === "Busy" ? "bg-destructive/10 text-destructive" : "bg-success/10 text-success"}`}>{a.status}</span>
                  <Button size="sm" variant="outline">Update</Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "reviews" && (
          <div className="space-y-4">
            {[{user: "Amit K.", rating: 5, text: "Fast ambulance service, very professional!"}, {user: "Sneha R.", rating: 4, text: "Good lab test service, timely report delivery."}].map((r, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border/50 p-5 shadow-soft">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{r.user[0]}</div>
                  <span className="font-medium text-sm">{r.user}</span>
                  <div className="flex gap-0.5">{Array.from({length: r.rating}, (_, j) => <Star key={j} className="h-3 w-3 text-warning fill-warning" />)}</div>
                </div>
                <p className="text-sm text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default VendorDashboard;
