"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeaderImages from "../components/page";

export default function About() {
  return (
    <section className="flex flex-row justify-center items-center text-light-black">
      <div className="flex flex-row bg-primary w-1/2 mt-10">
        <div className="bg-light-black"></div>
        <div className="font-RobotInvaders w-fit text-light-black text-center tracking-widest mx-4 my-4">
        <span className="text-2xl md:text-4xl underline">
            About Me
        </span>
        <br></br><br></br>
            <span className="text-sm md:text-xl">
            Hey! I&apos;m <span className="hover:text-red">Ashish Job</span>, studying <span className="hover:text-red">computer science</span> with a <span className="hover:text-red">minor in mathematics</span> at the University of Houston. I&apos;m really into <span className="hover:text-red">AI</span> and <span className="hover:text-red">software engineering</span>, and outside of tech, I love pandas, volleyball, drawing, manga, and discovering new music.
          </span>
          <br></br><br></br>
          <span className="text-sm md:text-xl">
          Feel free to connect with me on <span className="hover:text-red"><a href="https://www.linkedin.com/in/ashish-job/" target="_blank">LinkedIn</a></span>, check out my work on <span className="hover:text-red"><a href="https://github.com/Ashishjob" target="_blank">GitHub</a></span>, or shoot
          me an <span className="hover:text-red"><a href="mailto:ashishjob104@gmail.com" target="_blank">email</a></span>!
          </span>
        </div>
      </div>
    </section>
  );
}
