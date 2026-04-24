"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Clock, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden premium-gradient pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              24/7 Emergency Service • Kota Kinabalu
            </div>
            
            <h1 className="font-outfit font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] sm:leading-[0.95] mb-6 tracking-tighter uppercase">
              Sabah&apos;s Premier <br />
              <span className="text-brand-gold">Plumbing Experts</span>
            </h1>
            
            <p className="text-brand-slate text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              Don&apos;t let a leak drown your day. Join 500+ homeowners who trust <span className="text-white font-bold">AZMI TUKANG PAIP</span> for surgical-grade precision and world-class reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="tel:+601114198688"
                className="group bg-brand-gold hover:bg-brand-gold-dark text-brand-navy px-8 py-5 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-3 transition-all shadow-2xl shadow-brand-gold/20 active:scale-95"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                FREE QUOTE: CALL NOW
              </a>
              <a 
                href="#services"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-5 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
              >
                OUR SERVICES
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Trust Stats */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="bg-white/5 p-2 rounded-lg"><Star className="w-5 h-5 text-brand-gold fill-brand-gold" /></div>
                <div>
                  <div className="text-white font-black text-xl leading-none">4.9/5</div>
                  <div className="text-brand-slate text-[10px] uppercase font-bold tracking-widest mt-1">Google Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/5 p-2 rounded-lg"><Clock className="w-5 h-5 text-brand-gold" /></div>
                <div>
                  <div className="text-white font-black text-xl leading-none">&lt; 60m</div>
                  <div className="text-brand-slate text-[10px] uppercase font-bold tracking-widest mt-1">Response Time</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/5 p-2 rounded-lg"><ShieldCheck className="w-5 h-5 text-brand-gold" /></div>
                <div>
                  <div className="text-white font-black text-xl leading-none">100%</div>
                  <div className="text-brand-slate text-[10px] uppercase font-bold tracking-widest mt-1">Guaranteed</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-[0_0_100px_rgba(245,166,11,0.15)] transform rotate-3 hover:rotate-0 transition-all duration-700">
               {/* Note: In a real environment, I'd use the generated image path here */}
               <img 
                src="/premium-hero.png" 
                alt="Professional Plumber at Work"
                className="w-full h-auto object-cover aspect-4/5"
               />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-10 bg-white p-8 rounded-4xl shadow-2xl z-20 animate-bounce-slow">
              <div className="text-brand-navy font-black text-4xl mb-1 leading-none">15+</div>
              <div className="text-brand-slate text-xs font-black uppercase tracking-tighter">Years of Excellence</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
