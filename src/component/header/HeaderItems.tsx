import { headerData } from "@/lib/data";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    className?:string
}

const HeaderItems = ({className}: Props) => {
  return (
      <ul className={cn("text-white flex gap-4 xl:gap-10 items-center justify-center ", className)}>
        {headerData.map((item, index) => (
          <li
            key={index}
            className="hover:text-blue-400 hoverEffect cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
  );
};

export default HeaderItems;
