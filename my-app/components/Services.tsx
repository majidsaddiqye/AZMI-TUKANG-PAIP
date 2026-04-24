import { Droplets, Flame, Bath, Search, Pipette, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Emergency Leak Repair",
      desc: "Fast identification and surgical repair of hidden leaks in walls, floors, and ceilings. We stop the damage before it stops you.",
      icon: <Droplets className="w-8 h-8" />,
    },
    {
      title: "Bathroom Installations",
      desc: "Full luxury bathroom setups. From high-pressure showers to custom fixtures, we handle the engineering so you can enjoy the comfort.",
      icon: <Bath className="w-8 h-8" />,
    },
    {
      title: "Water Heater Mastery",
      desc: "Expert installation and repair of gas and electric systems. We ensure your home has consistent, safe, and efficient hot water.",
      icon: <Flame className="w-8 h-8" />,
    },
    {
      title: "Precision Pipework",
      desc: "Complete re-piping and new installations using modern copper and high-durability PVC. Built to last a lifetime.",
      icon: <Pipette className="w-8 h-8" />,
    },
    {
      title: "Sewer & Drain Clearing",
      desc: "Advanced hydro-jetting and mechanical clearing for the most stubborn blockages. Clean pipes, zero stress.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Professional Inspection",
      desc: "Comprehensive diagnostic checks for homes and businesses. Identify issues before they become expensive emergencies.",
      icon: <Search className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-brand-gold font-bold text-[10px] sm:text-xs uppercase tracking-[0.4em] block mb-4">What We Do</span>
          <h2 className="font-outfit font-black text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tighter mb-6 uppercase leading-none">
            World-Class Plumbing <br className="hidden sm:block" /> Solutions
          </h2>
          <p className="text-brand-slate max-w-xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
            Every job is executed to international engineering standards. Whether it&apos;s a residential repair or a commercial overhaul, we deliver excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {services.map((svc, i) => (
            <div 
              key={i} 
              className="group p-6 sm:p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-gold/50 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] bg-brand-light/40"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center text-brand-gold mb-8 shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                {svc.icon}
              </div>
              <h3 className="font-outfit font-black text-xl text-brand-navy mb-4 uppercase tracking-tight">
                {svc.title}
              </h3>
              <p className="text-brand-slate leading-relaxed font-medium text-sm sm:text-base">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
