'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectData } from "../components/Projects";

export default function Projects() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="items-center h-screen">
      <div className=" items-center justify-center flex flex-col">
        <span className="text-2xl md:text-4xl underline">Projects</span>
        <span className="text-base mt-2 animate-pulse">
          Slide to see the projects
        </span>
      </div>
      {/* <Slider {...settings} className="">
        {projectData.map((project, index) => (
          <div key={index} className="flex flex-col items-center h-full">
            <div className="m-4 p-4 lg:w-1/2 mx-auto">
              <Image
                className="select-none rounded-3xl"
                src={project.image}
                alt="Project Image"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-xl md:text-3xl underline text-left w-2/3">
                {project.title}
              </h2>
              <p className="mb-4 text-base md:text-xl text-left w-2/3">
                {project.description}
              </p>
              <ul className="flex text-xs text-left w-2/3">
                {project.icons.map((icon, icon_ind) => (
                  <li key={icon_ind} className="w-8 h-8 lg:w-12 lg:h-12 mr-8">
                    <div
                      onMouseEnter={() => setHoveredIcon(icon)}
                      onMouseLeave={() => setHoveredIcon(null)}
                      className="relative"
                    >
                      <Image
                        src={`/${icon}.svg`}
                        width={50}
                        height={50}
                        alt="icon"
                        className="select-none rounded-lg"
                      />
                      {hoveredIcon === icon && (
                        <div className="whitespace-nowrap absolute top-0 left-0 bg-primary border-2 border-light-black text-xs px-2 py-1 rounded">
                          {icon}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-row items-center mt-8 lg:mt-4 text-xs md:text-sm text-left w-2/3">
                {project.demo && (
                  <button
                    className="hover:bg-red rounded-lg text-primary mr-6 bg-light-black p-2 mb-2"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    View Demo
                  </button>
                )}
                {project.code && (
                  <button
                    className="hover:bg-red rounded-lg text-primary mr-6 bg-light-black p-2 mb-2"
                    onClick={() => window.open(project.code, "_blank")}
                  >
                    View Code
                  </button>
                )}
                {project.presentation && (
                  <button
                  className="hover:bg-red rounded-lg text-primary mr-6 bg-light-black p-2 mb-2"
                  onClick={() => window.open(project.presentation, "_blank")}
                >
                  View Presentation
                </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider> */}
    </main>
  );
}
