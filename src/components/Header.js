import React, {useState} from "react";
import {HiMenu, HiX} from "react-icons/hi";
import { FaHeart } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'Our Services', href: '#services' },
        { name: 'About Us', href: '#portfolio' },
        { name: 'Portfolio', href: '#success' }
      ];

    const handleNavClick = (href, itemName) => {
    setActiveItem(itemName);
    if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.querySelector(href);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    setIsMenuOpen(false);
    };
    const handleContactClick = () => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
      };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border-light">
        <div className="container-custom">
        <div className="bg">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-dark">morempathy</span>
              <span className="text-2xl font-bold text-yellow">.</span>
            </div>
  
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 bg-slate-200 px-3 py-2 rounded-full">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.name)}
                  className={`px-3 py-2 rounded-full transition-all duration-300 ${
                    activeItem === item.name
                      ? 'bg-dark text-white' 
                      : 'text-dark hover:text-white hover:bg-black '
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
  
            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={handleContactClick}
                className="bg-yellow text-dark px-8 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-medium w-full sm:w-auto border-2 border-yellow flex items-center gap-3 group"
              >
                Contact Us
                <FaHeart className="text-white group-hover:text-yellow transition-colors duration-300" />
              </button>
            </div>
  
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

  
          {/* Mobile Menu */}
          <div className="bg-yellow-500  left-0">
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 flex bg-slate-50">
              
              {/* Background Container */}
              <div className="left-0 w-[300px] h-full top-0 bottom-0 z-50">
                
                {/* Content Container */}
                <div className="px-6 py-6 flex flex-col h-full " >

                  {/* Header */}
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-dark">morempathy</span>
                      <span className="text-2xl font-bold text-yellow">.</span>
                    </div>
                    <button onClick={() => setIsMenuOpen(false)} className="text-yellow text-2xl">
                      ×
                    </button>
                  </div>

                  {/* Nav Items */}
                  <div className="flex flex-col text-[18px]  text-black font-medium">
                    {navItems.map((item, index) => (
                      <div key={item.name}>
                        <button
                          onClick={() => handleNavClick(item.href, item.name)}
                          className={`text-left w-full py-4 transition-all duration-200 ${
                            activeItem === item.name
                              ? "bg-black text-white px-6 rounded-full"
                              : "hover:text-gray-600"
                          }`}
                        >
                          {item.name}
                        </button>

                        {/* Divider except last */}
                        {index !== navItems.length - 1 && (
                          <hr className="border-t border-gray-200 my-0" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Contact Button */}
                  <div className="mt-auto pt-10">
                    <button
                      onClick={handleContactClick}
                      className="flex items-center justify-center gap-2 bg-[#FFE500] hover:bg-yellow-400 text-black text-[16px] font-bold uppercase w-full py-4 rounded-full transition-colors duration-300"
                    >
                      CONTACT US
                      <span className="text-white">♥</span>
                    </button>
                  </div>

                </div>
              </div>

              {/* Overlay */}
              <div 
                className="flex-1 bg-black bg-opacity-30"
                onClick={() => setIsMenuOpen(false)}
              ></div>
            </div>
          )}
          </div>
        </div>


        </div>
      </header>
    );
};
export default Header;