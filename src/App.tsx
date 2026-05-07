/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Collection from "@/components/Collection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/30 selection:text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Classes />
        <Collection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
