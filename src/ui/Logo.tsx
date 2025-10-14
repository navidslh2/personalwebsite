import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props{
  mobileMenuHandler?:()=> void
}

const Logo = ({mobileMenuHandler}:Props) => {
  return (
    <Link className="group flex items-center font-bold gap-3 relative" href={"/"} onClick={mobileMenuHandler}>
      <div>
        <Image src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/logo.png`}  alt="logo" width={30} height={30} className="rounded-full"/>
      </div>
      <span className="textStyle hoverEffect">
        نوید صالحی
      </span>
      <span className="hidden group-hover:block absolute bottom-[-30px] left-1/2 bg-white text-black p-1 whitespace-nowrap font-thin text-sm rounded-xs">صفحه اصلی</span>
    </Link>
  );
};

export default Logo;
