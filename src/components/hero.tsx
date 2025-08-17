"use client";
import { motion } from "motion/react";
function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center px-4">
      
      {/* Decorative Borders */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Top Section Content */}
      <div className="py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Your Medical Records, Anytime, Anywhere"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Seamlessly access your medical history with just a few clicks. Safe,
          secure, and hassle-free.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Explore Now
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button>
        </motion.div>

        {/* Image with Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl">
            {/* Background Image */}
            <img
              src="/medeaseimage.webp"
              alt="Landing page preview"
              className="aspect-[16/9] w-full object-cover"
              height={600}
              width={1000}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center text-white p-6">
              <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl">
                Smarter Healthcare at Your Fingertips
              </h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg">
                Access your records, book appointments, and manage your health
                anytime.
              </p>
              <div className="mt-6 flex gap-4">
                <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-all hover:bg-blue-700">
                  Get Started
                </button>
                <button className="rounded-lg border border-white px-6 py-2 font-medium text-white transition-all hover:bg-white hover:text-black">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSectionOne;
