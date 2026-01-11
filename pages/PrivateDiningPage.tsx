
import React from 'react';
import { Mail, Phone, Users, Calendar, ArrowRight } from 'lucide-react';

const PrivateDiningPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/2">
            <span className="text-[#8c7851] uppercase tracking-[0.2em] text-sm mb-4 block">Gatherings</span>
            <h1 className="text-5xl md:text-7xl mb-8 leading-tight">Host Your Event</h1>
            <p className="text-lg text-gray-600 leading-relaxed font-light italic mb-8">
              From intimate rehearsal dinners to full-restaurant buyouts, Lenoir offers a magical backdrop for your most important celebrations.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#f9f7f2] flex items-center justify-center text-[#4a0e0e]">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Capacity</h4>
                  <p className="text-sm text-gray-500 italic">16 - 65 guests (Full Buyout)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#f9f7f2] flex items-center justify-center text-[#4a0e0e]">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Availability</h4>
                  <p className="text-sm text-gray-500 italic">Indoor Dining Room & Lush Wine Garden</p>
                </div>
              </div>
            </div>

            <button className="flex items-center space-x-2 text-[#4a0e0e] border-b border-[#4a0e0e] pb-1 tracking-widest hover:text-[#8c7851] hover:border-[#8c7851] transition-all">
              <span>DOWNLOAD PRIVATE EVENTS BROCHURE</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="w-full md:w-1/2 bg-[#f9f7f2] p-8 md:p-12 shadow-sm rounded-sm">
            <h3 className="text-2xl serif mb-8">Inquiry Form</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">First Name</label>
                  <input type="text" className="w-full bg-white border border-gray-100 p-3 rounded-sm outline-none focus:ring-1 focus:ring-[#4a0e0e]" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Last Name</label>
                  <input type="text" className="w-full bg-white border border-gray-100 p-3 rounded-sm outline-none focus:ring-1 focus:ring-[#4a0e0e]" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Event Date (Preferred)</label>
                <input type="date" className="w-full bg-white border border-gray-100 p-3 rounded-sm outline-none focus:ring-1 focus:ring-[#4a0e0e]" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Estimated Guest Count</label>
                <input type="number" className="w-full bg-white border border-gray-100 p-3 rounded-sm outline-none focus:ring-1 focus:ring-[#4a0e0e]" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Additional Notes</label>
                <textarea className="w-full bg-white border border-gray-100 p-3 h-32 rounded-sm outline-none focus:ring-1 focus:ring-[#4a0e0e]" placeholder="Allergies, specific themes, or special requests..." />
              </div>
              <button className="w-full bg-[#4a0e0e] text-white py-4 tracking-widest uppercase text-sm hover:bg-[#2a0808]">SUBMIT INQUIRY</button>
            </form>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src="https://picsum.photos/seed/event1/600/400" className="aspect-video object-cover" />
          <img src="https://picsum.photos/seed/event2/600/400" className="aspect-video object-cover" />
          <img src="https://picsum.photos/seed/event3/600/400" className="aspect-video object-cover" />
        </div>
      </div>
    </div>
  );
};

export default PrivateDiningPage;
