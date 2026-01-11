
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { SiteContent } from '../types';

interface FooterProps {
  content: SiteContent;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Contact */}
        <div>
          <h3 className="text-xl serif mb-6">Contact Us</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start space-x-3">
              <MapPin size={20} className="mt-1 flex-shrink-0" />
              <span>{content.location.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className="flex-shrink-0" />
              <span>{content.location.phone}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={20} className="flex-shrink-0" />
              <span>{content.location.email}</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-xl serif mb-6">Hours</h3>
          <ul className="space-y-2 text-gray-400">
            {Object.entries(content.location.hours).map(([day, hours]) => (
              <li key={day} className="flex justify-between">
                <span>{day}</span>
                <span>{hours}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl serif mb-6">Navigation</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#/menu" className="hover:text-white">Menu</a></li>
            <li><a href="#/wine-club" className="hover:text-white">Wine Club</a></li>
            <li><a href="#/events" className="hover:text-white">Events</a></li>
            <li><a href="#/private-dining" className="hover:text-white">Private Events</a></li>
            <li><a href="#/admin" className="hover:text-white text-xs opacity-50">Staff Login</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl serif mb-6">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">Join our community for seasonal updates and wine club releases.</p>
          <form className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Your email address"
              className="bg-zinc-800 border-none px-4 py-2 rounded-sm focus:ring-1 focus:ring-[#8c7851] outline-none"
            />
            <button className="bg-[#4a0e0e] text-white py-2 tracking-widest hover:bg-[#2a0808] transition-all">
              SUBSCRIBE
            </button>
          </form>
          <div className="flex space-x-4 mt-6">
            <Instagram className="cursor-pointer hover:text-[#8c7851]" />
            <Facebook className="cursor-pointer hover:text-[#8c7851]" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800 text-center text-gray-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Lenoir Restaurant. All Rights Reserved. Crafted for Taste.</p>
      </div>
    </footer>
  );
};

export default Footer;
