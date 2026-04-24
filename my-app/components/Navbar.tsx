"use client";

import { useState, useEffect } from "react";
import { Wrench, Phone, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-3" : "bg-white/50 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-brand-gold p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Wrench className="w-6 h-6 text-brand-navy" />
            </div>
            <div className="flex flex-col">
              <span className="font-outfit font-black text-xl tracking-tighter text-brand-navy leading-none">
                AZMI TUKANG PAIP
              </span>
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">
                Professional Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-brand-navy/70 hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+601114198688"
              className="bg-brand-navy text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-brand-blue transition-all shadow-xl hover:shadow-brand-navy/20 active:scale-95"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              CALL NOW
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brand-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl absolute top-full left-0 right-0 shadow-2xl border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-xl font-bold text-brand-navy hover:text-brand-gold transition-colors tracking-tighter"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href="tel:+601114198688"
                className="flex items-center justify-center w-full bg-brand-gold text-brand-navy py-5 rounded-2xl font-black text-lg shadow-xl shadow-brand-gold/20"
              >
                <Phone className="w-5 h-5 mr-2" />
                EMERGENCY LINE
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
