import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-sm uppercase tracking-widest text-gold mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-heading text-charcoal mb-8">Visit Our <span className="italic">Studio</span></h2>
            <p className="text-charcoal/60 font-light mb-12 max-w-md">
              Have questions about our classes or custom orders? We'd love to hear from you. Stop by our studio.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-charcoal mb-2">Location</h4>
                  <p className="text-charcoal/60 font-light">Nagpur, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-charcoal mb-2">Phone</h4>
                  <p className="text-charcoal/60 font-light">+91 9756841235</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-charcoal mb-2">Email</h4>
                  <p className="text-charcoal/60 font-light">hello@earthentouch.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6 justify-center md:justify-start">
              <a href="#" className="text-charcoal/40 hover:text-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-charcoal/40 hover:text-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
