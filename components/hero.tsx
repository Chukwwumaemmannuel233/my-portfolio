"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, x: 180 }} // deeper slide from below
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }} // custom ease for dramatic entrance
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-3xl font-bold">
              CUE
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Chukwuma Ugwu Emmanuel
          </h1>
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Frontend Developer & UI/UX Designer
            </p>
            <p className="text-lg text-blue-400 mb-8">
              React • Next.js • TypeScript • Node.js
            </p>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate Frontend Developer with 3+ years of experience crafting
            beautiful, responsive, and user-centered digital experiences. I
            specialize in modern web technologies and love turning complex
            problems into elegant solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-gray-200"
            onClick={() =>
              window.open(
                "mailto:echukwuma561@gmail.com?subject=Resume Request&body=Hi Chukwuma, I would like to request your resume.",
                "_blank"
              )
            }
          >
            Request Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/Chukwwumaemmannuel233"
            className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/chukwuma-emmanuel-53386236b/"
            className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:echukwuma561@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="tel:+2348161770490"
            className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-gray-500" />
        </div>
      </motion.div>
    </section>
  );
}
