import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const classes = [
  {
    title: "Wheel Pottery",
    level: "Beginner",
    price: "₹1,000",
    image: "https://images.pexels.com/photos/6611262/pexels-photo-6611262.jpeg",
    description: "Learn the fundamentals of centering, opening, and pulling clay on the potter's wheel."
  },
  {
    title: "Hand-Building Basics",
    level: "All Levels",
    price: "₹1,500",
    image: "https://images.pexels.com/photos/6694755/pexels-photo-6694755.jpeg",
    description: "Explore pinch, coil, and slab techniques to create organic functional forms without a wheel."
  },
  {
    title: "Potter Workshop",
    level: "Intermediate",
    price: "₹3,000",
    image: "https://images.pexels.com/photos/19015377/pexels-photo-19015377.jpeg",
    description: "Master the art of layering glazes, wax resist, and creating custom surface textures."
  }
];

export default function Classes() {
  return (
    <section id="classes" className="py-24 md:py-32 bg-[#F3F1E9]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-gold mb-4 block"
          >
            Learn the Craft
          </motion.span>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-heading text-charcoal mb-6"
          >
            Studio Classes
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-charcoal/60 font-light"
          >
            Whether you're touching clay for the first time or looking to refine your skills, our expert instructors will guide you through the meditative process of pottery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {classes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="will-change-transform"
            >
              <Card className="bg-cream border-none shadow-none group cursor-pointer overflow-hidden">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 gpu-accelerated"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="border-gold/30 text-gold text-[10px] uppercase tracking-widest px-3 py-1">
                      {item.level}
                    </Badge>
                    <span className="text-gold font-medium">{item.price}</span>
                  </div>
                  <h3 className="text-2xl font-heading text-charcoal mb-3 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        

      </div>
    </section>
  );
}
