"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Palette, Globe, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications using React, Next.js, and TypeScript with modern best practices.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications with React Native for both iOS and Android platforms.",
    features: ["React Native", "Cross-platform", "Native Performance", "App Store Deployment"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and experiences with focus on usability and modern design principles.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web development with modern technologies, from frontend to backend and deployment.",
    features: ["Full-stack Development", "API Integration", "Database Design", "Cloud Deployment"],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working effectively in agile teams using modern project management tools and methodologies.",
    features: ["Scrum/Agile", "Jira", "Git Workflow", "Code Reviews"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, SEO, and user experience with modern development techniques.",
    features: ["Core Web Vitals", "SEO Optimization", "Bundle Optimization", "Caching Strategies"],
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} id="services" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Services & Expertise
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            I offer a comprehensive range of development and design services to help bring your digital ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <CardDescription className="text-gray-400">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-center text-sm">
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
