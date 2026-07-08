import React from 'react';
import { motion } from 'framer-motion';
import galleryImg from '../assets/gallery-kitchen.jpg';
import { Flame, CheckCircle2, IndianRupee, Zap, Package, Users } from 'lucide-react';

const badges = [
  { icon: Flame, text: "Fresh Ingredients", color: "text-secondary" },
  { icon: CheckCircle2, text: "Authentic Taste", color: "text-primary" },
  { icon: IndianRupee, text: "Pocket Friendly", color: "text-green-500" },
  { icon: Zap, text: "Quick Service", color: "text-accent" },
  { icon: Package, text: "Takeaway", color: "text-white" },
  { icon: Users, text: "Family Friendly", color: "text-primary" }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-card opacity-50 skew-x-[-15deg] translate-x-32 hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Story */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-display text-5xl md:text-7xl text-white mb-6 uppercase tracking-wider">
              The Soul of <span className="text-secondary">Kolkata</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded on the iconic food culture of Park Street, <strong className="text-primary font-medium">Kusum Rolls</strong> brings the soul of Kolkata's kathi roll tradition to every bite. 
              </p>
              <p>
                We use fresh, hand-rolled parathas, the finest spices, and age-old recipes. From the first crunch to the last bite, every roll is made to order and served piping hot. 
              </p>
              <p className="text-white font-medium italic border-l-4 border-primary pl-4 py-2 bg-white/5">
                No shortcuts. No compromise. Just pure, affordable flavour.
              </p>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
              {badges.map((badge, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 p-3 bg-card rounded-md border border-white/5"
                >
                  <badge.icon className={`w-5 h-5 ${badge.color}`} />
                  <span className="text-sm font-medium text-white/90">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm">
              <img 
                src={galleryImg} 
                alt="Kusum Rolls Kitchen" 
                className="w-full h-full object-cover grayscale-[30%] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-transparent to-transparent" />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-2 gap-6">
                <div className="bg-black/60 backdrop-blur-md p-6 border-l-4 border-primary">
                  <motion.h3 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl text-primary"
                  >
                    15+
                  </motion.h3>
                  <p className="text-white/80 font-medium uppercase tracking-wider text-sm mt-1">Years of Flavour</p>
                </div>
                
                <div className="bg-black/60 backdrop-blur-md p-6 border-l-4 border-secondary">
                  <motion.h3 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl text-secondary flex items-center gap-1"
                  >
                    4.4<Star className="w-8 h-8 fill-secondary mb-2" />
                  </motion.h3>
                  <p className="text-white/80 font-medium uppercase tracking-wider text-sm mt-1">Google Rating</p>
                </div>
              </div>
            </div>
            
            {/* Price Badge */}
            <motion.div 
              initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -top-6 -right-6 bg-destructive text-white w-32 h-32 rounded-full flex flex-col items-center justify-center border-4 border-background shadow-2xl rotate-12"
            >
              <span className="text-sm font-bold uppercase tracking-widest opacity-90">Price Range</span>
              <span className="font-display text-4xl mt-1 leading-none">₹1-200</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}