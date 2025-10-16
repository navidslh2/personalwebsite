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

export const headerData = ['درباره من','توانایی ها','پروژه ها']

export const icons = [
    {icon: <FaHtml5 /> , name: "html", color:'text-orange-500'},
    {icon: <FaCss3 /> , name: "css", color:'text-blue-600'},
    {icon: <BiLogoJavascript /> , name: "javascript", color:'text-yellow-400'},
    {icon: <BiLogoTailwindCss /> , name: "tailwind", color:'text-blue-500'},
    {icon: <FaReact /> , name: "react", color:'text-blue-400'},
    {icon: <BiLogoTypescript /> , name: "typescript", color:'text-blue-400'},
    {icon: <RiNextjsFill /> , name: "next.js", color:'text-black'},
    {icon: <FaBootstrap /> , name: "bootstrap", color:'text-fuchsia-600'},
    {icon: <AiOutlineConsoleSql /> , name: "aql", color:'text-black'},
    {icon: <FaPython /> , name: "python", color:''},
]