"use client";
import { Linkedin } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  imageSrc: string;
  linkedinUrl: string;
}

export default function TeamCard({ name, role, imageSrc, linkedinUrl }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center group w-full max-w-[200px]">
      <div className="relative w-40 h-43 md:w-60 md:h-64 xl:w-80 xl:h-85 mb-4 flex items-center justify-center">
        
        {/* Hover Loop Border */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden p-1">
          <div 
            className="w-full h-full rounded-full animate-hover-loop"
            style={{ 
              background: 'conic-gradient(#0F9D58 0%, #4285F4 25%, #FBBC04 50%, #EA4335 75%, #0F9D58 100%)' 
            }}
          />
        </div>

        {/* Profile Image */}
        <div className="absolute inset-[6px] rounded-full overflow-hidden bg-white z-10">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
          />
        </div>

        {/* LinkedIn Button */}
        <a 
          href={linkedinUrl}
          target="_blank"
          className="absolute bottom-2 right-2 bg-[#FBBC04] p-4 rounded-full border-2 border-white shadow-lg z-20 scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-[#f4b400]"
        >
          <Linkedin size={25} fill="black" strokeWidth={0} />
        </a>
      </div>

      <div className="text-center text-nowrap">
        <h3 className="text-[#3C4043] font-bold text-3xl font-[family-name:var(--font-product-sans)]">{name}</h3>
        <p className="text-[#70757A] text-3xl uppercase ">{role}</p>
      </div>
    </div>
  );
}