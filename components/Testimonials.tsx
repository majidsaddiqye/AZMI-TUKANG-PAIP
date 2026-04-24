import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Voon Keong",
      text: "Very good and responsible plumber. I highly recommend Azmi plumber to everyone who want to repair or install paip and house renovation as well. Thanks Azmi for your good service.",
      rating: 5,
      role: "Homeowner",
    },
    {
      name: "Amilya Dania",
      text: "Plumber did the work fast and really kind. Excellent work and easy to communicate. I AMMMM SATISFIEDDDDDDDDDD. SERVICE SANGAT BAGUSSS 👍🏻👍🏻👍🏻👍🏻",
      rating: 5,
      role: "Verified Customer",
    },
    {
      name: "Khairil Haikal",
      text: "Professional, fast response, very excellent customer service. Highly recommended. I gave them 5⭐!",
      rating: 5,
      role: "Local Guide",
    },
  ];

  return (
    <section id="testimonials" className="py-24 premium-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-brand-gold font-bold text-sm uppercase tracking-[0.3em] block mb-4">Customer Success</span>
            <h2 className="font-outfit font-black text-4xl md:text-5xl text-white tracking-tighter">
              Trusted by 500+ <br /> Sabah Residents
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-3xl backdrop-blur-xl">
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-brand-gold" />)}
            </div>
            <div className="text-white font-bold">4.9 / 5.0 Google Rating</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div 
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 sm:p-10 rounded-[3rem] relative hover:bg-white/10 transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />
              <div className="flex text-brand-gold mb-6">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-gold" />)}
              </div>
              <p className="text-brand-slate text-lg leading-relaxed mb-8 font-medium italic">
                &quot;{rev.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center font-black text-brand-navy">
                  {rev.name[0]}
                </div>
                <div>
                  <div className="text-white font-black">{rev.name}</div>
                  <div className="text-brand-gold/70 text-xs font-bold uppercase tracking-widest">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
