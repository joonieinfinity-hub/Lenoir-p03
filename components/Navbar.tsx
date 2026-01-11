
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { SiteContent } from '../types';

interface NavbarProps {
  siteContent: SiteContent;
}

const Navbar: React.FC<NavbarProps> = ({ siteContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Wine Club', path: '/wine-club' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Private Dining', path: '/private-dining' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`text-2xl font-bold tracking-widest serif ${
          scrolled || location.pathname !== '/' ? 'text-[#4a0e0e]' : 'text-white'
        }`}>
          LENOIR
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-widest hover:text-[#4a0e0e] transition-colors ${
                scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://resy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4a0e0e] text-white px-6 py-2 rounded-sm text-sm uppercase tracking-widest hover:bg-[#2a0808] transition-all shadow-lg"
          >
            Reservations
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${
            scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#f9f7f2] z-40 transition-transform duration-500 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl serif text-[#4a0e0e]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://resy.com"
            className="bg-[#4a0e0e] text-white px-10 py-4 rounded-sm text-lg serif tracking-widest"
          >
            Reservations
          </a>
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-[#4a0e0e]">
            <X size={32} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
