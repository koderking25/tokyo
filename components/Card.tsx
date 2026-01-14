
import React from 'react';
import { AirbnbOption } from '../types';

interface CardProps {
  item: AirbnbOption;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const isUnavailable = item.availability === 'UNAVAILABLE';

  return (
    <div className={`group relative flex flex-col bg-zinc-900 border ${isUnavailable ? 'border-red-900/50 opacity-75' : 'border-zinc-800'} rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,0,85,0.2)]`}>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        
        {isUnavailable && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg z-10">
            Unavailable
          </div>
        )}
        
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/10 backdrop-blur-md text-white/90 px-3 py-1 rounded-full text-xs font-medium border border-white/20">
            {item.location}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold font-heading text-white">{item.name}</h3>
          <div className="text-right">
            <p className="text-pink-500 font-bold text-xl">{item.pricePerNight}</p>
            <p className="text-zinc-500 text-xs">per night</p>
          </div>
        </div>

        <div className="space-y-4 flex-grow">
          <div className="flex flex-wrap gap-2">
            <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-lg text-xs">{item.bedrooms}</span>
            <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-lg text-xs">{item.beds}</span>
            <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-lg text-xs">{item.baths}</span>
          </div>

          <p className="text-zinc-400 text-sm italic">"{item.vibe}"</p>

          <div className="border-t border-zinc-800 pt-4">
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">The Specs</h4>
            <ul className="grid grid-cols-1 gap-2">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex items-center text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-zinc-800 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-zinc-500 text-xs uppercase font-bold">Total Damage</p>
              <p className="text-white font-bold">{item.priceTotal}</p>
            </div>
            <div>
              <p className="text-zinc-500 text-xs uppercase font-bold text-right">Per Person</p>
              <p className="text-white font-bold text-right">{item.pricePerPerson}</p>
            </div>
          </div>
          
          <a 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full text-center py-3 rounded-xl font-bold transition-all duration-300 ${
              isUnavailable 
                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-pink-500 hover:text-white'
            }`}
          >
            {isUnavailable ? 'Sold Out' : 'View on Airbnb'}
          </a>
        </div>
      </div>
    </div>
  );
};
