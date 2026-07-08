import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <a 
        href="tel:+917980151647"
        className="w-14 h-14 bg-primary text-black rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(245,197,24,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative group"
        aria-label="Call Us"
      >
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
        <Phone className="w-6 h-6 fill-black/10" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold uppercase tracking-widest px-3 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/917980151647?text=Hello%20Kusum%20Rolls%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20place%20an%20order."
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative group"
        aria-label="Order on WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }} />
        <MessageCircle className="w-7 h-7 fill-white/20" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-[#25D366] text-xs font-bold uppercase tracking-widest px-3 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-[#25D366]/30">
          Order on WhatsApp
        </span>
      </a>
    </div>
  );
}