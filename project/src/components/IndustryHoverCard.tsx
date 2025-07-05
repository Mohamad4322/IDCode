import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const IndustryHoverCard = ({ industry, image }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 h-[400px] cursor-pointer">
      {/* Background Image on Hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }} // <-- Image for hover background
      ></div>
 
      {/* Hover Content */}
      <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6 z-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-xl font-semibold">{industry?.name || 'Industry Name'}</h3>
          </div>
          <p className="text-sm leading-relaxed mb-6">{industry?.description || 'Industry description goes here.'}</p>
        </div>
        <Link to={industry?.path || '#'} className="text-white font-semibold inline-flex items-center group-hover:underline">
          View industry <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      {/* Default Content */}
      <div className="relative z-20 bg-white h-full flex flex-col justify-between p-6 group-hover:opacity-0 transition-opacity duration-300">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{industry?.name || 'Industry Name'}</h3>
          </div>
          <p className="text-sm text-gray-600">{industry?.description || 'Short industry description'}</p>
        </div>
        <div className="w-full h-28 overflow-hidden rounded-lg">
          <img src={image} alt={industry.name} className="w-full h-full object-cover" /> {/* <-- Image for bottom card section */}
        </div>
      </div>
    </div>
  );
};

export default IndustryHoverCard;
