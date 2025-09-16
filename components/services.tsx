"use client"

import { useRef } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Code,
  Smartphone,
  Globe,
  Users,
  Zap,
  TerminalSquare,
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Responsive, performant web applications built with React, Next.js, and TypeScript using modern best practices.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps for iOS and Android using React Native with native-like performance.",
    features: ["React Native", "Cross-platform", "Native Performance", "App Store Deployment"],
  },
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description:
      "From frontend to backend and deployment, delivering secure and scalable web solutions.",
    features: ["API Integration", "Database Design", "Cloud Deployment", "Security Best Practices"],
  },
  {
    icon: TerminalSquare,
    title: "Development Tools",
    description: "Key tools I use every day to build and ship projects efficiently.",
    features: ["VS Code", "Postman", "Namecheap", "Git & GitHub"],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Strong communication and agile teamwork for smooth project delivery.",
    features: ["Scrum/Agile", "Git Workflow", "Code Reviews", "Jira/Trello"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Improving speed, SEO, and user experience with advanced optimization techniques.",
    features: ["Core Web Vitals", "SEO", "Bundle Optimization", "Caching Strategies"],
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 px-4 bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Services & Expertise
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            From frontend to full-stack and mobile development, I build
            high-quality applications with clean, maintainable code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card className="h-full bg-gray-900/60 border border-gray-700 rounded-2xl backdrop-blur hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
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
