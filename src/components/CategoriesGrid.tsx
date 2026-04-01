import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  { icon: "🏥", label: "Hospitals", path: "/hospitals", color: "bg-primary/10 text-primary" },
  { icon: "🚑", label: "Ambulance", path: "/ambulance", color: "bg-destructive/10 text-destructive" },
  { icon: "🧪", label: "Lab Tests", path: "/lab-tests", color: "bg-accent text-accent-foreground" },
  { icon: "💊", label: "Medicines", path: "/medicines", color: "bg-success/10 text-success" },
  { icon: "🛡", label: "Insurance", path: "/insurance", color: "bg-warning/10 text-warning" },
  { icon: "🩺", label: "Equipment", path: "/equipment", color: "bg-secondary/10 text-secondary" },
];

const CategoriesGrid = () => (
  <section className="container mx-auto px-4 py-12">
    <h2 className="text-2xl font-bold mb-8 text-center">Our Services</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
        >
          <Link
            to={cat.path}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-200"
          >
            <span className={`text-3xl h-14 w-14 rounded-xl flex items-center justify-center ${cat.color}`}>
              {cat.icon}
            </span>
            <span className="text-sm font-semibold">{cat.label}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CategoriesGrid;
