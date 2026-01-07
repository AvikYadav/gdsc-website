import localFont from "next/font/local";
import Image from "next/image";
import PhysicsDecoration from "./PhysicsDecoration";

const neueMontreal = localFont({
    src: [
        {path: "../../public/fonts/NeueMontreal-Regular.otf", weight: "400"},
        {path: "../../public/fonts/NeueMontreal-Medium.otf", weight: "500"},
        {path: "../../public/fonts/NeueMontreal-Bold.otf", weight: "700"},
    ],
});

const productSans = localFont({
    src: [
        {path: "../../public/fonts/ProductSans-Regular.ttf", weight: "400"},
        {path: "../../public/fonts/ProductSans-Medium.ttf", weight: "500"},
        {path: "../../public/fonts/ProductSans-Bold.ttf", weight: "700"},
    ],
});

export default function ContactsPage() {
    return (
        <>
            <PhysicsDecoration/>
            <main className="relative z-10 min-h-screen pointer-events-none bg-white px-10 py-24 text-[#3A3A3A]">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">


                    {/* Left section */}
                    <section className="space-y-10 text-left items-start">

                        {/* Heading */}
                        <h1 className={`${neueMontreal.className} text-[96px] font-medium leading-[1.01] tracking-normal`}>
              <span className="inline-flex items-center gap-4">
                Let’s make
                <Image
                    src="/contacts/arrow 1.png"
                    alt="Arrow"
                    width={48}
                    height={48}
                    className="inline-block"
                />
              </span>
                            <br/>
                            something{" "}
                            <span className="text-blue-500">creative</span>
                        </h1>

                        {/* Contact */}
                        <div className="space-y-10">
                            <h2
                                className={`
                ${neueMontreal.className}
                text-[64px]
                font-medium
                leading-[1]
                tracking-normal
                flex
                items-center
                gap-4
                whitespace-nowrap
              `}
                            >
                                Contact Us
                                <Image
                                    src="/contacts/icon.png"
                                    alt="Send"
                                    width={40}
                                    height={40}
                                    className="inline-block"
                                />
                            </h2>


                            {/* Form */}
                            <form className="space-y-4 max-w-sm">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm focus:outline-none"
                                />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-md border border-gray-400 px-4 py-2 text-sm focus:outline-none"
                                />
                            </form>
                        </div>

                        {/* Address */}
                        <address
                            className={`${productSans.className} not-italic text-[28px] leading-[35px] font-normal tracking-normal`}
                        >

                            <p>Netaji Subhas University of Technology, Azad</p>
                            <p>Hind Fauj Marg, Dwarka Sector-3, Dwarka,</p>
                            <p>Delhi, 110078, India</p>
                        </address>

                    </section>


                </div>
            </main>
        </>
    );
}
