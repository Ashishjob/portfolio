import Image from "next/image";
import { experiences } from "../components/Experiences";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import React, { createContext } from 'react';

const Experience = () => {
  const [ ref1, inView ] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <main>
      <div className=" text-2xl md:text-4xl underline items-center justify-center flex flex-row mt-16">
        Work Experience
      </div>
      <div className="flex items-center justify-center mt-12">
      <ul className="flex flex-col items-center text-left justify-center text-light-black mx-10 w-2/3 lg:w-1/2 mb-12">
  {experiences.map((experience, ind) => {
    

    return (
      <motion.div
        ref={ref1}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ delay: ind * 0.2 }}
        key={ind}
      >
        <div className="justify-center">
          <p className="text-left text-xl md:text-2xl tracking-wide hover:underline hover:text-red">
            <a href={experience.url} target="_blank">
              {experience.position}
            </a>
          </p>
          <p className="text-left text-red md:text-xl tracking-wider my-2">
            {experience.time}
          </p>
          <p className="text-left text-sm md:text-base items-center mb-12 tracking-widest md:tracking-wider">
            {experience.description}
          </p>
        </div>
      </motion.div>
    );
  })}
</ul>
      </div>
    </main>
  );
};

export default Experience;

interface ExperienceProps {
  key: number;
  children: React.ReactNode;
}

const ExperienceCard = (props: ExperienceProps) => {
  return <li>{props.children}</li>;
};
