"use client"

import { motion } from "framer-motion"
import AboutModal from "@/components/about-modal"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Slide from Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-gray-700">
                <img
                  src="/images/profile.jpg"
                  alt="Chukwuma Ugwu Emmanuel"
                  className="w-64 h-80 rounded-xl object-cover border-2 border-gray-600"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">3+ YRS</span>
              </div>
            </div>
          </motion.div>

          {/* Text Slide from Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Frontend Developer & UI/UX Designer</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Hello! I'm <span className="text-blue-400 font-semibold">Chukwuma Ugwu Emmanuel</span>, a passionate
                Frontend Developer with over 3 years of experience in creating exceptional digital experiences. I
                specialize in building responsive, user-friendly web applications using modern technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My expertise spans across{" "}
                <span className="text-purple-400">React, Next.js, TypeScript, and Tailwind CSS</span>, with additional
                skills in <span className="text-green-400">Node.js development</span>. I'm passionate about clean
                code, innovative design solutions, and creating seamless user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I also have experience in{" "}
                <span className="text-pink-400">UI/UX design, user research, and responsive design</span>, which helps
                me bridge the gap between design and development effectively.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-blue-400 mb-2">Experience</h4>
                <p className="text-gray-300">3+ Years</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-purple-400 mb-2">Projects</h4>
                <p className="text-gray-300">25+ Completed</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-green-400 mb-2">Specialization</h4>
                <p className="text-gray-300">Frontend & UI/UX</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-pink-400 mb-2">Availability</h4>
                <p className="text-gray-300">Open to work</p>
              </div>
            </div>

            <div className="pt-6">
              <AboutModal />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
