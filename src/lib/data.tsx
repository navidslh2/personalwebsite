import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';
import { FaBootstrap } from 'react-icons/fa';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { FaPython } from 'react-icons/fa';
import { describe } from 'node:test';

export const headerData = [
    {id:1, name:'درباره من'},
    {id:2, name:'توانایی ها'},
    {id:3, name:'پروژه ها'}
    ]

export const icons = [
    {id:1,icon: <FaHtml5 /> , name: "html", color:'text-orange-500'},
    {id:2,icon: <FaCss3 /> , name: "css", color:'text-blue-600'},
    {id:3,icon: <BiLogoJavascript /> , name: "javascript", color:'text-yellow-400'},
    {id:4,icon: <BiLogoTailwindCss /> , name: "tailwind", color:'text-blue-500'},
    {id:5,icon: <FaReact /> , name: "react", color:'text-blue-400'},
    {id:6,icon: <BiLogoTypescript /> , name: "typescript", color:'text-blue-400'},
    {id:7,icon: <RiNextjsFill /> , name: "next.js", color:'text-black'},
    {id:8,icon: <FaBootstrap /> , name: "bootstrap", color:'text-fuchsia-600'},
    {id:9,icon: <AiOutlineConsoleSql /> , name: "aql", color:'text-black'},
    {id:10,icon: <FaPython /> , name: "python", color:''},
]

export const projects = [
    {id:1, image:'applenic.png', title:'فروشگاه آنلاین', describe:'این پروژه نسخه‌ای بازسازی‌شده از وب‌سایت www.apple-nic.com   است. در این پروژه ساختار کامل یک فروشگاه آنلاین شامل نمایش محصولات، فیلترها، سبدخرید، لاگین و جزئیات محصول اجرا شده تا عملکرد و طراحی سایت اصلی به‌صورت واقعی شبیه‌سازی شود', firstDescribe:"این پروژه نسخه‌ای بازسازی‌شده از وب‌سایت ", referenceSite:'www.apple-nic.com', secondDescribe:" است. در این پروژه ساختار کامل یک فروشگاه آنلاین شامل نمایش محصولات، فیلترها، سبدخرید، لاگین و جزئیات محصول اجرا شده تا عملکرد و طراحی سایت اصلی به‌صورت واقعی شبیه‌سازی شود." , git:'https://github.com/navidslh2/onlineshop-apple-nic'},
    {id:2, image:'applenic.png', title:'فروشگاه آنلاین', describe:"یبیبیبی" ,git:"#"}
]