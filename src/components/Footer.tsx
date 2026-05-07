export default function Footer() {
  return (
    <footer className="py-16 bg-cream border-t border-charcoal/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-heading font-medium tracking-tight text-charcoal">
            EARTHEN TOUCH
          </div>
          
          <div className="flex gap-10">
            {["Privacy Policy", "Terms of Service", "Shipping & Returns", "FAQ"].map((link) => (
              <a key={link} href="#" className="text-[10px] uppercase tracking-widest text-charcoal/40 hover:text-gold transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="text-[10px] uppercase tracking-widest text-charcoal/40">
            © {new Date().getFullYear()} Earthen Touch Pottery. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
