import React from 'react';
import { FaRocket } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { GoZap } from "react-icons/go";
const Portfolio = () => {
    const clientTypes = [
        {
          title: 'Startups',
          description: 'Launch market-ready solutions with agile design and rapid prototyping.',
          icon: FaRocket
        },
        {
          title: 'Enterprises',
          description: 'Launch market-ready solutions with agile design and rapid prototyping.',
          icon: FaRegBuilding
        },
        {
          title: 'Mid-Sized Firms',
          description: 'Launch market-ready solutions with agile design and rapid prototyping.',
          icon: GoZap
        }
      ];
    return (
        <section id="portfolio" className="section-padding bg-dark text-white">
            <div className="container-custom">
        {/* Innovation for Every Ambition */}
        <div className="text-center mb-4" >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Innovation for Every Ambition
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center mb-4">
  {/* Client Types */}
  <div className="space-y-6">
    {clientTypes.map((client) => (
      <div
        key={client.title}
        className="group bg-white text-dark p-6 rounded-2xl border-2 border-yellow font-medium transition-all duration-300 hover:bg-yellow hover:scale-105 hover:shadow-medium w-full sm:w-auto flex items-center gap-4"
      >
        {/* Icon */}
        <div className="flex flex-col">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-yellow transition-colors duration-300 group-hover:bg-white">
          <client.icon className="text-dark text-2xl" />
        </div>
        {/* Text in row (heading + paragraph stacked, but icon + text in one row) */}
          <h3 className="text-xl font-semibold mb-1">{client.title}</h3>
          <p className="text-dark/80 text-sm sm:text-base">
            {client.description}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Creative Design Image */}
  <div className="relative">
  <div className="bg-white rounded-2xl h-146 flex items-center justify-center border-2 border-yellow">
    <img
      src="https://res.cloudinary.com/deiq6ded9/image/upload/v1676970203/cld-sample-3.jpg"
      alt="Creative design"
      className="h-full w-full object-cover rounded-2xl"
    />
  </div>
</div>
</div>
      </div>
        </section>
    )

}
export default Portfolio;