'use client'

import AboutMe from "@/component/aboutMe/AboutMe";
import Main from "@/component/main/Main";



export default function Home() {
  return (
    <div className=" bg-gray-800">
      <Main />
      <AboutMe />
    </div>
  );
}
