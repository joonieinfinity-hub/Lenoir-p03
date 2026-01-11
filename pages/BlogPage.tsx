
import React from 'react';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight } from 'lucide-react';

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  return (
    <div className="pt-32 pb-24 px-6 bg-[#f9f7f2] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-4">The Journal</h1>
          <p className="text-gray-600 font-light italic">Notes from the garden, kitchen updates, and seasonal shifts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <div key={post.id} className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-10">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] bg-gray-100 text-gray-500 px-3 py-1">{post.category}</span>
                  <div className="flex items-center text-gray-400 text-[10px] uppercase tracking-widest">
                    <Clock size={12} className="mr-1" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
                <h2 className="text-3xl serif mb-4 group-hover:text-[#4a0e0e] transition-colors">{post.title}</h2>
                <p className="text-gray-500 font-light italic leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                <button className="flex items-center space-x-2 text-[#4a0e0e] border-b border-[#4a0e0e] pb-1 tracking-widest uppercase text-xs hover:text-[#8c7851] hover:border-[#8c7851] transition-all">
                  <span>READ STORY</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
