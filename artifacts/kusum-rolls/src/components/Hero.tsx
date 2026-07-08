import React from 'react';
import { motion, type Variants } from 'framer-motion';
import heroImg from '../assets/hero-roll.jpg';
import { Star } from 'lucide-react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with heat shimmer effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Kusum Rolls Hero" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Heat shimmer / smoke animation layer (CSS driven) */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDBweCIgaGVpZ2h0PSI0MDBweCI+PGZpbHRlciBpZD0ibm9pc2UiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjk1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20 pointer-events-none mix-blend-overlay animate-[pulse_4s_ease-in-out_infinite]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center mt-10"
      >
        {/* Review Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 mb-8 overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm font-medium tracking-wide text-white">4.4 Google Rating · 100+ Reviews</span>
        </motion.div>

        {/* Headlines */}
        <motion.h1 
          variants={itemVariants}
          className="font-display text-primary text-[clamp(4rem,10vw,9rem)] leading-[0.85] tracking-tight mb-6 uppercase"
          style={{ textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}
        >
          Kolkata's Favourite<br />
          <span className="text-white">Roll Experience</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-2xl text-white/90 max-w-2xl font-light mb-12 tracking-wide"
        >
          Freshly Rolled <span className="text-secondary mx-2">•</span> Perfectly Grilled <span className="text-secondary mx-2">•</span> Packed with Authentic Flavour
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 w-full max-w-4xl"
        >
          <a 
            href="#menu" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(245,197,24,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Explore Menu
          </a>
          
          <a 
            href="https://wa.me/917980151647?text=Hello%20Kusum%20Rolls%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20place%20an%20order."
            target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-bold uppercase tracking-widest rounded-sm hover:bg-[#20b858] transition-colors duration-300"
          >
            Order on WhatsApp
          </a>

          <a 
            href="tel:+917980151647" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-primary/50 text-primary font-bold uppercase tracking-widest rounded-sm hover:bg-primary/10 transition-colors duration-300"
          >
            Call Now
          </a>

          <a 
            href="https://www.google.com/maps/place/KUSUM+ROLLS+FLAVOURS+OF+PARK+STREET/@22.634274,88.4529524,16.67z"
            target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-colors duration-300"
          >
            Get Directions
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}