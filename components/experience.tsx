"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const experiences = [
  {
    title: "Frontend Developer",
    company: "SkillzSystems",
    period: "2022 – May 2025",
    description:
      "Developed and maintained multiple frontend projects in collaboration with a remote team. Debugged, optimized, and delivered projects within deadlines, ensuring alignment with design specifications. Gained hands-on experience with Redux through mentorship support, applying it successfully in production projects. Enhanced problem-solving skills while working on real-world applications and improving team collaboration workflows.",
    achievements: [
      "Collaborated remotely using Agile workflows",
      "Implemented Redux in production projects",
      "Improved overall team productivity and code quality",
    ],
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-16 px-4 bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-3xl font-bold text-center text-white mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </motion.div>

        {/* Single Experience Card */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card className="bg-gray-800/90 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-lg md:text-xl text-white">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-blue-400 font-medium text-sm md:text-base">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <span className="text-gray-400 text-xs md:text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, achIndex) => (
                    <li
                      key={achIndex}
                      className="text-gray-400 text-sm md:text-base flex items-start"
                    >
                      <span className="text-green-400 mr-2">•</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
