import React from 'react';
import { Home, DollarSign, BedDouble, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
}

export function PropertyCard({ image, title, price, beds, baths, sqft, address }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{address}</p>
        <div className="flex items-center text-emerald-600 text-xl font-bold mb-4">
          <DollarSign className="w-5 h-5 mr-1" />
          {price.toLocaleString()}
        </div>
        <div className="flex justify-between text-gray-600">
          <div className="flex items-center">
            <BedDouble className="w-4 h-4 mr-1" />
            <span>{beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}