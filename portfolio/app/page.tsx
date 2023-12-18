"use client";
import { CSSTransition } from "react-transition-group";
import Header from "../app/header/page";
import { useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [finishedTyping, setFinishedTyping] = useState(false);
  const [isWelcomeMessageVisible, setIsWelcomeMessageVisible] = useState(true);

  const handleExitComplete = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setFinishedTyping(true);
  };

  return (
    <main className="flex flex-col bg-primary w-screen h-screen overflow-hidden hidden lg:block">
      <CSSTransition
        in={isWelcomeMessageVisible}
        timeout={500}
        classNames="fade"
        unmountOnExit
        onExited={handleExitComplete}
      >
        <div className="absolute w-full h-full flex items-center justify-center font-robot-invaders whitespace-nowrap">
          <div className="flex items-center justify-center h-screen text-4xl">
            <Image
              src="/panda.gif"
              width={200}
              height={200}
              alt=""
              className="select-none"
            />
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to my portfolio!")
                  .callFunction(() => {
                    setIsWelcomeMessageVisible(false);
                  })
                  .start();
              }}
            />
          </div>
        </div>
      </CSSTransition>
      {finishedTyping && <Header />}
    </main>
  );
}
