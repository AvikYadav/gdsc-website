"use client";

interface SectionLabelProps {
    title: string;
    color: "blue" | "yellow" | "red";
}

const colorMap = {
    blue: "bg-[#4285F4]",
    yellow: "bg-[#FBBC04]",
    red: "bg-[#EA4335]",
};

export default function SectionLabel({ title, color }: SectionLabelProps) {
    const words = title.split(" ");

    return (
        <div className={`${colorMap[color]} flex-none rounded-l-2xl flex items-center justify-center shadow-lg w-16 md:w-18 xl:w-24 h-40 md:h-60 xl:h-85 m-10 mx-0`}>
            <div className="rotate-[-90deg] flex flex-col items-center leading-none">
                {words.map((word, index) => (
                    <span
                        key={index}
                        className="text-white font-bold uppercase tracking-tighter font-[family-name:var(--font-Product Sans Medium)] text-md sm:text-lg md:text-3xl xl:text-4xl">
                        {word}
                    </span>
                ))}
            </div>
        </div>
    );
}
