import React from 'react';
import { FaHeart } from 'react-icons/fa';


const Services = () => {
    const discoveryServices = [
      'Research & Diagnostics',
      'Usability Testing',
      'Accessibility Audit',
      'Empathy & Affinity Mapping',
      'Journey & Flow Mapping',
      'AI-Driven Design Discovery Sprint',
      'Strategic Roadmapping',
      'Microcopy & Content Strategy',
      'Design Sprints & Innovation Workshops'
    ];
  
    const retainerServices = [
      'Wireframing, Prototyping & A/B Testing',
      'AI-Powered UX Audit & Redesign',
      'Analytics, Forecasting & Optimisation',
      'Digital Transformation Accelerator',
      'Startup Launchpad with Rapid Prototyping',
      'Seamless Discovery-to-Delivery Transition',
      'AI-Enhanced Design Thinking Framework'
    ];
  
    return (
      <section id="services" className="section-padding bg-bg-light">
        <div className="container-custom">
          {/* Design Discovery Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
                Design Discovery Services
              </h2>
              <p className="text-lg text-text-medium mb-8">
                Short-to-mid-term sprints that uncover user needs, identify friction points, 
                and lay the foundation for smart, scalable design.
              </p>
              
              <div className="space-y-4 mb-8">
                {discoveryServices.map((service, index) => (
                  <div className='flex items-center space-x-3'>
                    <FaHeart className="text-yellow " />
                    <span className="text-dark">{service}</span>
                  </div>
                ))}
              </div>
  
              <button className="bg-white text-dark px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-yellow hover:scale-105 hover:shadow-medium w-full sm:w-auto border-2 border-yellow flex items-center gap-3 group">
          Discover More
          <FaHeart className="text-yellow group-hover:text-dark transition-colors duration-300" />
        </button>
            </div>
            <div className="order-1 lg:order-none flex justify-center lg:justify-end">
            <div className="relative">
                <div className="w-80 h-80 bg-yellow rounded-sm flex items-center justify-center">
                <div className="w-64 h-64 bg-yellow rounded-md relative overflow-hidden bg-[url('https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-4')] bg-cover bg-center bg-no-repeat">
            </div>
        </div>
</div>

          </div>
          </div>
  
          {/* Premium Retainer Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
                <div className="w-80 h-80 bg-yellow rounded-sm flex items-center justify-center">
                <div className="w-64 h-64 bg-yellow rounded-md relative overflow-hidden bg-[url('https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-5')] bg-cover bg-center bg-no-repeat">
            </div>
        </div>
</div>

          </div>
  
            <div className="order-1 lg:order-2" >
              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
                Premium Retainer Services
              </h2>
              <p className="text-lg text-text-medium mb-8">
                Long-term design partnerships to execute, iterate, and scale impactful 
                experiences across the product lifecycle.
              </p>
              
              <div className="space-y-4 mb-8">
                {retainerServices.map((service, index) => (
                  <div key={service} className="flex items-center space-x-3">
                    <FaHeart className="text-yellow " />
                    <span className="text-dark">{service}</span>
                  </div>
                ))}
              </div>
  
        <button className="bg-white text-dark px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-yellow hover:scale-105 hover:shadow-medium w-full sm:w-auto border-2 border-yellow flex items-center gap-3 group">
          Explore More
          <FaHeart className="text-yellow group-hover:text-dark transition-colors duration-300" />
        </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
export default Services;