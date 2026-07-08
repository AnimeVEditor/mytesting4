import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, menuItems } from '../data/menuItems';
import MenuCard from './MenuCard';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold uppercase tracking-[0.3em] text-sm"
          >
            Sizzling Hot
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-6xl md:text-8xl text-primary mt-2"
          >
            OUR MENU
          </motion.h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(245,197,24,0.4)]' 
                  : 'bg-background border border-white/10 text-white/70 hover:text-white hover:border-primary/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-white/60 mb-6 font-medium">Craving something specific? We customize on request.</p>
          <a 
            href="https://wa.me/917980151647?text=Hello%20Kusum%20Rolls%2C%20I%20would%20like%20to%20see%20the%20full%20menu."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-widest rounded-sm transition-all duration-300"
          >
            Get Full Menu on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}