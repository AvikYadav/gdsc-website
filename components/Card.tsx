import { Linkedin } from 'lucide-react';

interface TeamCardProps {
  name: string;
  imageSrc: string;
  linkedinUrl: string;
  tintColor: string; 
}

export default function Card({ name, imageSrc, linkedinUrl, tintColor }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-80 xl:h-80 flex items-center justify-center">
        
        {/* Hover Loop Border */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden p-1">
          <div 
            className="w-full h-full rounded-full animate-spin"
            style={{ 
              background: 'conic-gradient(#0F9D58 0%, #4285F4 25%, #FBBC04 50%, #EA4335 75%, #0F9D58 100%)',
              animationDuration: '3s'
            }}
          />
        </div>

        {/* Profile Image */}
        <div className="absolute inset-[6px] rounded-full overflow-hidden bg-white z-20">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div 
            className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-500"
            style={{ backgroundColor: tintColor }}
          />
        </div>

        {/* LinkedIn Button */}
        <a 
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 right-2 bg-[#FBBC04] p-1 md:p-4 rounded-full border-2 border-white shadow-lg z-30 scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-[#f4b400]"
        >
          <Linkedin size={20} fill="black" strokeWidth={0} />
        </a>
      </div>

      <div className="text-center">
        <h3 className="text-[#3C4043] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">{name}</h3>
      </div>
    </div>
  );
}