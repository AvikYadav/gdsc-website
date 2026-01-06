"use client";
import TeamCard from '@/components/TeamCard';
import Card from '@/components/Card';
import SectionLabel from '@/components/SectionLabel';
import DepartmentHeader from '@/components/DepartmentHeader';
import Arrow from '@/public/arrow';
export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#F2F2F2] -z-2 relative overflow-x-hidden py-20 ">
      <img src='backg.png' className='absolute -z-1 translate-y-60 -translate-x-10 w-[400%] h-[14%] lg:h-[20%] xl:h-[25%]'/>
      <div className="m-5 sm:px-6 lg:px-8">
      {/* HEADER SECTION */}
      <header className="my-10">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#383838]">Meet the Team</h1>
          <Arrow />
        </div>
        <p className="text-[#666666] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mt-4">
          "TEAMWORK GIVES YOU THE BEST OPPORTUNITY TO TURN VISION INTO REALITY."
        </p>
        <p className='text-[#B3B3B3] text-sm'>-John C. Maxwell</p>
      </header>

      {/* PRESIDENTS SECTION */}
      <section className="w-full lg:mb-16 flex items-center"> 
        <SectionLabel title="PRESIDENTS" color="blue" />
        <div className="w-full grid grid-cols-3  ">
          <Card name="Raghu Ram" imageSrc="/raghu.png" tintColor='blue' linkedinUrl="#" />
          <Card name="Raghu Ram" imageSrc="/raghu.png" tintColor='blue' linkedinUrl="#" />
          <Card name="Raghu Ram" imageSrc="/raghu.png" tintColor='blue' linkedinUrl="#" />
        </div>
      </section>

      {/* VICE PRESIDENTS SECTION */}
      <section className="w-full lg:mb-16 flex items-center">
        <SectionLabel title="VICE PRESIDENTS" color="yellow" />
        <div className="w-full grid grid-cols-3 ">
          <Card name="Raghu Ram" imageSrc="/raghu.png" tintColor='yellow' linkedinUrl="#" />
          <Card name="Raghu Ram" imageSrc="/raghu.png" tintColor='yellow' linkedinUrl="#" />
          <Card name="Raghu Ram" imageSrc="/raghu.png" tintColor='yellow' linkedinUrl="#" />
        </div>
      </section>

      {/* GENERAL SECRETARY SECTION */}
      <section className="w-full mb-16 flex items-center">
        <SectionLabel title="GENERAL SECRETARY" color="red" />
        <div className="w-full grid grid-cols-3 ">
          <Card name="Raghu Ram" imageSrc="/raghu.png" tintColor='red' linkedinUrl="#" />
          <Card name="Raghu Ram" imageSrc="/raghu.png" tintColor='red' linkedinUrl="#" />
          <Card name="Raghu Ram" imageSrc="/raghu.png" tintColor='red' linkedinUrl="#" />
        </div>
      </section>

      <style jsx>{`
        @keyframes hover-loop {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-hover-loop {
          animation: hover-loop 3s linear infinite;
        }
      `}</style>
    </div>
      <hr className="text-black border mx-15" />

      {/* DEPARTMENT: DEVELOPMENT */}
      <div className="mt-10">
        <DepartmentHeader
          title="Development"
          leftIcon="/leftarrow.png"
          rightIcon="/rightarrow.png"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-16 justify-items-center mb-12 relative">
          <TeamCard name="Raghu Ram" role="Department Lead" imageSrc="/raghu.png" linkedinUrl="#" />
          <TeamCard name="Raghu Ram" role="Mentor" imageSrc="/raghu.png" linkedinUrl="#" />
          <TeamCard name="Raghu Ram" role="Member" imageSrc="/raghu.png" linkedinUrl="#" />
          <TeamCard name="Raghu Ram" role="Member" imageSrc="/raghu.png" linkedinUrl="#" />
        </div>
      </div>
      <hr className="text-black border mx-15" />

      {/* DEPARTMENT: DSA */}
      <div className="mt-10">
        <DepartmentHeader
          title="DSA"
          leftIcon="/leftarrow.png"
          rightIcon="/rightarrow.png"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-16 justify-items-center mb-12 relative">
          <TeamCard name="Raghu Ram" role="Department Lead" imageSrc="/raghu.png" linkedinUrl="#" />
          <TeamCard name="Raghu Ram" role="Mentor" imageSrc="/raghu.png" linkedinUrl="#" />
          <TeamCard name="Raghu Ram" role="Member" imageSrc="/raghu.png" linkedinUrl="#" />
          <TeamCard name="Raghu Ram" role="Member" imageSrc="/raghu.png" linkedinUrl="#" />
        </div>
      </div>
      <hr className="text-black border mx-15" />

      {/* DEPARTMENT: MACHINE LEARNING */}
      <div className="mt-10">
        <DepartmentHeader
          title="Machine Learning"
          leftIcon="/leftarrow.png"
          rightIcon="/rightarrow.png"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-16 justify-items-center mb-12 relative">
          <TeamCard name="Raghu Ram" role="Department Lead" imageSrc="/raghu.png" linkedinUrl="#" />
          <TeamCard name="Raghu Ram" role="Mentor" imageSrc="/raghu.png" linkedinUrl="#" />
          <TeamCard name="Raghu Ram" role="Member" imageSrc="/raghu.png" linkedinUrl="#" />
          <TeamCard name="Raghu Ram" role="Member" imageSrc="/raghu.png" linkedinUrl="#" />
        </div>
      </div>
      <hr className="text-black border mx-15" />

      {/* DEPARTMENT: PRODUCTION */}
      <div className="mt-10 mb-20">
        <DepartmentHeader
          title="Production"
          leftIcon="/leftarrow.png"
          rightIcon="/rightarrow.png"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-16 justify-items-center mb-12 relative">
          <TeamCard name="Raghu Ram" role="Department Lead" imageSrc="/raghu.png" linkedinUrl="#" />
          <TeamCard name="Raghu Ram" role="Mentor" imageSrc="/raghu.png" linkedinUrl="#" />
          <TeamCard name="Raghu Ram" role="Member" imageSrc="/raghu.png" linkedinUrl="#" />
          <TeamCard name="Raghu Ram" role="Member" imageSrc="/raghu.png" linkedinUrl="#" />
        </div>
      </div>
      <hr className="text-black border mx-15" />

    </main>
  );
}