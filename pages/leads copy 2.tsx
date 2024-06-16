"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "../components/Gradient";
import { useEffect } from "react";
import "../app/globals.css"
import Head from "next/head";
import Footer from "@/components/Footer";
import { Nav } from "@/components/Nav";
// import "../app/globals.css";
// import "../style/style2.css";
// import "../style/style.css";
// import "../style/tableStyle.css";
import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import("@/components/SearchBar"), {
  ssr: false,
});

export default function Home() {
  // useEffect(() => {
  //   gradient.initGradient("#gradient-canvas");
  // }, []);
  // min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-hidden
  return (
    <AnimatePresence>
      <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col relative bg-[#F2F3F5] font-inter overflow-hidden">
      <Nav />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <p className="border rounded-2xl py-1 px-4 text-sm mb-5 hover:scale-105  rotating-text-wrapper">
          <span>
            <b>Excellence</b> yields <b>Opportunities</b>
          </span>
          <span>
            Think <b>Bias for Action</b>
          </span>
          <span>
            <b>89,982</b> Leads generated so far
          </span>
        </p>
        <br />
        <br />
        <h1 className="sm:text-7xl text-3xl max-w-[708px] sm:max-w-[1100px] font-bold">
          Ambition is the first step towards
          <span className="sm:text-7xl ml-5 text-3xl font-bold gradient">
            SUCCESS
          </span>
        </h1>
        <br />
        <SearchBar/>
        <br />
        <br />
      </main>
      <Footer />
      </div>
    </AnimatePresence>
  );
}