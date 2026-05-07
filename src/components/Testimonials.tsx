import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "The beginner's wheel class was transformative. The studio has such a peaceful energy, and I've found a new creative outlet that I absolutely love.",
    author: "sarah sheikh"
  },
  {
    text: "I bought a set of mugs for my new home, and they are easily my favorite objects. You can feel the care and craftsmanship in every curve.",
    author: "amit chavhan"
  },
  {
    text: "Earthen Touch is more than a studio; it's a community. The instructors are patient and truly passionate about sharing the art of pottery.",
    author: "snehal patil"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-navy text-cream overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
          <Quote className="w-96 h-96" />
        </div>

        <div className="text-center mb-20 relative z-10">
          <span className="text-sm uppercase tracking-widest text-gold mb-4 block">Kind Words</span>
          <h2 className="text-4xl md:text-5xl font-heading mb-6">Studio Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center will-change-transform"
            >
              <div className="mb-8 text-gold">
                <Quote className="w-8 h-8 fill-gold/20" />
              </div>
              <p className="text-lg font-light leading-relaxed mb-8 italic opacity-80">
                "{item.text}"
              </p>
              <div className="mt-auto">
                <div className="text-gold font-heading text-xl mb-1">{item.author}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
