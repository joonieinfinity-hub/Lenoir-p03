
import React, { useState, useEffect } from 'react';
import { SiteContent, Testimonial, EventItem, MenuItem } from '../types';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, ArrowRight } from 'lucide-react';

interface HomeProps {
  content: SiteContent;
  testimonials: Testimonial[];
  events: EventItem[];
  menuItems: MenuItem[];
}

const Home: React.FC<HomeProps> = ({ content, testimonials, events, menuItems }) => {
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % content.hero.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [content.hero.images.length]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {content.hero.images.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === activeHero ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={img} alt="Restaurant ambiance" className="w-full h-full object-cover scale-105" />
          </div>
        ))}

        <div className="relative z-20 max-w-4xl px-6">
          <h1 className="text-4xl md:text-7xl text-white mb-6 tracking-tight animate-fade-in-up">
            {content.hero.headline}
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto leading-relaxed italic">
            {content.hero.subheadline}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="https://resy.com"
              className="bg-[#4a0e0e] text-white px-8 py-4 rounded-sm text-sm uppercase tracking-widest hover:bg-white hover:text-[#4a0e0e] transition-all w-full md:w-auto"
            >
              Reserve a Table
            </a>
            <Link
              to="/menu"
              className="bg-white text-[#1a1a1a] px-8 py-4 rounded-sm text-sm uppercase tracking-widest hover:bg-[#4a0e0e] hover:text-white transition-all w-full md:w-auto"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Peek */}
      <section className="py-24 px-6 bg-[#f9f7f2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/plating/800/1000" 
              alt="Artisan Plating" 
              className="rounded-sm shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#8c7851] -z-1" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">{content.about.title}</h2>
            <p className="text-lg text-gray-700 leading-loose mb-10 font-light">
              {content.about.philosophy}
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-[#4a0e0e] border-b border-[#4a0e0e] pb-1 tracking-widest hover:text-[#8c7851] hover:border-[#8c7851] transition-all"
            >
              OUR STORY <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#8c7851] uppercase tracking-[0.2em] text-sm">Cuisine</span>
              <h2 className="text-4xl mt-2">Seasonal Highlights</h2>
            </div>
            <Link to="/menu" className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-[#4a0e0e]">
              <span>View Full Menu</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.slice(0, 3).map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="overflow-hidden mb-4 aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl serif mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm font-light italic">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Banner */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Unforgettable Evenings</h2>
          <p className="max-w-2xl text-gray-400 mb-12 font-light italic">From wine education classes to seasonal communal dinners, there's always something special happening in our garden.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {events.map((event) => (
              <div key={event.id} className="bg-zinc-900 border border-zinc-800 p-8 text-left hover:border-[#8c7851] transition-all">
                <span className="text-[#8c7851] text-sm tracking-widest">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <h3 className="text-2xl mt-2 mb-4 serif">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{event.description}</p>
                <Link to="/events" className="text-sm border-b border-white pb-1 tracking-widest hover:text-[#8c7851] hover:border-[#8c7851]">LEARN MORE</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#f9f7f2]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-1 mb-8">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="#8c7851" color="#8c7851" />)}
          </div>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-light italic leading-relaxed text-[#4a0e0e]">
              "{testimonials[0].text}"
            </h2>
            <p className="mt-8 uppercase tracking-[0.3em] text-sm text-gray-500">— {testimonials[0].name}</p>
          </div>
        </div>
      </section>

      {/* Instagram Integration - Mock */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl serif mb-2">Live from the Garden</h2>
            <p className="text-gray-500">Follow us <a href="#" className="text-[#4a0e0e] underline">@lenoir_austin</a></p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-gray-100 overflow-hidden">
                <img src={`https://picsum.photos/seed/insta${i}/500/500`} alt="Instagram Feed" className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3446.463133857597!2d-97.7554972234907!3d30.251996574820124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b4e724a30e8f%3A0x6790938479e37782!2sLenoir!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 p-8 shadow-2xl max-w-sm text-center">
          <h3 className="serif text-xl mb-2">Find Us</h3>
          <p className="text-sm text-gray-600 mb-6">{content.location.address}</p>
          <a 
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(content.location.address)}`}
            target="_blank"
            className="text-xs uppercase tracking-widest bg-[#4a0e0e] text-white px-6 py-3 block"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
