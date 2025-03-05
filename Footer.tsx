import React from 'react';
import { Layers, Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Layers className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold">Dimension</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Home</a></li>
                <li><a href="#work" className="text-gray-400 hover:text-purple-500 transition-colors">Work</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-purple-500 transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-purple-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">3D Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Motion Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Interactive Experiences</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">VR/AR Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest projects and news</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white focus:outline-none focus:border-purple-500"
                />
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-r-lg text-white transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Dimension Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;