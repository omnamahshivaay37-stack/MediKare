import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedHospitals from "@/components/FeaturedHospitals";
import EmergencyButtons from "@/components/EmergencyButtons";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <CategoriesGrid />
    <FeaturedHospitals />
    <EmergencyButtons />
    <Footer />
  </div>
);

export default Index;
