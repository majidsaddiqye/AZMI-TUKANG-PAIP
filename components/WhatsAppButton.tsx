import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/601114198688?text=Hello%20Azmi!%20I%20need%20a%20professional%20plumber%20for..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-60 bg-[#25D366] text-white p-4 sm:p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute right-full mr-4 bg-white text-brand-navy px-4 py-2 rounded-xl text-sm font-black whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
        Need Help? Chat Now!
      </div>
      <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 fill-white" />
    </a>
  );
}
