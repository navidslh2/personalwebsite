'use client'
import Title from "@/ui/Title";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({target: ref, offset:['start end', 'end start']})
  const y = useTransform(scrollYProgress,[0,1],[180,-180])

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-15 md:gap-30 " ref={ref}>
      <Title>درباره من</Title>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 2xl:gap-45 px-10 2xl:px-40">
        <motion.div  style={{y}}>
          <Image
            src={"/navid.png"}
            width={350}
            height={350}
            alt="navid"
            className="rounded-full shadow-[0_0_30px_#4a521e]"
          />
        </motion.div>
        <div className="max-w-[600px]">
          <h3 className="flex flex-col text-justify gap-5 leading-8 ">
            <span className="mb-2">سلام! من نوید صالحی‌ام</span>
            <span>
              بعد از چند سال سابقه در حسابداری، علاقه‌م به حل مسئله باعث شد
              تصمیم بگیرم مسیر حرفه‌ای خودم رو به دنیای برنامه‌نویسی تغییر بدم.
            </span>
            <span>
              تمرکزم بر توسعه وب با react است تا بتوانم سایت‌هایی مدرن، رسپانسیو
              و کاربرمحور بسازم. به یادگیری، حل مسئله و ساختن پروژه‌های کاربردی
              علاقه‌مندم و آماده‌ام تا در تیم‌های حرفه‌ای رشد کنم
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
