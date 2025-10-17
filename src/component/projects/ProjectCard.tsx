
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";

interface Props {
  data: {
    id: number;
    image: string;
    title: string;
    describe: string;
    git: string;
  };
}

const ProjectCard = ({ data }: Props) => {
  const {
    image,
    title,
    describe,
    git,
  } = data;

  const MotionLink = motion(Link);
  return (
    <MotionLink
      href="#"
      className="bg-gray-900 w-[300px] h-[350px] rounded-xl flex flex-col  justify-between relative overflow-hidden"
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        variants={{
          initial: { opacity: 1 },
          hover: {
            opacity: 0.2,
            position: "absolute",
            scale: 1.7,
            top: "70px",
            overflow: "hidden",
          },
        }}
        transition={{ duration: 0.5, ease: easeIn }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${image}`}
          alt="projectImage"
          width={299}
          height={299}
          className="rounded-t-xl"
        />
      </motion.div>
      <div className="w-[300px] h-[190px] px-5 flex flex-col justify-between pb-7">
        <div className="flex flex-col gap-2">
          <h2 className="text-white pt-5">{title}</h2>

          <div className="text-justify text-white text-sm ">
            <motion.p 
            variants={{initial:{whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}, hover:{whiteSpace:'normal', textOverflow:'clip', lineHeight:2, paddingBottom:5,}}}
            transition={{ duration: 0.7, ease: easeIn }}
            >{describe}</motion.p>
          </div>
        </div>
        <Link href={git} className="relative w-fit group pt-5">
          <FaGithub size={20} />
        </Link>
      </div>
    </MotionLink>
  );
};

export default ProjectCard;
