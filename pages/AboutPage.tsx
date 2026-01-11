
import React from 'react';
import { SiteContent } from '../types';

interface AboutPageProps {
  content: SiteContent['about'];
}

const AboutPage: React.FC<AboutPageProps> = ({ content }) => {
  return (
    <div className="pt-32 pb-24 px-6 bg-[#f9f7f2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-[#8c7851] uppercase tracking-[0.2em] text-sm mb-4 block">Est. 2012</span>
            <h1 className="text-5xl md:text-7xl mb-8 leading-tight">{content.title}</h1>
            <p className="text-xl text-gray-700 leading-relaxed font-light italic mb-8">
              "We cook with what we have, when we have it."
            </p>
            <p className="text-gray-600 leading-loose font-light">
              {content.philosophy}
            </p>
          </div>
          <div className="relative h-[600px]">
            <img src="https://picsum.photos/seed/kitchen/800/1200" alt="Kitchen Action" className="w-full h-full object-cover rounded-sm" />
          </div>
        </div>

        <div className="bg-white p-12 md:p-24 shadow-sm mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl serif mb-12">Our Mission</h2>
            <p className="text-lg text-gray-500 font-light italic leading-relaxed">
              To nourish our community by celebrating the bounty of Central Texas, honoring the labor of our local farmers, and creating a space where every guest feels like an old friend.
            </p>
          </div>
        </div>

        <h2 className="text-4xl text-center mb-16">The Visionaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {content.founders.map((chef) => (
            <div key={chef.name} className="flex flex-col md:flex-row bg-[#fdfcf9] border border-gray-100">
              <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden">
                <img src={chef.image} alt={chef.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                <h3 className="text-2xl serif mb-4">{chef.name}</h3>
                <p className="text-sm text-gray-500 italic font-light leading-relaxed">
                  {chef.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
