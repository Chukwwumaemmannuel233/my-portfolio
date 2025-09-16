"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Frontend Development",
    color: "from-blue-400 to-cyan-400",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Mobile & Backend",
    color: "from-purple-400 to-pink-400",
    skills: [
      { name: "React Native", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Development Tools",
    color: "from-orange-400 to-red-400",
    skills: [
      { name: "Git", level: 90 },
      { name: "Vercel", level: 85 },
      { name: "Jira", level: 80 },
      { name: "Scrum/Agile", level: 85 },
      { name: "Postman", level: 85 },
      { name: "Namecheap", level: 80 },
      { name: "VS Code", level: 95 },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 px-4 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 overflow-hidden"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="group relative bg-gray-800/40 backdrop-blur-md p-6 rounded-2xl border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(0,255,200,0.3)]">
                <h3
                  className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.category}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1.5">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-gray-200">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 0.8,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
