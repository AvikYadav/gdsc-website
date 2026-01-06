import React, { Component } from 'react';
import DgreenStar from '@/public/dgreenstar';

interface DepartmentHeaderProps {
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  stairs?: string;
  noodles?: string;
  blueStar?: string;
  dgreenStar?: React.FunctionComponent;

}

const DepartmentHeader: React.FC<DepartmentHeaderProps> = ({ 
  title, 
  leftIcon = "/leftarrow.png",
  rightIcon = "/rightarrow.png",
  stairs="/redstair.png",
  noodles="/noodles.png",
  blueStar="/bluestar.png",
  dgreenStar={DgreenStar},

}) => {
  return (
    <div className=" py-8 h-full">
      <div className="flex gap-10 justify-between items-center items-stretch">
        <div className=' overflow-clip flex w-full bg-[#F2F2F2] rounded-r-3xl shadow-lg px-8 py-8 md:px-12 md:py-10 drop-shadow-[2px_10px_5px_rgba(66,133,244,0.2)] '>
          <div className='absolute translate-x-3 -translate-y-8 md:translate-x-4 md:-translate-y-20 lg:translate-x-6 lg:-translate-y-14'>
            <img 
              src={stairs}
              alt=""
              className="w-20 h-20 md:w-48 md:h-48 object-contain flex-shrink-0"
            />
          </div>
          <div className='absolute translate-x-[-10px] translate-y-[67px] md:translate-x-[-20px] md:translate-y-[-55px]'>
            <img 
              src={noodles}
              alt=""
              className="w-20 h-20 md:w-[525px] md:h-[525px] object-contain flex-shrink-0"
            />
          </div>
          <div className=' absolute translate-x-[-60px] translate-y-[20px] md:translate-x-[-80px] md:translate-y-[70px]'>
            <DgreenStar />
          </div>
        </div>
        <div className="min-w-[55vw] lg:min-w-[60vw] xl:min-w-[70vw] bg-[#F2F2F2] rounded-3xl shadow-lg px-8 py-8 md:px-12 md:py-20 drop-shadow-[2px_10px_5px_rgba(66,133,244,0.2)]">
          <div className="flex  text-wrap items-center justify-center gap-2 md:gap-5 l:gap-6 xl:gap-8">
            <img 
              src={leftIcon}
              alt="" 
              className="w-20 h-20 md:w-25 md:h-25 object-contain flex-shrink-0"
            />

            <div className="max-w-[220px] flex justify-center text-center  text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 ">
              {title}
            </div>
            
            <img 
              src={rightIcon}
              alt="" 
              className="w-20 h-20 md:w-25 md:h-25 object-contain flex-shrink-0"
            />
          </div>
        </div>
        <div className='overflow-clip flex w-full bg-[#F2F2F2] rounded-l-3xl shadow-lg px-8 py-8 md:px-12 md:py-10 drop-shadow-[2px_10px_5px_rgba(66,133,244,0.2)] '>
          <div className='absolute -translate-x-12 -translate-y-8 md:-translate-x-16 md:-translate-y-20 lg:-translate-x-18 lg:-translate-y-14'>
            <img 
              src={stairs}
              alt=""
              className="w-20 h-20 md:w-48 md:h-48 object-contain flex-shrink-0"
            />
          </div>
          <div className='absolute translate-x-[-25px] translate-y-[67px] md:translate-x-[-15px] md:translate-y-[-55px]'>
            <img 
              src={noodles}
              alt=""
              className="w-20 h-20 md:w-[525px] md:h-[525px] object-contain flex-shrink-0"
            />
          </div>
          <div className='absolute translate-x-[15px] translate-y-[20px] md:translate-x-[30px] md:translate-y-[55px] lg:translate-x-12 xl:translate-x-22'>
            <img 
              src={blueStar}
              alt=""
              className="w-16 h-16 md:w-25 md:h-25 object-contain flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentHeader;