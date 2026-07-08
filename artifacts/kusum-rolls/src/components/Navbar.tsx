import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Smooth scroll to element
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80; // Account for navbar height
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-4 bg-background/80 backdrop-blur-md border-b border-white/5 shadow-lg' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-3xl md:text-4xl font-display text-primary tracking-wider"
          >
            KUSUM ROLLS
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-widest font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col h-screen"
          >
            <div className="flex flex-col space-y-6 text-center mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-display tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="mt-auto pb-12 flex flex-col items-center gap-4">
              <a 
                href="tel:+917980151647" 
                className="w-full max-w-xs text-center py-4 rounded-full border border-primary text-primary font-bold uppercase tracking-wider"
              >
                Call Now
              </a>
              <a 
                href="https://wa.me/917980151647?text=Hello%20Kusum%20Rolls%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20place%20an%20order." 
                target="_blank" rel="noopener noreferrer"
                className="w-full max-w-xs text-center py-4 rounded-full bg-[#25D366] text-white font-bold uppercase tracking-wider"
              >
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}