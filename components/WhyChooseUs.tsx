import { ShieldCheck, Award, ThumbsUp, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Licensed & Insured",
      desc: "Every technician is fully certified and our work is backed by comprehensive insurance. Zero risk, total peace of mind.",
      icon: <ShieldCheck className="w-10 h-10" />,
    },
    {
      title: "Upfront Pricing",
      desc: "No hidden fees. No surprise surcharges. We provide a surgical-grade quote before we start any work.",
      icon: <Award className="w-10 h-10" />,
    },
    {
      title: "60-Minute Response",
      desc: "Water damage doesn't wait. Our rapid-response units are stationed across Kota Kinabalu for emergency dispatch.",
      icon: <Zap className="w-10 h-10" />,
    },
    {
      title: "Satisfaction Guarantee",
      desc: "We don't leave until you're 100% satisfied. Our reputation is built on showing up and getting it done right.",
      icon: <ThumbsUp className="w-10 h-10" />,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="text-brand-gold font-bold text-sm uppercase tracking-[0.3em] block mb-4">The Azmi Standard</span>
              <h2 className="font-outfit font-black text-4xl md:text-5xl text-brand-navy tracking-tighter mb-8 leading-tight">
                Why Elite Homeowners <br /> Choose Us
              </h2>
              <p className="text-brand-slate text-lg font-medium leading-relaxed mb-12">
                We&apos;ve built our reputation on one thing: showing up on time and getting it done right the first time. In the plumbing world, precision is everything.
              </p>
              
              <div className="space-y-6">
                <div className="bg-brand-navy p-10 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/5">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 rounded-full -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-1000"></div>
                  <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center justify-between">
                    <div className="text-center md:text-left">
                      <div className="text-brand-gold font-black text-6xl mb-2 leading-none tracking-tighter uppercase">15+</div>
                      <div className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px]">Years Leadership</div>
                    </div>
                    <div className="hidden md:block h-16 w-px bg-white/10"></div>
                    <div className="text-center md:text-left">
                      <div className="text-brand-gold font-black text-6xl mb-2 leading-none tracking-tighter uppercase">5k+</div>
                      <div className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px]">Prime Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <div key={i} className="p-8 bg-brand-light rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
                <div className="text-brand-gold mb-6">{reason.icon}</div>
                <h3 className="font-outfit font-black text-xl text-brand-navy mb-3">{reason.title}</h3>
                <p className="text-brand-slate font-medium leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
