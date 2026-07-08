import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col">
            <h2 className="font-display text-5xl text-primary tracking-wider mb-4">
              KUSUM ROLLS
            </h2>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              Legendary Kolkata kathi rolls, freshly grilled and packed with authentic flavours. Fast, fresh, and uncompromising on taste.
            </p>
            
            <div className="flex gap-4">
              <a href="tel:+917980151647" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-black transition-colors">
                <Phone size={18} />
              </a>
              <a href="https://wa.me/917980151647" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#25D366] hover:text-white transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="https://www.google.com/maps/place/KUSUM+ROLLS+FLAVOURS+OF+PARK+STREET/@22.634274,88.4529524,16.67z" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-secondary hover:text-white transition-colors">
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="font-bold text-white uppercase tracking-widest text-sm mb-6 border-l-2 border-primary pl-3">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Gallery', 'Reviews', 'Location'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/60 hover:text-primary transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-5 lg:col-span-4">
            <h3 className="font-bold text-white uppercase tracking-widest text-sm mb-6 border-l-2 border-secondary pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 w-5 h-5 mt-0.5" />
                <span className="text-white/70 leading-relaxed">
                  Q House, 350 Rajarhat Main Road,<br />
                  Near Mio Amore, Salua, Kalipark,<br />
                  Kolkata, West Bengal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0 w-5 h-5" />
                <a href="tel:+917980151647" className="text-white/70 hover:text-white transition-colors">
                  +91 79801 51647
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-primary shrink-0 w-5 h-5" />
                <a href="https://wa.me/917980151647" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  Order via WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Kusum Rolls – Flavours of Park Street.
          </p>
          <p className="text-white/20 text-[10px] max-w-md">
            This is an unofficial concept website created using publicly available information for demonstration purposes only and is not officially affiliated with Kusum Rolls Flavours of Park Street.
          </p>
        </div>

      </div>
    </footer>
  );
}