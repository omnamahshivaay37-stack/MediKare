import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Package, Siren, TestTube, User, Settings } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "appointments", label: "Appointments", icon: Calendar },
  { id: "orders", label: "Orders", icon: Package },
  { id: "ambulance", label: "Ambulance", icon: Siren },
  { id: "lab", label: "Lab Tests", icon: TestTube },
  { id: "profile", label: "Profile", icon: User },
];

const mockData = {
  appointments: [
    { id: 1, hospital: "Apollo Hospital", doctor: "Dr. Priya Sharma", date: "Apr 2, 2026", status: "Confirmed" },
    { id: 2, hospital: "Fortis Healthcare", doctor: "Dr. Rahul Verma", date: "Apr 5, 2026", status: "Pending" },
  ],
  orders: [
    { id: 1, item: "Paracetamol 500mg × 2", total: "₹60", date: "Mar 28, 2026", status: "Delivered" },
    { id: 2, item: "Nebulizer Machine (Rent)", total: "₹300/mo", date: "Mar 25, 2026", status: "Active" },
  ],
  ambulance: [
    { id: 1, type: "ICU Ambulance", from: "Home", to: "Apollo Hospital", date: "Mar 20, 2026", status: "Completed" },
  ],
  lab: [
    { id: 1, test: "Complete Blood Count", lab: "Dr. Lal PathLabs", date: "Mar 22, 2026", status: "Report Ready" },
    { id: 2, test: "Thyroid Profile", lab: "SRL Diagnostics", date: "Apr 1, 2026", status: "Scheduled" },
  ],
};

const statusColor = (s: string) => {
  if (["Confirmed", "Delivered", "Completed", "Report Ready", "Active"].includes(s)) return "bg-success/10 text-success";
  if (["Pending", "Scheduled"].includes(s)) return "bg-warning/10 text-warning";
  return "bg-muted text-muted-foreground";
};

const Dashboard = () => {
  const [tab, setTab] = useState("appointments");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                tab === t.id ? "bg-primary text-primary-foreground shadow-soft" : "bg-card text-muted-foreground border border-border/50 hover:bg-muted"
              }`}
            >
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
        </div>

        {tab === "profile" ? (
          <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-soft max-w-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center text-2xl text-primary-foreground font-bold">JD</div>
              <div>
                <h2 className="font-bold text-lg">John Doe</h2>
                <p className="text-sm text-muted-foreground">john.doe@email.com</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm p-3 rounded-xl bg-muted/50"><span className="text-muted-foreground">Phone</span><span className="font-medium">+91 98765 43210</span></div>
              <div className="flex justify-between text-sm p-3 rounded-xl bg-muted/50"><span className="text-muted-foreground">Blood Group</span><span className="font-medium">O+</span></div>
              <div className="flex justify-between text-sm p-3 rounded-xl bg-muted/50"><span className="text-muted-foreground">City</span><span className="font-medium">Mumbai</span></div>
            </div>
            <Button variant="outline" className="mt-6 gap-2"><Settings className="h-4 w-4" /> Edit Profile</Button>
          </div>
        ) : (
          <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    {tab === "appointments" && <><th className="text-left p-4 font-medium">Hospital</th><th className="text-left p-4 font-medium">Doctor</th><th className="text-left p-4 font-medium">Date</th><th className="text-left p-4 font-medium">Status</th></>}
                    {tab === "orders" && <><th className="text-left p-4 font-medium">Item</th><th className="text-left p-4 font-medium">Total</th><th className="text-left p-4 font-medium">Date</th><th className="text-left p-4 font-medium">Status</th></>}
                    {tab === "ambulance" && <><th className="text-left p-4 font-medium">Type</th><th className="text-left p-4 font-medium">Route</th><th className="text-left p-4 font-medium">Date</th><th className="text-left p-4 font-medium">Status</th></>}
                    {tab === "lab" && <><th className="text-left p-4 font-medium">Test</th><th className="text-left p-4 font-medium">Lab</th><th className="text-left p-4 font-medium">Date</th><th className="text-left p-4 font-medium">Status</th></>}
                  </tr>
                </thead>
                <tbody>
                  {tab === "appointments" && mockData.appointments.map(r => (
                    <tr key={r.id} className="border-b border-border/50 hover:bg-muted/30"><td className="p-4 font-medium">{r.hospital}</td><td className="p-4 text-muted-foreground">{r.doctor}</td><td className="p-4 text-muted-foreground">{r.date}</td><td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor(r.status)}`}>{r.status}</span></td></tr>
                  ))}
                  {tab === "orders" && mockData.orders.map(r => (
                    <tr key={r.id} className="border-b border-border/50 hover:bg-muted/30"><td className="p-4 font-medium">{r.item}</td><td className="p-4">{r.total}</td><td className="p-4 text-muted-foreground">{r.date}</td><td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor(r.status)}`}>{r.status}</span></td></tr>
                  ))}
                  {tab === "ambulance" && mockData.ambulance.map(r => (
                    <tr key={r.id} className="border-b border-border/50 hover:bg-muted/30"><td className="p-4 font-medium">{r.type}</td><td className="p-4 text-muted-foreground">{r.from} → {r.to}</td><td className="p-4 text-muted-foreground">{r.date}</td><td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor(r.status)}`}>{r.status}</span></td></tr>
                  ))}
                  {tab === "lab" && mockData.lab.map(r => (
                    <tr key={r.id} className="border-b border-border/50 hover:bg-muted/30"><td className="p-4 font-medium">{r.test}</td><td className="p-4 text-muted-foreground">{r.lab}</td><td className="p-4 text-muted-foreground">{r.date}</td><td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor(r.status)}`}>{r.status}</span></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
