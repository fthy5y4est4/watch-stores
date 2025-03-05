import React from 'react';
import { Menu, X, Layers } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <Layers className="h-8 w-8 text-purple-500" />
                <span className="ml-2 text-xl font-bold">Dimension</span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-purple-400 transition-colors">Home</a>
              <a href="#work" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">Work</a>
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-400">Home</a>
            <a href="#work" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-400">Work</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-400">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;