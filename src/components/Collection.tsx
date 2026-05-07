import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

const collection = [
  {
    name: "Rustic Off White Platter & Bowl Set",
    category: "Sets",
    image: "https://images.pexels.com/photos/17225133/pexels-photo-17225133.jpeg"
  },
  {
    name: "Terracotta Serving Bowl",
    category: "Tableware",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80"
  },
  {
    name: "Speckled Tea Set",
    category: "Sets",
    image: "https://images.pexels.com/photos/18273370/pexels-photo-18273370.jpeg"
  },
  {
    name: "Organic Stone Mug",
    category: "Tableware",
    image: "https://images.pexels.com/photos/31452624/pexels-photo-31452624.jpeg"
  },
  {
    name: "Noir Breakfast Set",
    category: "Sets",
    image: "https://images.pexels.com/photos/15683361/pexels-photo-15683361.jpeg"
  },
  {
    name: "Minimalist Pitcher",
    category: "Tableware",
    image: "https://images.pexels.com/photos/11691547/pexels-photo-11691547.jpeg"
  },
  {
    name: "Hand-thrown Tea Bowl",
    category: "Tableware",
    image: "https://images.pexels.com/photos/30225370/pexels-photo-30225370.jpeg"
  },
  {
    name: "Artisanal Vase Set",
    category: "Sets",
    image: "https://images.pexels.com/photos/36897846/pexels-photo-36897846.jpeg"
  },
  {
    name: "Glazed Ceramic Pitcher",
    category: "Tableware",
    image: "https://images.pexels.com/photos/32296615/pexels-photo-32296615.jpeg"
  },
  {
    name: "Sandstone Dinner Plate",
    category: "Tableware",
    image: "https://images.pexels.com/photos/33661399/pexels-photo-33661399.jpeg"
  }
];

export default function Collection() {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? collection : collection.slice(0, 8);

  return (
    <section id="collection" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-widest text-gold mb-4 block"
            >
              Shop Handcrafted
            </motion.span>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-heading text-charcoal"
            >
              Our <span className="italic">Collections</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex gap-6"
          >
            {["All", "Vases", "Tableware", "Sets"].map((cat) => (
              <button 
                key={cat}
                className={`text-[10px] uppercase tracking-[0.2em] pb-2 border-b transition-all ${
                  cat === "All" ? "border-gold text-gold" : "border-transparent text-charcoal/40 hover:text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                className="group cursor-pointer will-change-transform"
              >
                <div className="relative aspect-square overflow-hidden bg-[#F3F1E9]">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 gpu-accelerated"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
          <Button 
            variant="ghost" 
            onClick={() => setShowAll(!showAll)}
            className="text-charcoal hover:text-gold uppercase tracking-[0.3em] text-xs transition-all group"
          >
            {showAll ? "Show Less" : "View Full Shop"} <span className={`ml-2 transition-transform ${showAll ? "-rotate-90" : "group-hover:translate-x-2"}`}>→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
