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
    title: "Senior Frontend Developer",
    company: "SkillzSystems.",
    period: "2022 - Present",
    description:
      "Leading frontend development projects using React, Next.js, and TypeScript. Collaborated with cross-functional teams using Agile/Scrum methodologies.",
    achievements: [
      "Improved application performance by 40%",
      "Led a team of 3 junior developers",
      "Implemented responsive designs for 3+ projects",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Idonline Services",
    period: "2021 - 2022",
    description:
      "Developed responsive web applications and mobile apps using React Native. Worked closely with UI/UX designers to implement pixel-perfect designs.",
    achievements: [
      "Built 1+ responsive web applications",
      "Developed 1 React Native mobile apps",
      "Reduced development time by 30% through reusable components",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company: "K.A.V Textiles",
    period: "2020 - 2021",
    description:
      "Started my journey in web development, focusing on HTML, CSS, JavaScript, and React. Gained experience in version control with Git and project management tools.",
    achievements: [
      "Built 1+ responsive web applications",
      "Learned modern development workflows",
      "Contributed to open-source projects",
    ],
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 px-4 bg-gray-900 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const fromLeft = index % 2 !== 0
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 * index,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-white">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-blue-400 font-medium">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <span className="text-gray-400 text-sm mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-gray-400 flex items-start"
                        >
                          <span className="text-green-400 mr-2">•</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
