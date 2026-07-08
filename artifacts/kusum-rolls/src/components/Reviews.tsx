import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { reviews } from '../data/reviews';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="reviews" className="py-24 bg-card relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#F5C518_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl text-white uppercase tracking-wide leading-none"
            >
              What Our<br/>
              <span className="text-primary">Customers Say</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-background p-6 border-l-4 border-primary rounded-sm shadow-xl"
          >
            <div className="text-right">
              <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-1">Overall Rating</p>
              <div className="flex text-primary gap-1 justify-end">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-5 h-5 ${i === 5 ? 'fill-primary/30' : 'fill-primary'}`} />
                ))}
              </div>
            </div>
            <div className="font-display text-7xl text-primary leading-none">
              4.4
            </div>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {reviews.map((review, idx) => (
                <div key={review.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-background border border-white/5 p-8 h-full flex flex-col relative rounded-sm"
                  >
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                    
                    <div className="flex text-primary mb-6 gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary" />
                      ))}
                    </div>
                    
                    <p className="text-white/80 text-lg leading-relaxed flex-grow font-light mb-8">
                      "{review.text}"
                    </p>
                    
                    <div className="mt-auto border-t border-white/10 pt-4 flex justify-between items-center">
                      <span className="font-display text-2xl text-white tracking-wider">{review.name}</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-secondary px-2 py-1 bg-secondary/10 rounded-sm">
                        {review.category}
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}