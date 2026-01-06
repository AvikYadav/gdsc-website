"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

function SocialIcons({
  variant,
}: {
  variant: "home" | "contact";
}) {

  const path = {
    home: "/footers-icons/HomeFooterIcons/",
    contact: "/footers-icons/ContactUsFooterIcons/",
  }

  const dimension = {
    home: { width: 35, height: 35 },
    contact: { width: 45, height: 45 },
  };


  return (
    <>
    { variant === "home"&&
      <a href="https://x.com">
        <Image src={`${path[variant] + "x.svg"}`} alt="X" width={`${dimension[variant].width}`} height={`${dimension[variant].height}`} />
      </a>
      }

      <a href="https://www.instagram.com/gdgnsut">
        <Image src={`${path[variant] + "instagram.svg"}`} alt="Instagram" width={`${dimension[variant].width}`} height={`${dimension[variant].height}`} />
      </a>

    <a href="https://www.linkedin.com/company/gdscnsut/">
        <Image src={`${path[variant] + "linkedin.svg"}`} alt="LinkedIn" width={`${dimension[variant].width}`} height={`${dimension[variant].height}`} />
      </a>

      <a href="https://discord.gg/WtqbaUzgR">
        <Image src={`${path[variant] + "discord.svg"}`} alt="discord" width={`${dimension[variant].width}`} height={`${dimension[variant].height}`} />
      </a>

      {variant === "contact" && <a href="https://github.com/GDSC-NSUT">
        <Image src={`${path[variant] + "github.svg"}`} alt="GitHub" width={`${dimension[variant].width}`} height={`${dimension[variant].height}`} />
      </a>
      }
    </>
  );
}


export default function Footer() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isContact = pathname === "/contact";
  const logoSize = isHome
  ? { width: 80, height: 48 } 
  : { width: 60, height: 38 };

  return (
    <footer>
      {/* ================= MOBILE FOOTER (ALL PAGES) ================= */}
      <div className="font-[var(--font-product-sans)] font-medium md:hidden bg-[#1D1D1D] text-white px-3 py-5">
        <div className="flex flex-col gap-6">
          <Image src="/Logo.svg" alt="GDG Logo" width={logoSize.width} height={logoSize.height} />

          <div>
            <h2 className="text-[25px] text-white-500">
              Google Developer Groups
            </h2>
            <p className="text-[15px] text-white-400">
              On Campus · Netaji Subhas University Of Technology
            </p>
          </div>

          <span className="text-[15px] text-gray-300">Connect with us</span>

          <div className="flex gap-8">
            <SocialIcons variant="home" />
          </div>
        </div>
      </div>

      {/* ================= DESKTOP FOOTER ================= */}
      <div
        className={`font-[var(--font-product-sans)] font-medium hidden md:block ${
          isContact
            ? "bg-white border-t border-gray-300 text-black"
            : isHome
            ? "bg-[#1D1D1D] text-white"
            : "bg-[#383838] text-white"
        }`}
      >
        { isContact && <div className="w-[95%] h-px bg-gray-500 mx-auto" /> }
        <div className={`mx-auto ${isContact ?"px-16 py-5" :isHome ? "px-12 py-10" : "px-12 py-5"} flex items-center justify-between`}>
          {/* LEFT */}
          <div className={`flex gap-4 ${
    isHome
      ? "flex-col items-start"
      : "flex-row items-center"
  }`}>
                    
                    <Image
                      src="/Logo.svg"
                      alt="GDG Logo"
                      width={logoSize.width}
                      height={logoSize.height}
                    />
          
                    <div>
                      <h2 className={`${isHome ? "text-[30px]" : "text-[25px]"} text-white-500`}>
                        Google Developer Groups
                      </h2>
                      <p className={`${isHome ? "text-[20px]" : "text-[15px]"} text-white-400`}>
                        On Campus · Netaji Subhas University Of Technology
                      </p>
                    </div>
                  </div>

          {/* RIGHT */}
          <div className="flex flex-col items-end gap-3">
            {isHome && <span className="text-[20px] text-gray-300 mb-5">Connect with us</span>
            }
            <div className="flex items-center gap-12">
              <SocialIcons variant={isContact ? "contact" : "home"} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
