"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isHoveredLinkedin, setIsHoveredLinkedin] = useState(false);
  const [isHoveredGithub, setIsHoveredGithub] = useState(false);
  const [isHoveredResume, setIsHoveredResume] = useState(false);
  const [isHoveredMail, setIsHoveredMail] = useState(false);
  return (
    <div className="flex flex-row">
      <div className="font-robot-invaders mt-8 ml-8 mr-4 w-fit whitespace-nowrap">
        <span className="text-8xl tracking-wider">Ashish Job</span>
        <div className="bg-red h-8 mb-2"></div>
        <span className="text-2xl justify-between tracking-wider">
          Computer Science @ University of Houston
        </span>
      </div>
      <div className="bg-black w-2 mt-12"></div>
      <style jsx>{`
  .image {
    width: 75px;
    height: 75px;
  }
  @media (min-width: 1450px) {
    .image {
      width: 100px;
      height: 100px;
    }
  }
`}</style>
      <div className="flex items-center mt-10 flex-shrink-0 select-none">

        <Link href="https://www.linkedin.com/in/ashish-job/" target="_blank">
          <Image
            src={
              isHoveredLinkedin ? "/clickedLinkedin.svg" : "/openLinkedin.svg"
            }
            width={75}
            height={75}
            className="ml-4 mr-4 hover:animate-pulse flex-col"
            alt=""
            onMouseOver={() => setIsHoveredLinkedin(true)}
            onMouseOut={() => setIsHoveredLinkedin(false)}
          />
        </Link>
        <Link href="https://github.com/Ashishjob" target="_blank">
          <Image
            src={isHoveredGithub ? "/clickedGithub.svg" : "/openGithub.svg"}
            width={75}
            height={75}
            className="mx-2 hover:animate-pulse"
            alt=""
            onMouseOver={() => setIsHoveredGithub(true)}
            onMouseOut={() => setIsHoveredGithub(false)}
          />
        </Link>
        <Link
          href="https://www.ashishjob.com/Ashish_Job_Resume.pdf"
          target="_blank"
        >
          <Image
            src={isHoveredResume ? "/clickedResume.svg" : "/openResume.svg"}
            width={75}
            height={75}
            className="mx-2 hover:animate-pulse"
            alt=""
            onMouseOver={() => setIsHoveredResume(true)}
            onMouseOut={() => setIsHoveredResume(false)}
          />
        </Link>
        <Link href="mailto:your-ashishjob104@gmail.com" target="_blank">
          <Image
            src={isHoveredMail ? "/clickedMail.svg" : "/openMail.svg"}
            width={75}
            height={75}
            className="ml-4 hover:animate-pulse"
            alt=""
            onMouseOver={() => setIsHoveredMail(true)}
            onMouseOut={() => setIsHoveredMail(false)}
          />
        </Link>
      </div>
    </div>
  );
}
