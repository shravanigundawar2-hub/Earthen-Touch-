import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img 
          src="https://images.pexels.com/photos/14341980/pexels-photo-14341980.jpeg?auto=compress&cs=tinysrgb&w=1280"
          alt="Pottery Studio" 
          className="w-full h-full object-cover gpu-accelerated"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />
      </motion.div>
      
      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-charcoal/50 z-[1]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gold mb-6 block font-medium">
            Handcrafted with Soul
          </span>
          <h1 className="text-6xl md:text-8xl font-heading font-light text-charcoal mb-8 leading-tight">
            The Art of <br />
            <span className="italic">Earthen Touch</span>
          </h1>
          <p className="text-lg text-charcoal max-w-2xl mx-auto font-medium leading-relaxed">
            From the earth, through our hands, into your home — pottery that breathes life into every space.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-charcoal/40">Scroll</span>
        <div className="w-[1px] h-12 bg-charcoal/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
