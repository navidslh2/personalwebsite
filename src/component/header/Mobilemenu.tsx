import React from "react";
import HeaderItems from "./HeaderItems";
import Backdrop from "@/ui/Backdrop";
import Logo from "@/ui/Logo";
import { Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isShow: boolean;
  backdropHandler: () => void;
}

const Mobilemenu = ({ isShow, backdropHandler }: Props) => {
  return (
    <AnimatePresence>
      <Backdrop isShow={isShow} backdropHandler={backdropHandler} />
      <div className="relative   ">
        <motion.header
          className="fixed right-5 top-5 bottom-5 w-[200px] z-50 border border-gray-900 rounded-xl shadow-md  bg-gray-800 flex flex-col items-center justify-between py-13 gap-10 origin-right"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className=" flex flex-col gap-8">
            <Logo />
            <HeaderItems className={"flex-col gap-7"} />
          </div>
          <div>
            <div className="flex text-white gap-3 items-center text-sm">
              <span>09128391641</span>
              <Phone size={20} />
            </div>
          </div>
          <div
            className="absolute top-3 right-5 text-white hover:text-blue-400 hoverEffect cursor-pointer"
            onClick={backdropHandler}
          >
            <X />
          </div>
        </motion.header>
      </div>
    </AnimatePresence>
  );
};

export default Mobilemenu;
