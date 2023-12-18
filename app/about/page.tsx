"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeaderImages from "../components/page";
import { Rubik_80s_Fade } from "next/font/google";

export default function About() {
  return (
    <section className="flex flex-row justify-center items-center text-light-black">
      <div className="flex flex-row bg-primary h-96 w-1/2 mt-10">
        <div className="bg-light-black"></div>
        <div className="font-robot-invaders w-fit text-light-black text-center tracking-widest mx-4 my-4">
        <span className="text-2xl md:text-4xl underline">
            about me
        </span>
        <br></br><br></br>
            <span className="text-sm md:text-xl">
            Hey! I&apos;m Ashish Job, studying computer science with a minor in math at the University of Houston. I&apos;m really into AI and software engineering, and outside of tech, I love pandas, volleyball, drawing, manga, and discovering new music.
          </span>
          <br></br><br></br>
          <span className="text-sm md:text-xl">
          Feel free to connect with me on LinkedIn, check out my work on GitHub, or shoot
          me an email!
          </span>
        </div>
      </div>
    </section>
  );
}
