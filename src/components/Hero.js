import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="relative overflow-hidden">
  <div className="w-full h-72 bg-gradient-radial from-yellow/80 via-yellow/10 to-transparent rounded-full"></div>
  <div className="container-custom relative z-10">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
        Empathy First. AI-Led.
      </h1>

      <h2 className="text-xl lg:text-5xl text-black mb-8 ">
        Design Infused. Intelligence Overloaded.
      </h2>

      <p className="text-lg text-text-medium mb-12 leading-relaxed max-w-3xl mx-auto">
        Transform ideas into user-friendly digital products with a blend of human-centered AI design and intuitive interfaces,
        delivered in just 4–8 weeks – tailored for ambitious startups, scaling businesses, and industry-leading enterprises.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-white text-dark px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-yellow hover:scale-105 hover:shadow-medium w-full sm:w-auto border-2 border-yellow flex items-center gap-3 group">
          Discover More
          <FaHeart className="text-yellow group-hover:text-dark transition-colors duration-300" />
        </button>
      </div>
    </div>

    {/* Hero Visual */}
    <div className="mt-12 lg:mt-12 max-w-4xl mx-auto mb-8" >
          <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-strong">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/KRnhuZPalOo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
    </div>
</section>
    )
}
export default Hero;