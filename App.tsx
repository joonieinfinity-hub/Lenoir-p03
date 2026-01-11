
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu as MenuIcon, 
  X, 
  Instagram, 
  Facebook, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  ChevronRight,
  User,
  Settings,
  Plus,
  Trash2,
  Edit2,
  ExternalLink,
  ChevronLeft
} from 'lucide-react';
import { INITIAL_CONTENT, INITIAL_MENU, INITIAL_EVENTS, INITIAL_BLOG, INITIAL_TESTIMONIALS } from './constants';
import { SiteContent, MenuItem, EventItem, BlogPost, Testimonial } from './types';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import WineClubPage from './pages/WineClubPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import PrivateDiningPage from './pages/PrivateDiningPage';
import BlogPage from './pages/BlogPage';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  // Global State for Content (Simulation of a CMS database)
  const [siteContent, setSiteContent] = useState<SiteContent>(INITIAL_CONTENT);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(INITIAL_MENU);
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(INITIAL_BLOG);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar siteContent={siteContent} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <Home 
                content={siteContent} 
                testimonials={testimonials} 
                events={events}
                menuItems={menuItems}
              />
            } />
            <Route path="/menu" element={<MenuPage items={menuItems} />} />
            <Route path="/wine-club" element={<WineClubPage />} />
            <Route path="/events" element={<EventsPage events={events} />} />
            <Route path="/about" element={<AboutPage content={siteContent.about} />} />
            <Route path="/private-dining" element={<PrivateDiningPage />} />
            <Route path="/blog" element={<BlogPage posts={blogPosts} />} />
            <Route path="/admin" element={
              <AdminDashboard 
                content={siteContent} 
                setContent={setSiteContent}
                menu={menuItems}
                setMenu={setMenuItems}
                events={events}
                setEvents={setEvents}
                blog={blogPosts}
                setBlog={setBlogPosts}
              />
            } />
          </Routes>
        </main>
        <Footer content={siteContent} />
      </div>
    </HashRouter>
  );
};

// Scroll Reset Utility
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
