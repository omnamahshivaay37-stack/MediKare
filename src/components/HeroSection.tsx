import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 relative">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-accent px-4 py-1.5 rounded-full text-sm font-medium text-accent-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Trusted by 10,000+ patients
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold">
            <span className="gradient-hero-text">HospiKare</span> - Where{" "}
            <span className="gradient-hero-text">Health</span> Meets{" "}
            <span className="gradient-hero-text">Access</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Find hospitals, book ambulances, order medicines, and access healthcare services — all in one place.
          </p>

          {/* Search Box */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto bg-card rounded-2xl p-2 shadow-soft border border-border">
            
            {/* Search Input */}
            <div className="flex items-center gap-2 flex-1 px-3">
              <Search className="h-5 w-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Search hospitals, tests, ambulance..."
                className="w-full bg-transparent outline-none text-sm py-3 placeholder:text-muted-foreground"
              />
            </div>

            {/* Location Input */}
            <div className="flex items-center gap-2 px-3 border-t sm:border-t-0 sm:border-l border-border pt-3 sm:pt-0">
              <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Location"
                className="w-full bg-transparent outline-none text-sm py-3 placeholder:text-muted-foreground"
              />
            </div>

            {/* Button */}
            <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-xl px-6 py-3">
              Search
            </Button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
