import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ImAccessibility,ImAirplane,ImBell,ImBook,ImCamera,ImHourGlass } from "react-icons/im";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Aboutus = () => {
  const swiperRef = useRef(null);

  const data = [
    {
        icon:ImAccessibility,
        desc:"Innovative, high-quality real estate spaces designed to inspire and elevate lifestyles.",
        img:"https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-1",
        bg:"bg-blue-500"
    },
    {
        icon:ImAirplane,
        desc:"Seamless travel experiences with our thoughtfully curated destinations and services.",
        img:"https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-2",
        bg:"bg-green-500"
    },
    {
        icon:ImBell,
        desc:"Thoughtful notifications and alerts that keep you informed and connected.",
        img:"https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-3",
        bg:"bg-purple-500"
    },
    {
        icon:ImBook,
        desc:"Curated reading experiences with our carefully selected books and resources.",
        img:"https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-4",
        bg:"bg-yellow-500"
    },
    {
        icon:ImCamera,
        desc:"Capturing life's moments through our expertly crafted photography and visual content.",
        img:"https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-5",
        bg:"bg-pink-500"
    },
    {
        icon:ImHourGlass,
        desc:"Efficient time management solutions designed to optimize your daily routines.",
        img:"https://res.cloudinary.com/prod/image/upload/e_gen_background_replace:prompt_Minimalist%20background%20with%20a%20soft%20pastel%20gradient%20even%20lighting/me/gen-bgr-object-1",
        bg:"bg-red-500"
    },
    
  ]

  return (
    <section className="py-20 bg-dark relative" id="success">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <h2 className="text-center text-3xl font-extrabold text-white mb-4">
          Success In Action
        </h2>

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
              <div className={`rounded-2xl shadow-md p-6 ${item.bg} flex flex-col h-[520px] w-[360px]`}>
              <div className="w-full h-[256px] rounded-xl overflow-hidden">
                    <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 ease-out hover:scale-110"
                    /> 
                    </div>
            <div className="mt-4 flex flex-col items-center">
              <item.icon className="text-white text-2xl mb-4"/>
                <p className="text-white text-sm leading-relaxed mb-24 flex-grow text-center">
                  {item.desc}
                </p>
            </div>
            <hr className="my-10 border-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
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
