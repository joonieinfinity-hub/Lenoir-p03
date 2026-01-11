
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
import { INITIAL_CONTENT, INITIAL_MENU, INITIAL_EVENTS, INITIAL_BLOG, INITIAL_TESTIMONIALS } from './constants.tsx';
import { SiteContent, MenuItem, EventItem, BlogPost, Testimonial } from './types.ts';

// Components
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import MenuPage from './pages/MenuPage.tsx';
import WineClubPage from './pages/WineClubPage.tsx';
import EventsPage from './pages/EventsPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import PrivateDiningPage from './pages/PrivateDiningPage.tsx';
import BlogPage from './pages/BlogPage.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';

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
