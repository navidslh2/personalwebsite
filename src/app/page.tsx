'use client'

import AboutMe from "@/component/aboutMe/AboutMe";
import Cards from "@/component/projectsCard/ProjectsCards";
import Main from "@/component/main/Main";
import Skills from "@/component/skills/Skills";



export default function Home() {
  return (
    <div className=" bg-gray-800">
      <Main />
      <AboutMe />
      <Skills />
      <Cards />
    </div>
  );
}
