import { headerData } from "@/lib/data";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    className?:string
    backdropHandler?:()=>void
}

const HeaderItems = ({className, backdropHandler}: Props) => {
  const scrollHandler = (id:string) =>{
    const element = document.getElementById(id)
    element?.scrollIntoView({behavior:"smooth"})
    if(backdropHandler) backdropHandler();
  }
  return (
      <ul className={cn("text-white flex gap-4 xl:gap-10 items-center justify-center ", className)}>
        {headerData.map((item, index) => (
          <li
            key={index}
            className="hover:text-blue-400 hoverEffect cursor-pointer"
            onClick={()=>scrollHandler(item.ref)}    
          >
            {item.name}
          </li>
        ))}
      </ul>
  );
};

export default HeaderItems;
