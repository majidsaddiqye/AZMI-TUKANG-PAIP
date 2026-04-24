"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <div>
            <span className="text-brand-gold font-bold text-sm uppercase tracking-[0.3em] block mb-4">Get In Touch</span>
            <h2 className="font-outfit font-black text-4xl md:text-5xl text-brand-navy tracking-tighter mb-8">
              Ready to Fix It? <br /> Request a Free Quote
            </h2>
            <p className="text-brand-slate text-lg mb-12 max-w-md font-medium">
              Call us directly for emergency services or fill out the form for a same-day response on routine plumbing.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-brand-gold shadow-lg shadow-brand-gold/5 group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-brand-slate text-xs font-bold uppercase tracking-widest mb-1">Emergency Phone</div>
                  <a href="tel:+601114198688" className="text-xl font-black text-brand-navy hover:text-brand-gold transition-colors">+60 111-419 8688</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-brand-gold shadow-lg shadow-brand-gold/5 group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-brand-slate text-xs font-bold uppercase tracking-widest mb-1">Email Inquiry</div>
                  <div className="text-xl font-black text-brand-navy">service@azmiplumbing.com</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-brand-gold shadow-lg shadow-brand-gold/5 group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-brand-slate text-xs font-bold uppercase tracking-widest mb-1">Service Area</div>
                  <div className="text-xl font-black text-brand-navy leading-tight">
                    Kota Kinabalu, Sabah <br />
                    <span className="text-sm font-bold text-brand-slate opacity-70">Lot 51, Lorong Bukit Pulutan</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-brand-gold shadow-lg shadow-brand-gold/5 group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-brand-slate text-xs font-bold uppercase tracking-widest mb-1">Operation Hours</div>
                  <div className="text-xl font-black text-brand-navy">24 / 7 — We Never Close</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-6 sm:p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-brand-navy/5 border border-slate-100">
            {submitted ? (
              <div className="text-center py-12 animate-in zoom-in duration-500">
                <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="font-outfit font-black text-3xl text-brand-navy mb-4">Request Sent!</h3>
                <p className="text-brand-slate font-medium text-lg">
                  Azmi will contact you within 60 minutes. <br /> For faster service, call us directly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-gold font-bold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-slate">Full Name</label>
                    <input required type="text" placeholder="Ahmad bin Ali" className="w-full bg-brand-light border-transparent focus:border-brand-gold focus:ring-0 rounded-2xl px-6 py-4 font-bold text-brand-navy transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-slate">Phone Number</label>
                    <input required type="tel" placeholder="+60 1x-xxx xxxx" className="w-full bg-brand-light border-transparent focus:border-brand-gold focus:ring-0 rounded-2xl px-6 py-4 font-bold text-brand-navy transition-all" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-slate">Service Required</label>
                  <select className="w-full bg-brand-light border-transparent focus:border-brand-gold focus:ring-0 rounded-2xl px-6 py-4 font-bold text-brand-navy transition-all appearance-none cursor-pointer">
                    <option>Emergency Leak Repair</option>
                    <option>Water Heater Service</option>
                    <option>Bathroom Installation</option>
                    <option>Drain Unblocking</option>
                    <option>General Inspection</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-slate">Problem Description</label>
                  <textarea rows={4} placeholder="Briefly describe what needs fixing..." className="w-full bg-brand-light border-transparent focus:border-brand-gold focus:ring-0 rounded-2xl px-6 py-4 font-bold text-brand-navy transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-navy text-white py-6 rounded-2xl font-black text-lg hover:bg-brand-blue transition-all shadow-xl shadow-brand-navy/20 active:scale-95"
                >
                  GET FREE QUOTE NOW
                </button>
                <p className="text-center text-xs font-bold text-brand-slate uppercase tracking-widest opacity-50">
                  ⚡ Guaranteed 60-Minute Response
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
