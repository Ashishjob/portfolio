"use client";
import { CSSTransition } from "react-transition-group";
import Header from "../header/page";
import { useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Head from "next/head";
import About from "../about/page";

export default function Main() {
    return (
        <main style={{ overflowX: 'hidden', overflowY: 'scroll', height: '100vh' }}>
            <Header />
            <About />
        </main>
    );
}