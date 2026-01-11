
import React from 'react';
import { Wine, Info, CheckCircle2 } from 'lucide-react';

const WineClubPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Banner */}
      <div className="relative h-[60vh] flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img src="https://picsum.photos/seed/wineclub/1920/1080" className="absolute inset-0 w-full h-full object-cover" alt="Wine bottles" />
        <div className="relative z-20 px-6 max-w-4xl">
          <span className="uppercase tracking-[0.4em] text-sm mb-4 block">Curated Terroir</span>
          <h1 className="text-5xl md:text-7xl mb-6">Lenoir Wine Club</h1>
          <p className="text-lg md:text-xl font-light italic leading-relaxed max-w-2xl mx-auto">
            Bringing the restaurant's curated selections of small-production, low-intervention wines directly to your table.
          </p>
        </div>
      </div>

      {/* Tiers */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Tier 1 */}
          <div className="bg-[#f9f7f2] p-10 flex flex-col h-full border-t-4 border-[#8c7851]">
            <h3 className="text-2xl serif mb-4">The Garden Selection</h3>
            <p className="text-[#8c7851] text-3xl mb-6 tabular-nums">$65<span className="text-sm italic text-gray-500 font-light"> / month</span></p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <CheckCircle2 size={18} className="text-[#4a0e0e] flex-shrink-0 mt-0.5" />
                <span>2 hand-picked bottles of seasonal red, white, or orange wine.</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <CheckCircle2 size={18} className="text-[#4a0e0e] flex-shrink-0 mt-0.5" />
                <span>Winemaker stories and tasting notes for each selection.</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <CheckCircle2 size={18} className="text-[#4a0e0e] flex-shrink-0 mt-0.5" />
                <span>10% off any wine purchases in-restaurant.</span>
              </li>
            </ul>
            <button className="bg-[#4a0e0e] text-white py-3 tracking-widest uppercase text-xs hover:bg-[#2a0808]">JOIN CLUB</button>
          </div>

          {/* Tier 2 */}
          <div className="bg-white p-10 flex flex-col h-full border-t-4 border-[#4a0e0e] shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-[#4a0e0e] text-white px-4 py-1 text-[10px] tracking-widest uppercase">Most Popular</div>
            <h3 className="text-2xl serif mb-4">The Cellar Reserve</h3>
            <p className="text-[#4a0e0e] text-3xl mb-6 tabular-nums">$120<span className="text-sm italic text-gray-500 font-light"> / month</span></p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <CheckCircle2 size={18} className="text-[#4a0e0e] flex-shrink-0 mt-0.5" />
                <span>4 premium bottles, including rare finds and back-vintages.</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <CheckCircle2 size={18} className="text-[#4a0e0e] flex-shrink-0 mt-0.5" />
                <span>Priority booking for all wine-pairing dinners.</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <CheckCircle2 size={18} className="text-[#4a0e0e] flex-shrink-0 mt-0.5" />
                <span>15% off any wine purchases in-restaurant.</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <CheckCircle2 size={18} className="text-[#4a0e0e] flex-shrink-0 mt-0.5" />
                <span>Complimentary flight for two once per quarter.</span>
              </li>
            </ul>
            <button className="bg-[#4a0e0e] text-white py-3 tracking-widest uppercase text-xs hover:bg-[#2a0808]">JOIN CLUB</button>
          </div>

          {/* Custom / Corporate */}
          <div className="bg-[#f9f7f2] p-10 flex flex-col h-full border-t-4 border-zinc-400">
            <h3 className="text-2xl serif mb-4">The Sommelier's Circle</h3>
            <p className="text-gray-600 text-sm mb-6 font-light italic">Customized curations for dedicated collectors and corporate gifting.</p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <CheckCircle2 size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Personalized consultations with our Wine Director.</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <CheckCircle2 size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Access to allocated global rarities.</span>
              </li>
            </ul>
            <button className="border border-gray-400 text-gray-600 py-3 tracking-widest uppercase text-xs hover:bg-gray-100">ENQUIRE</button>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl serif mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f9f7f2] flex items-center justify-center mb-4">
                <span className="serif text-2xl text-[#4a0e0e]">1</span>
              </div>
              <h4 className="serif text-lg mb-2">Subscribe</h4>
              <p className="text-xs text-gray-500 font-light italic">Select your preferred tier above.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f9f7f2] flex items-center justify-center mb-4">
                <span className="serif text-2xl text-[#4a0e0e]">2</span>
              </div>
              <h4 className="serif text-lg mb-2">Curation</h4>
              <p className="text-xs text-gray-500 font-light italic">Our team hand-selects each bottle monthly.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f9f7f2] flex items-center justify-center mb-4">
                <span className="serif text-2xl text-[#4a0e0e]">3</span>
              </div>
              <h4 className="serif text-lg mb-2">Pickup/Delivery</h4>
              <p className="text-xs text-gray-500 font-light italic">Available for garden pickup on the 1st Tuesday.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f9f7f2] flex items-center justify-center mb-4">
                <span className="serif text-2xl text-[#4a0e0e]">4</span>
              </div>
              <h4 className="serif text-lg mb-2">Sip & Enjoy</h4>
              <p className="text-xs text-gray-500 font-light italic">Explore new regions and styles at home.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineClubPage;
