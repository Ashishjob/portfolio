import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const projects = [
  {
    image: "/portfolioProject.svg",
    title: "portfolio",
    description: "responsive website built to showcase projects and experience.",
    icons: ["nextjs", "ts", "tailwind", "figma"],
    url: "https://github.com/Ashishjob/HorizontalPortfolioWebsite",
    demo: "https://ashishjob.com",
    code: "h",
  },
  {
    image: "/admin1.gif",
    title: "admin portal",
    description:
      "full-stack web-application that streamlines adminstrative duties",
    icons: ["supabase", "ts", "tailwind", "git"],
    url: "https://github.com/Ashishjob/CougarCS-AdminPortal",
    demo: "",
    code: "",
  },
  {
    image: "/tamagotchi1.gif",
    title: "tamacatchi",
    description: "pokemon game constructed with object-oriented programming.",
    icons: ["cpp", "git", "figma"],
    url: "https://github.com/Ashishjob/Pokemon-Tamagotchi-1437",
    demo: "",
    code: "",
  },
  
];

export default function Projects() {
    return (
      <main className="flex flex-col items-center h-screen">
        <div className=" text-2xl md:text-4xl underline items-center justify-center flex flex-row mb-16">
        Projects
      </div>
      <Carousel showThumbs={false} className="h-1/2 w-full lg:w-1/2">
      {projects.map((project, index) => (
  <div key={index} className="flex items-center justify-center h-full">
    <div className="w-1/2">
      <Image
        className="select-none"
        src={project.image}
        alt="Project Image"
        width={50}
        height={50}
      />
    </div>
    <div className="flex flex-col items-start justify-center w-1/2 text-xs lg:text-xl">
      <p>{project.description}</p>
      <ul className="flex flex-row justify-evenly w-full">
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
      <div className="flex justify-evenly items-center mt-8 w-full">
  {project.demo && (
    <button className="hover:bg-red rounded-lg text-primary bg-light-black p-2" onClick={() => window.open(project.demo, "_blank")}>
      View Demo
    </button>
  )}
  {project.code && (
    <button className="hover:bg-red rounded-lg text-primary bg-light-black p-2" onClick={() => window.open(project.code, "_blank")}>
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