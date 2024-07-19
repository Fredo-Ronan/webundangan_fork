"use client";

import { motion, useAnimation } from "framer-motion";

import CountdownTimer from "./items/countdownTimer";

export default function Time() {
  const weddingDate = new Date("2024-09-07T10:00:00");
  return (
    <div
      className="h-screen lg:hidden md:hidden"
      style={{
        backgroundImage: `url('/Page1/cover.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-t from-pinkLighter via-transparent via-45% to-transparent h-screen flex justify-center items-center">
        <div className="mt-96 flex justify-center">
          <div className="text-center">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <p className="font-sans font-semibold text-base text-white">
                THE WEDDING OF
              </p>
              <p className="font-dancing font-medium text-6xl text-cream">
                Garry & Kezia
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center mt-5"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <CountdownTimer date={weddingDate} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
