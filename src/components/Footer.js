import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
  <div className="container-custom py-16">
    {/* Main Footer Content */}
    <div className="flex justify-center items-center">
      {/* Company Info */}
      <div className="lg:col-span-2 max-w-md text-center">
        <div className="flex items-center mb-6">
          <span className="text-6xl font-bold">morempathy</span>
          <span className="text-6xl font-bold text-yellow">.</span>
        </div>
        <hr className='text-zinc-400'/>
      <div className='flex row-auto justify-center'>   
        <p className='m-2 ml-2 mr-2 text-yellow' href="#portfolio">About Us</p>
        <p className='m-2 ml-2 mr-2 text-yellow' href="#services">Our-services</p>
        <hr className='text-neutral-400'/>
      </div>
      <hr className='text-zinc-400'/>
      <div className='flex row-auto justify-center m-4'>
        <FaInstagram className='m-2 text-4xl text-white'/>
        <FaXTwitter className='m-2 text-4xl text-white'/>
        <FaLinkedin className='m-2 text-4xl text-white'/>
      </div>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="border-t border-gray-800 pt-4 bg-black">
    <div className="container-custom">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-gray-400 text-sm">
          Copyright © 2025. Designed By morempathy.digital
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
            Privacy Policy
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;