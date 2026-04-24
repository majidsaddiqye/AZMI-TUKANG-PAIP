import { PhoneCall } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="bg-brand-gold text-brand-navy py-2 px-4 text-center font-bold text-[10px] sm:text-sm uppercase tracking-widest flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
      <div className="flex items-center gap-1.5">
        <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
        <span>24/7 EMERGENCY PLUMBING</span>
      </div>
      <span className="hidden sm:inline opacity-50">|</span>
      <a href="tel:+601114198688" className="hover:underline transition-all flex items-center gap-1">
        <span className="sm:hidden">CALL:</span> +60 111-419 8688
      </a>
    </div>
  );
}
