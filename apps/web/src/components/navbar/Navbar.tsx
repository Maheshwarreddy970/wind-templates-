"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/logo.png"



export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <NavbarScroll isScrolling={isScrolling} />
        ) : (
          <NavbarFixed />
        )}
      </AnimatePresence>
    </>
  );
}

function NavbarFixed() {
  return (
    <nav className="fixed z-50 flex items-center justify-between w-full px-8 py-2">
      <div className="flex items-center gap-2 text-white">
        <Image src={logo} alt="logo" className="h-8 -mr-1 w-8"></Image>
        <p className=" font-bold text-xl tracking-tighter mt-2	font-mono text-black">Wind Templates</p>
      </div>
    <SquigglyUnderline></SquigglyUnderline>

    </nav>
  );
}

function NavbarScroll({ isScrolling }) {
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed z-20 w-52 h-10 justify-between items-center  bg-black/10 flex rounded-md pr-3 left-1/2 top-10"
    >
        <Image src={logo} alt="logo" className="h-10  w-10"></Image>
      <SquigglyUnderline></SquigglyUnderline>
    </motion.nav>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};




const navigation = [{ name: "Templates" }, { name: "Services" }];

export const SquigglyUnderline = () => {
  const [selectedLink, setSelectedLink] = useState("Home");

  return (
    <div className="flex gap-4">
      {navigation.map((item) => {
        const isSelected = item.name === selectedLink;
        return (
          <div
            key={item.name}
            className={`relative text-sm leading-6 no-underline ${
              isSelected ? "font-semibold text-black" : " text-slate-600"
            }`}
            onClick={() => setSelectedLink(item.name)}
          >
            {item.name}
            {isSelected ? (
              <motion.div className={`absolute  left-3 right-0 h-[1px] bottom-1.5`}>
                <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#7043EC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      strokeDasharray: 84.20591735839844,
                      strokeDashoffset: 84.20591735839844,
                    }}
                    animate={{
                      strokeDashoffset: 0,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  />
                </svg>
              </motion.div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};




