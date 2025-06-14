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
    category: "Design & Tools",
    color: "from-green-400 to-emerald-400",
    skills: [
      { name: "UI/UX Design", level: 85 },
      { name: "Figma", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "User Research", level: 80 },
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
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                <h3
                  className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 0.8,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                          viewport={{ once: false }}
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
