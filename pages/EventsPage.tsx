
import React, { useState } from 'react';
import { EventItem } from '../types';
import { Calendar, Search, MapPin, Clock, ExternalLink } from 'lucide-react';

interface EventsPageProps {
  events: EventItem[];
}

const EventsPage: React.FC<EventsPageProps> = ({ events }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter(e => 
    e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-5xl md:text-6xl mb-4">Garden Events</h1>
            <p className="text-gray-600 font-light italic">Curated gatherings, wine education, and seasonal celebrations.</p>
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search events..."
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#4a0e0e]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredEvents.map(event => (
            <div key={event.id} className="group flex flex-col h-full bg-[#f9f7f2] border border-gray-100 rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center space-x-2 text-[#8c7851] text-xs uppercase tracking-[0.2em] mb-4">
                  <Calendar size={14} />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <h2 className="text-2xl serif mb-4 group-hover:text-[#4a0e0e] transition-colors">{event.title}</h2>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-500 text-sm italic font-light">
                    <Clock size={14} className="mr-2" />
                    <span>Doors at {event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm italic font-light">
                    <MapPin size={14} className="mr-2" />
                    <span>Lenoir Wine Garden</span>
                  </div>
                </div>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-8 flex-grow">
                  {event.description}
                </p>
                <a 
                  href={event.rsvpLink}
                  target="_blank"
                  className="mt-auto inline-flex items-center justify-center space-x-2 bg-[#4a0e0e] text-white py-3 tracking-widest uppercase text-xs hover:bg-[#2a0808] transition-all"
                >
                  <span>RSVP & TICKETS</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
          
          {/* Calendar Placeholder Card */}
          <div className="border-2 border-dashed border-gray-200 p-8 flex flex-col items-center justify-center text-center opacity-60">
            <Calendar size={48} className="text-gray-300 mb-4" />
            <h3 className="serif text-xl">More to Come</h3>
            <p className="text-sm italic font-light">Check back soon for our full Spring programming announcement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
