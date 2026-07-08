import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../data/menuItems';
import { MessageCircle } from 'lucide-react';

export default function MenuCard({ item, index }: { item: MenuItem, index: number }) {
  const handleOrder = () => {
    const message = encodeURIComponent(`Hello Kusum Rolls, I'd like to order: ${item.name} (₹${item.price})`);
    window.open(`https://wa.me/917980151647?text=${message}`, '_blank');
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -10 }}
      className="bg-background border border-white/5 rounded-sm overflow-hidden group flex flex-col h-full shadow-lg relative hover:shadow-[0_0_30px_rgba(232,97,10,0.15)] hover:border-secondary/30 transition-all duration-300"
    >
      {/* Badge */}
      {item.badge && (
        <div className="absolute top-4 right-4 z-10 bg-destructive text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-lg">
          {item.badge}
        </div>
      )}

      {/* Image Area */}
      {item.image ? (
        <div className="aspect-[4/3] w-full overflow-hidden relative">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] w-full bg-card flex items-center justify-center border-b border-white/5">
          <div className="font-display text-6xl text-white/5 opacity-50 select-none">
            KUSUM ROLLS
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="font-display text-3xl text-white leading-none group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="font-display text-3xl text-secondary leading-none shrink-0">
            ₹{item.price}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {item.description}
        </p>

        <button 
          onClick={handleOrder}
          className="w-full py-3 px-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white rounded-sm font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-auto"
        >
          <MessageCircle className="w-4 h-4" />
          Order Now
        </button>
      </div>
    </motion.div>
  );
}