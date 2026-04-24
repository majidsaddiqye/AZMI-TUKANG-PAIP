import { Wrench, Mail, Phone, MapPin, Globe, Camera, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-gold p-2 rounded-lg">
                <Wrench className="w-6 h-6 text-brand-navy" />
              </div>
              <span className="font-outfit font-black text-2xl tracking-tighter">
                AZMI TUKANG PAIP
              </span>
            </div>
            <p className="text-brand-slate font-medium leading-relaxed mb-8">
              Sabah&apos;s most trusted plumbing service. Providing precision engineering and 24/7 reliability for over 15 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all"><Globe className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all"><Camera className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all"><Send className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-outfit font-black text-lg mb-8 uppercase tracking-widest text-brand-gold">Our Services</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-brand-slate hover:text-white transition-colors">Emergency Leak Repair</Link></li>
              <li><Link href="#services" className="text-brand-slate hover:text-white transition-colors">Water Heater Service</Link></li>
              <li><Link href="#services" className="text-brand-slate hover:text-white transition-colors">Bathroom Installations</Link></li>
              <li><Link href="#services" className="text-brand-slate hover:text-white transition-colors">Drain Unblocking</Link></li>
              <li><Link href="#services" className="text-brand-slate hover:text-white transition-colors">Pipe Replacement</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-outfit font-black text-lg mb-8 uppercase tracking-widest text-brand-gold">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#why-us" className="text-brand-slate hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="#testimonials" className="text-brand-slate hover:text-white transition-colors">Customer Reviews</Link></li>
              <li><Link href="#contact" className="text-brand-slate hover:text-white transition-colors">Request a Quote</Link></li>
              <li><Link href="#" className="text-brand-slate hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-brand-slate hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-outfit font-black text-lg mb-8 uppercase tracking-widest text-brand-gold">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <a href="tel:+601114198688" className="text-brand-slate hover:text-white transition-colors font-bold">+60 111-419 8688</a>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <span className="text-brand-slate font-bold">service@azmiplumbing.com</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <span className="text-brand-slate font-bold">
                  Lot 51, Lorong Bukit Pulutan, <br />
                  88450 Kota Kinabalu, Sabah
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-slate text-sm font-bold uppercase tracking-widest">
            © 2026 AZMI TUKANG PAIP. ALL RIGHTS RESERVED.
          </p>
          <p className="text-brand-slate text-sm font-bold uppercase tracking-widest">
            Licensed Plumbing Contractor · Kota Kinabalu, Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
