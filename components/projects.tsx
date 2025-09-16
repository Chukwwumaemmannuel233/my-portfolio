"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Admin-Dashboard App",
    description:
      "A sleek admin dashboard for managing e-commerce sales, inventory, users, and orders in real time.",
    image: "/images/admin-dashboard.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    category: "Template",
    status: "Completed",
    liveUrl: "https://admin-dashboard-alpha-sand.vercel.app",
  },
  {
    title: "Job-Board App",
    description:
      "Cross-platform job board where people can find and apply for jobs and employers can post openings.",
    image: "/images/johub.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web Platform",
    status: "Completed",
    liveUrl: "https://job-board-app-black.vercel.app",
  },
  {
    title: "Video Streaming Platform",
    description:
      "A fast, responsive movie-streaming site that works seamlessly on both phones and computers.",
    image: "/images/Streamflix.png",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web Platform",
    status: "Completed",
    liveUrl: "https://video-streaming-rose.vercel.app",
  },
  {
    title: "Kudora",
    description:
      "An e-commerce platform for buying and selling products with secure checkout and modern UI.",
    image: "/images/Kudora.png",
    tech: ["Next.js", "TypeScript", "Prisma", "Node.js", "PostgreSQL"],
    category: "Web Platform",
    status: "In Progress",
    liveUrl: "https://kudora.vercel.app",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-6 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of recent projects showcasing my frontend and full-stack development skills.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-blue-500/50 transition-colors">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute top-4 right-4 px-2 py-1 text-xs rounded-full font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <CardHeader className="pt-6">
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-blue-400 text-sm">
                    {project.category}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Button with your theme */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="
                      w-full
                      border-gray-600
                      text-gray-200
                      bg-transparent
                      hover:bg-gray-700
                      hover:text-white
                      hover:border-blue-400
                      transition-colors
                    "
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
