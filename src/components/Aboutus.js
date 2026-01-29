import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Aboutus = () => {
  const swiperRef = useRef(null);

  const data = [
    {
      title: "User Stories & Business Workflows",
      desc: "Tailored user stories and workflows that align product development with business objectives.",
      img: "https://res.cloudinary.com/prod/image/upload/ar_1:1,c_auto,g_auto,w_500/r_45/me/rc/animals-2.png",
    },
    {
      title: "UI/UX Designs for Core User Journeys",
      desc: "Engaging, user-centered designs that prioritize seamless experiences for key user flows.",
      img: "https://res.cloudinary.com/prod/image/upload/ar_1:1,c_auto,g_auto,w_500/r_45/me/rc/animals-3.png",
    },
    {
      title: "Interactive Clickable Prototypes (Figma)",
      desc: "Fully interactive Figma prototypes that help teams visualize and test interfaces before development.",
      img: "https://res.cloudinary.com/prod/image/upload/ar_1:1,c_auto,g_auto,w_500/r_45/me/rc/animals-4.png",
    },
    {
        title: "Design System & Component Library",
        desc: "Comprehensive design systems and component libraries for consistent and efficient UI development.",
        img: "https://res.cloudinary.com/prod/image/upload/ar_1:1,c_auto,g_auto,w_500/r_45/me/rc/animals-5.png",
    },
    {
        title: "Developer Handoff Documentation",
        desc: "Detailed documentation to ensure smooth handoff and collaboration between design and development teams.",
        img: "https://res.cloudinary.com/prod/image/upload/ar_1:1,c_auto,g_auto,w_500/r_45/me/rc/animals-2.png",
    },
  ];

  return (
    <section className="py-20 bg-white relative" id="about">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4">
          What You Get from Us?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We deliver the essential assets to take your project from concept to execution, ensuring seamless development and growth.
        </p>

        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          navigation={false}
          pagination={{ clickable: true }}
          spaceBetween={25}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-2xl border border-gray-200 shadow-md p-6 flex flex-col h-[520px] w-[360px]">
                
                <h2 className="text-lg font-semibold text-gray-800 mb-6 h-[36px]">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-24 flex-grow">
                  {item.desc}
                </p>

                <div className="w-full h-[256px] rounded-xl overflow-hidden">
                    <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 ease-out hover:scale-110"
                    />
                    </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-end mt-8 gap-4">
          <button
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
            className="w-12 h-12 rounded-full bg-white border-2 border-yellow hover:bg-yellow flex items-center justify-center  transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.swiper?.slideNext()}
            className="w-12 h-12 rounded-full bg-white border-2 border-yellow flex hover:bg-yellow items-center justify-center  transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
