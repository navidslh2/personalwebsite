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
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


export const headerData = [
    {id:1, name:'خانه', ref:'home' },
    {id:2, name:'درباره من', ref:'aboutMe'},
    {id:3, name:'مهارت ها', ref:'skills'},
    {id:4, name:'پروژه ها', ref:'projects'}
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
    {id:11,icon: <FaGithub /> , name: "github", color:'text-black'},
]

export const projects = [
    {id:1, href:'https://navidsalehi-cv.ir/', image:'applenic.png', title:'فروشگاه آنلاین', describe:'این پروژه نسخه‌ای بازسازی‌شده از وب‌سایت www.apple-nic.com   است. در این پروژه ساختار کامل یک فروشگاه آنلاین شامل نمایش محصولات، فیلترها، سبدخرید، لاگین و جزئیات محصول اجرا شده تا عملکرد و طراحی سایت اصلی به‌صورت واقعی شبیه‌سازی شود'},
    {id:2, href:'https://memorycardgame1.vercel.app/', image:'memorycardgame.png', title:'بازی کارت حافظه', describe: 'بازی کارت حافظه با چند سطح سختی (۴×۴، ۸×۸ و ۱۶×۱۶) شامل سیستم امتیازدهی، تایمر، ثبت بهترین رکورد و مودال پایان بازی با امکان شروع مجدد.'},

]

export const socialMediaIcon =[
    {id:1,icon:<FaGithub /> , tooltip:'گیت هاب',href:'https://github.com/navidslh2', className:'text-black'},
    {id:2,icon:<FaInstagram /> , tooltip:'اینستاگرام', href:'https://instagram.com/navidslh', className:'text-red-400'},
    {id:3,icon:<FaLinkedin /> , tooltip:'لینک دین',href:'https://www.linkedin.com/in/navid-salehi-3b4a57341', className:'text-blue-600'},
    {id:4,icon:<FaTelegram /> , tooltip:'تلگرام',href:'https://t.me/navidslh', className:'text-blue-400'},
]

