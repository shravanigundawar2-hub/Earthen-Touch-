import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="pt-20 pb-24 md:pt-24 md:pb-32 bg-cream">
      <div className="container mx-auto px-6">
        {/* Top Row: 2 images side by side horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="aspect-[16/9] overflow-hidden max-w-2xl w-full md:justify-self-end will-change-transform"
          >
            <img 
              src="https://images.pexels.com/photos/14341980/pexels-photo-14341980.jpeg" 
              alt="Pottery wheel" 
              className="w-full h-full object-cover gpu-accelerated"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              width="672"
              height="378"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-[16/9] overflow-hidden max-w-2xl w-full md:justify-self-start will-change-transform"
          >
            <img 
              src="https://images.pexels.com/photos/8903259/pexels-photo-8903259.jpeg" 
              alt="Potter hands" 
              className="w-full h-full object-cover gpu-accelerated"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              width="672"
              height="378"
            />
          </motion.div>
        </div>

        {/* Middle Row: Vertical image on left, Text and Horizontal image on right */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Vertical Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[2/3] overflow-hidden max-w-md mx-auto will-change-transform"
          >
            <img 
              src="https://images.pexels.com/photos/6611377/pexels-photo-6611377.jpeg" 
              alt="Handcrafted vase" 
              className="w-full h-full object-cover gpu-accelerated"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              width="448"
              height="672"
            />
          </motion.div>

          {/* Right: Text and Horizontal Image */}
          <div className="flex flex-col h-full justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading text-charcoal mb-8 leading-tight">
                This is what <span className="italic text-terracotta">we do!</span>
              </h2>
              <div className="space-y-6 text-charcoal/70 leading-relaxed font-light mb-12">
                <p>
                  At Earthen Touch, we handcraft pottery that belongs in real homes and real lives. From wheel-thrown vases and hand-built bowls to glazed mugs and decorative platters — every piece is made from raw clay, shaped on the potter's wheel, and fired in our kiln to create something truly one of a kind.
                </p>
                <p>
                  Our studio was born from a deep love for the ancient craft of ceramics, and everything we make carries that passion. No two pieces are identical. Each one holds the fingerprints of its maker — imperfect, honest, and full of life. We also offer pottery classes for those who wish to experience the meditative joy of working with clay firsthand. Clay remembers every hand that has ever touched it. At Earthen Touch, we pour that memory into every piece we make — so that when it finds its place in your home, it carries not just beauty, but meaning. This is not just our craft — it is our calling.
                </p>
              </div>
            </motion.div>

            {/* Bottom: Horizontal image below the text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="aspect-[16/9] overflow-hidden max-w-xl mx-auto md:mx-0 md:-ml-12 md:mt-12 group will-change-transform"
            >
              <img 
                src="https://images.pexels.com/photos/35669377/pexels-photo-35669377.jpeg" 
                alt="Pottery collection" 
                className="w-full h-full object-cover gpu-accelerated"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width="576"
                height="324"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
