"use client";

import { motion } from "framer-motion";
import AboutModal from "@/components/about-modal";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-12">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-gray-700">
                <img
                  src="/images/profile.jpg"
                  alt="Chukwuma Ugwu Emmanuel"
                  className="w-60 h-72 rounded-xl object-cover border-2 border-gray-600"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">3+ YRS</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-5 text-gray-300"
          >
            <h3 className="text-2xl font-bold text-white">
              Full-Stack & React Native Developer
            </h3>
            <p className="leading-relaxed text-base">
              Hi, I'm <span className="text-blue-400 font-medium">Chukwuma Ugwu Emmanuel</span>.  
              I began as a frontend developer building responsive web apps with{" "}
              <span className="text-purple-400">React, Next.js, TypeScript, and Tailwind</span>.  
              Over time, I transitioned into a full-stack role, adding{" "}
              <span className="text-green-400">Node.js and PostgreSQL</span> to my toolkit, and I now build 
              robust back-end APIs and full solutions.
            </p>
            <p className="leading-relaxed text-base">
              Recently, I’ve expanded into{" "}
              <span className="text-cyan-400 font-medium">React Native</span>, creating cross-platform mobile 
              apps that share logic with the web. I love solving real-world problems, writing clean code, 
              and shipping production-ready products.
            </p>

            {/* Stats Grid with Hover */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { title: "Experience", value: "3+ Years", color: "blue" },
                { title: "Projects", value: "10+ Completed", color: "purple" },
                { title: "Specialization", value: "Full Stack Developer", color: "green" },
                { title: "Availability", value: "Open to Work", color: "pink" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59,130,246,0.4)" }}
                  className="bg-gray-800/60 p-4 rounded-lg border border-gray-700 text-center transition-colors"
                >
                  <h4 className={`font-semibold text-${item.color}-400 mb-1 text-sm`}>
                    {item.title}
                  </h4>
                  <p className="text-gray-200 text-sm">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <AboutModal />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
