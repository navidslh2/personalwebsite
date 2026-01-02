'use client'
import Title from "@/ui/Title";
import ProjectsCards from "./ProjectsCards";
import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/lib/type";

const getProjects = async () => {
  const res = await fetch(`/api/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
};

const Projects =  () => {
   const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/projects", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);
  

  return (
    <div className="w-screen h-screen flex flex-col gap-20 items-center justify-center">
      <Title>پروژه ها</Title>
      <ProjectsCards projects={projects} />
    </div>
  );
};

export default Projects;
