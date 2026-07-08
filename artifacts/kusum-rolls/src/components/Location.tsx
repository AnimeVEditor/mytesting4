import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-6xl md:text-8xl text-white uppercase"
          >
            Find <span className="text-secondary">Us</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-card rounded-sm overflow-hidden border border-white/5 shadow-2xl">
          
          {/* Contact Details */}
          <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center">
            
            <h3 className="font-display text-4xl text-primary mb-8 tracking-wider">Kusum Rolls</h3>
            
            <div className="space-y-8">
              <a 
                href="https://www.google.com/maps/place/KUSUM+ROLLS+FLAVOURS+OF+PARK+STREET/@22.634274,88.4529524,16.67z"
                target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="bg-white/5 p-3 rounded-sm group-hover:bg-primary/20 transition-colors shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white/90 leading-relaxed group-hover:text-primary transition-colors">
                    Q House, 350 Rajarhat Main Road,<br/>
                    Near Mio Amore Cake Shop,<br/>
                    Salua, Kalipark, Bablatala,<br/>
                    Kolkata, West Bengal
                  </p>
                </div>
              </a>

              <a 
                href="tel:+917980151647"
                className="flex items-start gap-4 group"
              >
                <div className="bg-white/5 p-3 rounded-sm group-hover:bg-primary/20 transition-colors shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-white/90 text-xl font-medium group-hover:text-primary transition-colors">
                    +91 79801 51647
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-sm shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-1">Opening Hours</p>
                  <p className="text-white/90 font-medium">
                    Mon—Sun<br/>
                    11:00 AM — 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.google.com/maps/place/KUSUM+ROLLS+FLAVOURS+OF+PARK+STREET/@22.634274,88.4529524,16.67z"
                target="_blank" rel="noopener noreferrer"
                className="flex-1 py-4 px-6 bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-colors duration-300 text-center flex items-center justify-center gap-2 text-sm"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
              <a 
                href="https://www.google.com/maps/place/KUSUM+ROLLS+FLAVOURS+OF+PARK+STREET/@22.634274,88.4529524,16.67z"
                target="_blank" rel="noopener noreferrer"
                className="flex-1 py-4 px-6 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-colors duration-300 text-center flex items-center justify-center gap-2 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Open in Maps
              </a>
            </div>
            
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-3 min-h-[400px] lg:min-h-full bg-muted grayscale-[50%] contrast-125 hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.4!2d88.4529524!3d22.634274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f30a23bd48f%3A0xe0bef3d7f9a31b7c!2sKUSUM%20ROLLS%20FLAVOURS%20OF%20PARK%20STREET!5e0!3m2!1sen!2sin!4v1" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Kusum Rolls Location Map"
            />
          </div>

        </div>
      </div>
    </section>
  );
}