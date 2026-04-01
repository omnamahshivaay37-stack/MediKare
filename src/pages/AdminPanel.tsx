import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, ShoppingBag, Building2, CreditCard, Megaphone, Shield, UserX, CheckCircle, XCircle, Download } from "lucide-react";
import { useState } from "react";

const adminStats = [
  { label: "Total Users", value: "25,430", icon: Users, color: "text-primary" },
  { label: "Total Vendors", value: "342", icon: ShoppingBag, color: "text-success" },
  { label: "Total Bookings", value: "8,912", icon: Building2, color: "text-warning" },
  { label: "Revenue", value: "₹12.3L", icon: CreditCard, color: "text-secondary" },
];

const tabs = [
  { id: "overview", label: "Dashboard" },
  { id: "users", label: "Users" },
  { id: "vendors", label: "Vendors" },
  { id: "hospitals", label: "Hospitals" },
  { id: "bookings", label: "Bookings" },
  { id: "payments", label: "Payments" },
  { id: "content", label: "Content" },
];

const AdminPanel = () => {
  const [tab, setTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${tab === t.id ? "bg-primary text-primary-foreground shadow-soft" : "bg-card text-muted-foreground border border-border/50 hover:bg-muted"}`}>{t.label}</button>
          ))}
        </div>

        {tab === "overview" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {adminStats.map(s => (
                <div key={s.label} className="bg-card rounded-2xl border border-border/50 p-5 shadow-soft">
                  <div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">{s.label}</span><s.icon className={`h-5 w-5 ${s.color}`} /></div>
                  <p className="text-2xl font-bold mt-2">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-soft h-64 flex items-center justify-center text-muted-foreground">
              <BarChart3 className="h-8 w-8 mr-3" /> Revenue overview chart
            </div>
          </>
        )}

        {tab === "users" && (
          <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border bg-muted/50"><th className="text-left p-4 font-medium">Name</th><th className="text-left p-4 font-medium">Email</th><th className="text-left p-4 font-medium">Status</th><th className="p-4">Actions</th></tr></thead>
              <tbody>
                {[{name: "John Doe", email: "john@email.com", active: true}, {name: "Jane Smith", email: "jane@email.com", active: true}, {name: "Spam User", email: "spam@fake.com", active: false}].map((u, i) => (
                  <tr key={i} className="border-b border-border/50"><td className="p-4 font-medium">{u.name}</td><td className="p-4 text-muted-foreground">{u.email}</td><td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${u.active ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>{u.active ? "Active" : "Blocked"}</span></td><td className="p-4 text-center"><Button size="sm" variant={u.active ? "destructive" : "success"}>{u.active ? "Block" : "Activate"}</Button></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "vendors" && (
          <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border bg-muted/50"><th className="text-left p-4 font-medium">Vendor</th><th className="text-left p-4 font-medium">Type</th><th className="text-left p-4 font-medium">Status</th><th className="p-4">Actions</th></tr></thead>
              <tbody>
                {[{name: "MedPharm Labs", type: "Lab Tests", status: "Pending"}, {name: "QuickAmbulance", type: "Ambulance", status: "Approved"}, {name: "HealthEquip", type: "Equipment", status: "Pending"}].map((v, i) => (
                  <tr key={i} className="border-b border-border/50"><td className="p-4 font-medium">{v.name}</td><td className="p-4 text-muted-foreground">{v.type}</td><td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${v.status === "Approved" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{v.status}</span></td><td className="p-4 flex gap-2 justify-center">{v.status === "Pending" && <><Button size="sm" variant="success" className="gap-1"><CheckCircle className="h-3 w-3" />Approve</Button><Button size="sm" variant="destructive" className="gap-1"><XCircle className="h-3 w-3" />Reject</Button></>}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "hospitals" && (
          <div className="space-y-4">
            <Button variant="hero" className="gap-2"><Building2 className="h-4 w-4" /> Add Hospital</Button>
            <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-border bg-muted/50"><th className="text-left p-4 font-medium">Hospital</th><th className="text-left p-4 font-medium">Beds</th><th className="text-left p-4 font-medium">Base Price</th><th className="p-4">Actions</th></tr></thead>
                <tbody>
                  {[{name: "Apollo Hospital", beds: 12, price: "₹2,500"}, {name: "Fortis Healthcare", beds: 8, price: "₹3,000"}].map((h, i) => (
                    <tr key={i} className="border-b border-border/50"><td className="p-4 font-medium">{h.name}</td><td className="p-4">{h.beds}</td><td className="p-4">{h.price}</td><td className="p-4 text-center"><Button size="sm" variant="ghost">Edit</Button></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "bookings" && (
          <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border bg-muted/50"><th className="text-left p-4 font-medium">ID</th><th className="text-left p-4 font-medium">User</th><th className="text-left p-4 font-medium">Type</th><th className="text-left p-4 font-medium">Date</th><th className="text-left p-4 font-medium">Status</th></tr></thead>
              <tbody>
                {[{id: "#B001", user: "John Doe", type: "Ambulance", date: "Apr 1", status: "Completed"}, {id: "#B002", user: "Sneha R.", type: "Lab Test", date: "Apr 2", status: "Active"}, {id: "#B003", user: "Raj M.", type: "Hospital", date: "Apr 3", status: "Pending"}].map((b, i) => (
                  <tr key={i} className="border-b border-border/50"><td className="p-4 font-medium">{b.id}</td><td className="p-4">{b.user}</td><td className="p-4 text-muted-foreground">{b.type}</td><td className="p-4 text-muted-foreground">{b.date}</td><td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${b.status === "Completed" ? "bg-success/10 text-success" : b.status === "Active" ? "bg-primary/10 text-primary" : "bg-warning/10 text-warning"}`}>{b.status}</span></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "payments" && (
          <div className="space-y-4">
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2"><Download className="h-4 w-4" /> Download Report</Button>
            </div>
            <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-border bg-muted/50"><th className="text-left p-4 font-medium">Transaction</th><th className="text-left p-4 font-medium">Amount</th><th className="text-left p-4 font-medium">Date</th><th className="text-left p-4 font-medium">Type</th></tr></thead>
                <tbody>
                  {[{id: "TXN-001", amount: "₹3,500", date: "Apr 1", type: "Hospital"}, {id: "TXN-002", amount: "₹350", date: "Apr 1", type: "Lab Test"}, {id: "TXN-003", amount: "₹800", date: "Mar 31", type: "Ambulance"}].map((t, i) => (
                    <tr key={i} className="border-b border-border/50"><td className="p-4 font-medium">{t.id}</td><td className="p-4 font-bold">{t.amount}</td><td className="p-4 text-muted-foreground">{t.date}</td><td className="p-4 text-muted-foreground">{t.type}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "content" && (
          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-soft">
              <h2 className="font-bold mb-4 flex items-center gap-2"><Megaphone className="h-5 w-5" /> Banners & Announcements</h2>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-muted/50 flex items-center justify-between">
                  <span className="text-sm">Homepage Hero Banner</span>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
                <div className="p-4 rounded-xl bg-muted/50 flex items-center justify-between">
                  <span className="text-sm">COVID-19 Notice</span>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
              </div>
              <Button variant="hero" size="sm" className="mt-4 gap-2"><Megaphone className="h-3 w-3" /> Add Banner</Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;
