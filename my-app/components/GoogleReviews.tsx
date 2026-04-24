"use client";

import Script from "next/script";

export default function GoogleReviews() {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold text-sm uppercase tracking-[0.3em] block mb-4">Live Social Proof</span>
          <h2 className="font-outfit font-black text-4xl md:text-5xl text-brand-navy tracking-tighter mb-6 uppercase">
            What Our Clients Say <br className="hidden sm:block" /> On Google
          </h2>
          <p className="text-brand-slate max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Real reviews, real photos, and real results. We take pride in maintaining a near-perfect rating across Sabah.
          </p>
        </div>

        {/* Elfsight Widget Container */}
        <div className="min-h-[400px] w-full bg-slate-50 rounded-[3rem] p-4 sm:p-8 border border-slate-100 shadow-inner">
          <Script 
            src="https://elfsightcdn.com/platform.js" 
            strategy="afterInteractive"
          />
          <div 
            className="elfsight-app-f239f1ca-5519-4967-b551-bc9e900b72ce" 
            data-elfsight-app-lazy 
          />
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps/search/Azmi+Tukang+Paip+Kota+Kinabalu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-gold transition-colors text-sm uppercase tracking-widest"
          >
            View All Reviews On Google Maps
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
