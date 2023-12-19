import Image from "next/image";
import { experiences } from "../components/Experiences";

const Experience = () => {
  return (
    <main>
      <div className="font-RobotInvaders text-2xl md:text-4xl underline items-center justify-center flex flex-row mt-16">
        Work Experience
      </div>
      <div className="flex items-center justify-center mt-12">
        <ul className="flex flex-col items-center text-center justify-center text-light-black mx-10 w-2/3 lg:w-1/2 mb-12">
          {experiences.map((experience, ind) => {
            return (
              <ExperienceCard key={ind}>
                <div className="justify-center">
                  <p className="text-center font-RobotInvaders text-2xl tracking-wide hover:underline hover:text-red">
                    <a href={experience.url} target="_blank">
                      {experience.position}
                    </a>
                  </p>
                  <p className="text-center text-red font-RobotInvaders text-xl tracking-wider">
                    {experience.time}
                  </p>
                  <p className="text-center font-RobotInvaders text-base items-center mb-12 tracking-wider w-full">
                    {experience.description}
                  </p>
                </div>{" "}
              </ExperienceCard>
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
