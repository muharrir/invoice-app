"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/images/logo.png";
import profile from "../../../../public/images/profile.png";
import iconSun from "../../../../public/icons/icon-sun.svg";
import iconMoon from "../../../../public/icons/icon-moon.svg";
import useDarkMode from "@/hooks/useDarkMode";
import { motion } from "framer-motion";

const Navbar = () => {
  const [colorTheme, setColorTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    setColorTheme(colorTheme);
    setDarkSide((state) => !state);
  };

  const transition = {
    type: "spring",
    stiffnes: 200,
    damping: 10,
  };

  return (
    <>
      {/* Navbar Mobile */}
      <div className="lg:hidden h-[80px] z-50 p-4 duration-300 ease-in-out dark:bg-[#1e2139] bg-[#373b53] flex items-center justify-end">
        {/* Image Logo */}
        <Image
          src={logo}
          alt="logo"
          className="w-[80px] absolute top-0 left-0"
        />

        {/* Item */}
        <div className="flex items-center">
          {/* DarkMode Button */}
          {colorTheme === "light" ? (
            <motion.div
              className="cursor-pointer w-6"
              onClick={toggleDarkMode}
              initial={{
                scale: 0.6,
                rotate: 90,
              }}
              animate={{
                scale: 1,
                rotate: 360,
                transition,
              }}
              whileTap={{
                scale: 0.9,
                rotate: 15,
              }}
            >
              <Image src={iconSun} alt="icon-sun" className="w-full" />
            </motion.div>
          ) : (
            <motion.div
              className="cursor-pointer w-6"
              onClick={toggleDarkMode}
              initial={{
                rotate: 45,
              }}
              animate={{
                scale: 1,
                rotate: 360,
                transition,
              }}
              whileTap={{
                scale: 0.9,
                rotate: 15,
              }}
            >
              <Image
                src={iconMoon}
                alt="icon-moon"
                className="w-full"
                onClick={toggleDarkMode}
              />
            </motion.div>
          )}

          <div className="h-[80px] border-dotted border-l border-[#494e6e] mx-6"></div>

          <div className="relative">
            <Image
              src={profile}
              alt="img-profile"
              className="rounded-full object-fill w-[50px] h-[50px]"
            />
          </div>
        </div>
      </div>

      {/* Sidebar Desktop */}
      <div className="z-50 hidden lg:block">
        <div className="fixed w-[100px] h-screen dark:bg-[#1e2139] bg-[#373b53] top-0 left-0 rounded-r-3xl">
          <div className="h-full flex flex-col w-full  justify-between items-center ">
            {/* Image Logo */}
            <Image src={logo} alt="logo" className="w-[100px] top-0 left-0" />

            {/* Bottom Item */}
            <div className="flex flex-col items-center">
              {colorTheme === "light" ? (
                <motion.div
                  className="cursor-pointer w-6"
                  onClick={toggleDarkMode}
                  initial={{
                    scale: 0.6,
                    rotate: 90,
                  }}
                  animate={{
                    scale: 1,
                    rotate: 360,
                    transition,
                  }}
                  whileTap={{
                    scale: 0.9,
                    rotate: 15,
                  }}
                >
                  <Image src={iconSun} alt="icon-sun" className="w-full" />
                </motion.div>
              ) : (
                <motion.div
                  className="cursor-pointer w-6"
                  onClick={toggleDarkMode}
                  initial={{
                    rotate: 45,
                  }}
                  animate={{
                    scale: 1,
                    rotate: 360,
                    transition,
                  }}
                  whileTap={{
                    scale: 0.9,
                    rotate: 15,
                  }}
                >
                  <Image
                    src={iconMoon}
                    alt="icon-moon"
                    className="w-full"
                    onClick={toggleDarkMode}
                  />
                </motion.div>
              )}

              {/* Dotted Line */}
              <div className="w-[100px] my-6 border-dotted border-t border-[#494e6e]"></div>

              {/* Profile */}
              <div className="relative mb-4">
                <Image
                  src={profile}
                  alt="profile"
                  className="object-cover rounded-full w-[50px] h-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
