import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Classes", href: "#classes" },
  { name: "Collection", href: "#collection" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 1.0, rootMargin: "0px 0px 0px 0px" }
    );

    const topElement = document.createElement("div");
    topElement.style.position = "absolute";
    topElement.style.top = "0";
    topElement.style.height = "1px";
    topElement.style.width = "1px";
    document.body.prepend(topElement);
    
    observer.observe(topElement);

    return () => {
      observer.disconnect();
      topElement.remove();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-cream/80 backdrop-blur-md py-4 border-b border-border" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-heading font-medium tracking-tight text-charcoal">
          EARTHEN TOUCH
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-charcoal/70 hover:text-gold transition-colors elegant-underline"
            >
              {link.name}
            </a>
          ))}
          <Button variant="ghost" size="icon" className="text-charcoal hover:text-gold">
            <ShoppingBag className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-charcoal">
            <ShoppingBag className="w-5 h-5" />
          </Button>
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="text-charcoal"><Menu className="w-6 h-6" /></Button>} />
            <SheetContent side="right" className="bg-cream border-l border-border w-[300px]">
              <div className="flex flex-col space-y-8 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xl font-heading text-charcoal hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
