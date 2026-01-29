import React from 'react';

const Features = () => {
    return (
        <section id="about" className="section-padding bg-slate-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            The morempathy digital Edge
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Feature cards */}
          <div className="order-2 lg:order-none space-y-">
            <div  className="bg-white p-6 rounded-2xl shadow-subtle border border-border-light m-4 ">
              <h3 className="text-xl font-semibold text-dark mb-3 ">
                Empathy-First, AI-Enhanced UX Design
              </h3>
              <p className="text-text-medium">
                Blend human insights with AI to craft solutions that connect instantly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-subtle border border-border-light m-4">
              <h3 className="text-xl font-semibold text-dark mb-3">
                Seamless Transition from Discovery to Delivery
              </h3>
              <p className="text-text-medium">
                Ensure design vision and strategy stay consistent from concept to launch.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-subtle border border-border-light m-4">
              <h3 className="text-xl font-semibold text-dark mb-3">
                AI-Enhanced Design Thinking Framework
              </h3>
              <p className="text-text-medium">
                Achieve faster results with data-driven insights and adaptive iterations.
              </p>
            </div>
          </div>

          {/* Right side - Heart with robot hand */}
        <div className="order-1 lg:order-none flex justify-center lg:justify-end">
            <div className="relative">
                <div className="w-80 h-80 bg-yellow rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-yellow rounded-full relative overflow-hidden bg-[url('https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-1')] bg-cover bg-center bg-no-repeat">
            </div>
        </div>
</div>

          </div>
        </div>
      </div>
    </section>
    )
}
export default Features;