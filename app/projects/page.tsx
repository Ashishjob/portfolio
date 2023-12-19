import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const projectData = [
  {
    image: "/portfolioImage.svg",
    title: "portfolio",
    description:
      "responsive website built to showcase projects and experience.",
    icons: ["nextjs"],
    code: "https://github.com/Ashishjob/portfolio",
    demo: "https://ashishjob.com",
  },
  {
    image: "/portfolioImage.svg",
    title: "portfolio",
    description:
      "responsive website built to showcase projects and experience.",
    icons: ["nextjs"],
    code: "https://github.com/Ashishjob/portfolio",
    demo: "https://ashishjob.com",
  },
  {
    image: "/portfolioImage.svg",
    title: "portfolio",
    description:
      "responsive website built to showcase projects and experience.",
    icons: ["nextjs"],
    code: "https://github.com/Ashishjob/portfolio",
    demo: "https://ashishjob.com",
  },
];

export default function Projects() {
  return (
    <main className="flex flex-col items-center h-screen">
      <div className=" text-2xl md:text-4xl underline items-center justify-center flex flex-row mb-16">
        Projects
      </div>
      <Carousel showThumbs={false} className="h-1/2 w-full lg:w-1/2">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center justify-center h-full"
          >
            <div className="w-full lg:w-1/2">
              <Image
                className="select-none"
                src={project.image}
                alt="Project Image"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2 text-xs md:text-base">
              <h2 className="mb-4 text-sm md:text-xl underline">
                {project.title}
              </h2>
              <p className="mb-4">{project.description}</p>
              <ul className="flex flex-row justify-evenly w-1/2 lg:w-full text-xs">
                {project.icons.map((icon, icon_ind) => (
                  <li key={icon_ind} className="w-8 h-8">
                    <Image
                      src={`/${icon}.svg`}
                      width={50}
                      height={50}
                      alt="icon"
                      className="m-3"
                    />
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-evenly items-center mt-8 w-full text-xs md:text-sm">
                {project.demo && (
                  <button
                    className="hover:bg-red rounded-lg text-primary bg-light-black p-2 mb-2"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    View Demo
                  </button>
                )}
                {project.code && (
                  <button
                    className="hover:bg-red rounded-lg text-primary bg-light-black p-2 mb-2"
                    onClick={() => window.open(project.code, "_blank")}
                  >
                    View Code
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </main>
  );
}
