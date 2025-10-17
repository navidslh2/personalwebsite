'use client'

import AboutMe from "@/component/aboutMe/AboutMe";
import Main from "@/component/main/Main";
import Skills from "@/component/skills/Skills";
import Projects from "@/component/projects/Projects";



export default function Home() {
  return (
    <div className=" bg-gray-800">
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}
