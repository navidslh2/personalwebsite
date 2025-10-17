import { icons } from "@/lib/data";
import Title from "@/ui/Title";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 ,delayChildren: 0.3} },
  };
  const icon = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  };

  return (
    <AnimatePresence>
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-10 md:gap-30">
        <Title>مهارت ها</Title>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 2xl:flex gap-x-10 gap-y-5 sm:gap-10 md:gap-18"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {icons.map((item) => (
            <motion.div
              key={item.name}
              className="col-span-1 flex flex-col items-center justify-center gap-2 p-3 hover:border border-[#818f3079] hoverEffect rounded-md hover:shadow-sm shadow-[#818f3079]  hover:-translate-y-1"
              variants={icon}
              transition={{duration:0.5, ease: 'easeInOut'}}
            >
              <div
                className={`text-5xl sm:text-6xl md:text-7xl ${item.color} `}
              >
                {item.icon}
              </div>
              <h3>{item.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default Skills;
