
import React, { useState } from 'react';
import { SiteContent, MenuItem, EventItem, BlogPost } from '../types';
import { 
  Settings, 
  Layout, 
  Menu as MenuIcon, 
  Calendar, 
  BookOpen, 
  Image as ImageIcon, 
  Save, 
  Trash2, 
  Plus, 
  ChevronRight,
  LogOut,
  ExternalLink,
  // Added Edit2 to fix "Cannot find name 'Edit2'" errors on lines 167 and 189
  Edit2
} from 'lucide-react';

interface AdminDashboardProps {
  content: SiteContent;
  setContent: React.Dispatch<React.SetStateAction<SiteContent>>;
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  events: EventItem[];
  setEvents: React.Dispatch<React.SetStateAction<EventItem[]>>;
  blog: BlogPost[];
  setBlog: React.Dispatch<React.SetStateAction<BlogPost[]>>;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  content, setContent, menu, setMenu, events, setEvents, blog, setBlog 
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'menu' | 'events' | 'blog' | 'seo'>('content');
  const [isLogged, setIsLogged] = useState(true); // Simplified for demo

  if (!isLogged) return <div className="pt-32 px-6 text-center">Please login to access the dashboard.</div>;

  return (
    <div className="pt-24 min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
        <div className="p-6">
          <h2 className="text-xl serif text-[#4a0e0e]">Staff Portal</h2>
        </div>
        <nav className="mt-4 px-2 space-y-1">
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm rounded-lg transition-all ${
              activeTab === 'content' ? 'bg-[#4a0e0e] text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Layout size={18} />
            <span>Site Content</span>
          </button>
          <button 
            onClick={() => setActiveTab('menu')}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm rounded-lg transition-all ${
              activeTab === 'menu' ? 'bg-[#4a0e0e] text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <MenuIcon size={18} />
            <span>Menu Manager</span>
          </button>
          <button 
            onClick={() => setActiveTab('events')}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm rounded-lg transition-all ${
              activeTab === 'events' ? 'bg-[#4a0e0e] text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Calendar size={18} />
            <span>Events Calendar</span>
          </button>
          <button 
            onClick={() => setActiveTab('blog')}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm rounded-lg transition-all ${
              activeTab === 'blog' ? 'bg-[#4a0e0e] text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <BookOpen size={18} />
            <span>Blog/News</span>
          </button>
          <button 
            onClick={() => setActiveTab('seo')}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm rounded-lg transition-all ${
              activeTab === 'seo' ? 'bg-[#4a0e0e] text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Settings size={18} />
            <span>SEO Tools</span>
          </button>
        </nav>
        <div className="absolute bottom-8 left-6">
          <button className="flex items-center space-x-2 text-gray-400 hover:text-red-600 text-sm">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl serif capitalize">{activeTab.replace('-', ' ')} Manager</h1>
            <div className="flex space-x-3">
              <button className="bg-[#8c7851] text-white px-4 py-2 text-xs tracking-widest uppercase hover:bg-opacity-90 flex items-center space-x-2">
                <Save size={16} />
                <span>Save Changes</span>
              </button>
              <a href="#/" target="_blank" className="bg-gray-200 text-gray-700 px-4 py-2 text-xs tracking-widest uppercase flex items-center space-x-2">
                <ExternalLink size={16} />
                <span>View Site</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            {activeTab === 'content' && (
              <div className="space-y-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Hero Headline</label>
                  <input 
                    type="text" 
                    className="w-full p-4 border border-gray-200 rounded outline-none focus:ring-1 focus:ring-[#4a0e0e] text-lg serif"
                    value={content.hero.headline}
                    onChange={(e) => setContent({...content, hero: {...content.hero, headline: e.target.value}})}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Hero Sub-text</label>
                  <textarea 
                    className="w-full p-4 border border-gray-200 rounded outline-none focus:ring-1 focus:ring-[#4a0e0e] h-32 italic font-light"
                    value={content.hero.subheadline}
                    onChange={(e) => setContent({...content, hero: {...content.hero, subheadline: e.target.value}})}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Philosophy Statement</label>
                  <textarea 
                    className="w-full p-4 border border-gray-200 rounded outline-none focus:ring-1 focus:ring-[#4a0e0e] h-32 leading-relaxed"
                    value={content.about.philosophy}
                    onChange={(e) => setContent({...content, about: {...content.about, philosophy: e.target.value}})}
                  />
                </div>
              </div>
            )}

            {activeTab === 'menu' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{menu.length} items currently on menu</span>
                  <button className="text-[#4a0e0e] flex items-center space-x-1 text-sm font-medium">
                    <Plus size={18} />
                    <span>Add New Dish</span>
                  </button>
                </div>
                {menu.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-4 border border-gray-100 rounded hover:bg-gray-50 transition-all">
                    <div className="flex items-center space-x-4">
                      <img src={item.image} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <span className="text-xs text-gray-400 italic">{item.category} — ${item.price}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-[#4a0e0e]"><Edit2 size={16} /></button>
                      <button className="p-2 text-gray-400 hover:text-red-500"><Trash2 size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-6">
                <button className="w-full border-2 border-dashed border-gray-200 p-8 rounded flex flex-col items-center text-gray-400 hover:text-[#4a0e0e] hover:border-[#4a0e0e] transition-all">
                  <Plus size={32} />
                  <span className="mt-2 text-sm uppercase tracking-widest">Create New Event</span>
                </button>
                {events.map(event => (
                  <div key={event.id} className="p-6 border border-gray-100 rounded flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#8c7851]">{event.date}</span>
                      <h4 className="text-xl serif mt-1">{event.title}</h4>
                      <p className="text-sm text-gray-500 font-light mt-2 line-clamp-1">{event.description}</p>
                    </div>
                    <div className="flex space-x-2">
                       <button className="p-2 text-gray-400 hover:text-[#4a0e0e]"><Edit2 size={16} /></button>
                       <button className="p-2 text-gray-400 hover:text-red-500"><Trash2 size={16} /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'seo' && (
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 border border-blue-100 text-blue-800 rounded flex items-start space-x-3">
                  <div className="mt-1"><Layout size={20} /></div>
                  <p className="text-sm italic">Changes here affect how search engines like Google see your restaurant.</p>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Meta Title Template</label>
                  <input type="text" className="w-full p-3 border border-gray-200 rounded" value="Lenoir Restaurant | %page_title% | Austin, TX" readOnly />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Default Meta Description</label>
                  <textarea className="w-full p-3 border border-gray-200 rounded h-24 text-sm" defaultValue="Experience the finest farm-to-table dining and wine garden in Austin, TX. Chef Todd Duplechan and Jessica Maher welcome you to Lenoir." />
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-medium mb-4">Schema.org Structured Data (Auto-Generated)</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 text-[10px] overflow-x-auto rounded">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Restaurant",
                      "name": "Lenoir",
                      "address": "1807 S. First St, Austin, TX 78704",
                      "priceRange": "$$$"
                    }, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
