"use client";

import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Admin-Dashboard App",
    description:
      "A sleek admin dashboard for managing e-commerce sales, inventory, users, and orders in real time",
    image: "/images/admin-dashboard.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    category: "Template",
    status: "Completed",
     liveUrl: "admin-dashboard-alpha-sand.vercel.app",
    githubUrl: "https://github.com/Chukwwumaemmannuel233/Admin-Dashboard",
  },
  {
    title: "Job-Board App",
    description:
      "A job board app where people can find and apply for jobs, and employers can post job openings. It works on both Android and iOS, making it easy for anyone to use anytime, anywhere.",
    image: "/images/johub.png",
    tech: ["Next.js", "Typescript", "TailWind CSS", "UI/UX Design"],
    category: "Web Platform",
    status: "Completed",
     liveUrl: "job-board-app-black.vercel.app",
    githubUrl: "https://github.com/Chukwwumaemmannuel233/job-board-app",
  },
  {
    title: "Video Streaming Platform",
    description:
      "This is my video streaming website where people can watch movies online. It’s fast, easy to use, and works well on both phones and computers.",
    image: "/images/Streamflix.png",
    tech: ["React", "Next.js", "Typescript", "Tailwind CSS"],
    category: "Web Platform",
    status: "Completed",
     liveUrl: "video-streaming-rose.vercel.app",
    githubUrl: "https://github.com/Chukwwumaemmannuel233/Video-Streaming",
  },
  {
    title: "Kudora",
    description:
      "Kudora is my e-commerce website where people can buy and sell products easily. It’s fast, secure, and user-friendly for both sellers and shoppers.",
    image: "/images/Kudora.png",
    tech: ["Next.js", "TypeScript", "Prisma", "Node.js", "PostgreSQL"],
    category: "Web Platform",
    status: "In Progress",
     liveUrl: "kudora.vercel.app",
    githubUrl: "https://github.com/Chukwwumaemmannuel233/Kudora",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            frontend development, UI/UX design, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Card className="group bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white">
                      {project.title}
                    </CardTitle>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <CardDescription className="text-blue-400 text-sm">
                    {project.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      // className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                      className="flex-1 border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-gray-200"
                      // onClick={() => window.open(project.liveUrl, "_blank")}
                      onClick={() => window.open(project.liveUrl.startsWith("http") ? project.liveUrl : `https://${project.liveUrl}`, "_blank")}

                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      // className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                      className="flex-1 border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-gray-200"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
