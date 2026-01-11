
import React from 'react';
import { MenuItem } from '../types';
import { FileText } from 'lucide-react';

interface MenuPageProps {
  items: MenuItem[];
}

const MenuPage: React.FC<MenuPageProps> = ({ items }) => {
  const categories: MenuItem['category'][] = ['Starter', 'Main', 'Dessert', 'Drink'];

  return (
    <div className="pt-32 pb-24 px-6 bg-[#f9f7f2]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#8c7851] uppercase tracking-[0.2em] text-sm">Cuisine</span>
          <h1 className="text-5xl md:text-6xl mt-4 mb-6">Seasonal Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-light italic leading-relaxed">
            Our menu changes frequently to highlight the freshest ingredients from our Central Texas farming partners.
          </p>
          <button className="mt-8 inline-flex items-center space-x-2 border border-[#4a0e0e] text-[#4a0e0e] px-6 py-2 hover:bg-[#4a0e0e] hover:text-white transition-all">
            <FileText size={18} />
            <span className="text-xs tracking-widest uppercase">Download PDF Menu</span>
          </button>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="mb-20">
            <h2 className="text-3xl serif border-b border-gray-200 pb-4 mb-10 text-center uppercase tracking-widest opacity-80">
              {cat}s
            </h2>
            <div className="space-y-12">
              {items.filter(i => i.category === cat).map((item) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-baseline">
                  <div>
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl serif text-[#4a0e0e]">{item.name}</h3>
                      {item.dietary?.map(d => (
                        <span key={d} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                          {d}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-500 font-light italic mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-lg font-light text-[#8c7851] tabular-nums">
                    ${item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-24 p-12 bg-white shadow-xl text-center">
          <h2 className="text-2xl serif mb-6">Join Us for Dinner</h2>
          <p className="text-gray-500 mb-8 font-light italic">We recommend making reservations at least 2 weeks in advance for weekend dining.</p>
          <a
            href="https://resy.com"
            className="bg-[#4a0e0e] text-white px-10 py-4 tracking-widest uppercase text-sm hover:bg-[#2a0808] shadow-lg inline-block"
          >
            Find a Table
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
