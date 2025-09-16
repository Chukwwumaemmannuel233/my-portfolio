"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Code, Rocket } from "lucide-react";

export default function AboutModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="
    border border-gray-600 
    text-gray-300 
    bg-transparent
    hover:border-blue-500
    hover:text-white
    hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600
    transition-all duration-300
    rounded-md px-5 py-2
  "
        >
          Learn More About Me
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-gray-900 border-gray-700 text-gray-300 max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            More About Chukwuma Ugwu Emmanuel
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            My journey from frontend to full-stack and mobile development.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6 text-sm leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-blue-400 flex items-center">
              <Rocket className="w-5 h-5 mr-2" />
              Career Path
            </h3>
            <p>
              I started as a frontend developer in 2021, building React/Next.js
              web applications. With time I embraced back-end technologies like
              Node.js and PostgreSQL, becoming a full-stack developer. Recently,
              I added React Native to create cross-platform mobile apps.
            </p>
            <div className="grid grid-cols-2 gap-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Started: 2021</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Based in Nigeria</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-green-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Tech Stack
            </h3>
            <p>
              Proficient with React, Next.js, TypeScript, Node.js, Express, and
              PostgreSQL. For mobile, I build with React Native and Expo,
              sharing logic across web and mobile for efficiency.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-purple-400">
              Current Focus
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-blue-500/20 text-blue-400"
              >
                Advanced React
              </Badge>
              <Badge
                variant="secondary"
                className="bg-green-500/20 text-green-400"
              >
                Node & APIs
              </Badge>
              <Badge
                variant="secondary"
                className="bg-pink-500/20 text-pink-400"
              >
                React Native
              </Badge>
              <Badge
                variant="secondary"
                className="bg-cyan-500/20 text-cyan-400"
              >
                Performance
              </Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
