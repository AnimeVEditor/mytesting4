import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

import heroImg from '../assets/hero-roll.jpg';
import kitchenImg from '../assets/gallery-kitchen.jpg';
import chickenRollImg from '../assets/chicken-roll.jpg';
import eggRollImg from '../assets/egg-roll.jpg';
import paneerRollImg from '../assets/paneer-roll.jpg';
import kebabImg from '../assets/chicken-kebab.jpg';
import vegRollImg from '../assets/veg-roll.jpg';

const images = [
  { src: heroImg, alt: "Freshly made rolls on tawa", aspect: "aspect-square" },
  { src: chickenRollImg, alt: "Chicken Kathi Roll", aspect: "aspect-[3/4]" },
  { src: kebabImg, alt: "Charcoal Grilled Kebabs", aspect: "aspect-[4/3]" },
  { src: kitchenImg, alt: "Busy Kitchen Action", aspect: "aspect-[4/3]" },
  { src: eggRollImg, alt: "Classic Egg Roll", aspect: "aspect-square" },
  { src: paneerRollImg, alt: "Paneer Tikka Roll", aspect: "aspect-[3/4]" },
  { src: vegRollImg, alt: "Vegetable Roll", aspect: "aspect-[4/3]" }
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-6xl md:text-8xl text-white"
          >
            THE <span className="text-secondary">GALLERY</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-2 bg-primary mt-4"
          />
        </div>

        {/* Masonry-style Grid (CSS columns) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm bg-card mb-4"
              onClick={() => openLightbox(idx)}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-primary text-black p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-black/50 hover:bg-primary hover:text-black p-3 rounded-full transition-all z-50"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>

            {/* Nav Prev */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/50 p-4 rounded-full transition-all z-50"
              onClick={prevImage}
            >
              <ChevronLeft size={32} />
            </button>

            {/* Image */}
            <motion.img 
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Nav Next */}
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/50 p-4 rounded-full transition-all z-50"
              onClick={nextImage}
            >
              <ChevronRight size={32} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-display tracking-widest text-xl">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}