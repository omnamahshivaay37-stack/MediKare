import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Hospitals from "./pages/Hospitals";
import HospitalDetails from "./pages/HospitalDetails";
import AmbulanceBooking from "./pages/AmbulanceBooking";
import LabTests from "./pages/LabTests";
import Medicines from "./pages/Medicines";
import Insurance from "./pages/Insurance";
import Equipment from "./pages/Equipment";
import Dashboard from "./pages/Dashboard";
import VendorDashboard from "./pages/VendorDashboard";
import AdminPanel from "./pages/AdminPanel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hospitals/:id" element={<HospitalDetails />} />
          <Route path="/ambulance" element={<AmbulanceBooking />} />
          <Route path="/lab-tests" element={<LabTests />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
