import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  data: {
    id: number;
    image: string;
    title: string;
    describe: string;
    href:string
  };
}

const ProjectCard = ({ data }: Props) => {
  const { image, title, describe, href } = data;

  const MotionLink = motion(Link);
  return (
    <MotionLink
      href={href}
      className="bg-gray-900 w-[300px] h-[350px] rounded-xl flex flex-col justify-between relative overflow-hidden"
      whileHover="hover"
      initial="initial"
      variants={{ hover: { y: -30, boxShadow: "5px 5px 10px #10101080"} }}
      transition={{ duration: 0.5, ease:'easeIn'  }}
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
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <Image
          src={`/${image}`}
          alt="projectImage"
          width={299}
          height={299}
          className="rounded-t-xl"
        />
      </motion.div>
      <div className="w-[300px] h-[190px] px-5 flex flex-col justify-between pb-7">
        <div className="flex flex-col gap-2">
          <h2 className="text-white pt-7 hoverEffect">{title}</h2>

          <div className="text-justify text-white text-sm ">
            <motion.p
              variants={{
                initial: {
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                },
                hover: {
                  whiteSpace: "normal",
                  textOverflow: "clip",
                  lineHeight: 2,
                  paddingBottom: 5,
                  marginTop:"30px"
                },
              }}
              transition={{ duration: 0.7, ease: "easeIn" }}
            >
              {describe}
            </motion.p>
          </div>
        </div>
      </div>
    </MotionLink>
  );
};

export default ProjectCard;
