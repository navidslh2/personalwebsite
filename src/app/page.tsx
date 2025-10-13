'use client'
import Image from "next/image";
import Typist from "react-typist-component";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-800 flex flex-col items-center justify-center gap-7 ">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/logo.png`}
        width={250}
        height={250}
        alt="logo"
      />
      <div className="text-white w-100 text-4xl flex flex-col items-center justify-center " dir="rtl">
      <Typist typingDelay={100}>
        <div className="font-bold mb-3 bg-gradient-to-l from-[#818f30] via-[#7aa596] to-[#80858a] bg-clip-text text-transparent text-shadow">نوید صالحی هستم</div>
        <div className="bg-amber-100 bg-clip-text text-transparent">برنامه نویس وب</div>
      </Typist>
      </div>
    </div>
  );
}
