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
import { Calendar, MapPin, Award, Code, Heart } from "lucide-react";

export default function AboutModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          // className="border-gray-600 text-gray-300 hover:bg-gray-700"
          className="border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-gray-200"
        >
          Learn More About Me
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            More About Chukwuma Ugwu Emmanuel
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Get to know me better - my journey, passions, and what drives me as
            a developer.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Personal Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Professional Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              My journey into web development started 3+ years ago when I
              discovered the power of creating digital experiences that can
              impact people's lives. What began as curiosity about how websites
              work has evolved into a passionate career in frontend development
              and UI/UX design.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Started: 2021</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Based in Nigeria</span>
              </div>
            </div>
          </div>

          {/* What I Love */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              What I'm Passionate About
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Creating intuitive user interfaces that make complex tasks
                simple
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                Building responsive applications that work seamlessly across all
                devices
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Collaborating with teams using Agile methodologies and modern
                tools
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                Staying updated with the latest web technologies and best
                practices
              </li>
            </ul>
          </div>

          {/* Technical Philosophy */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              My Development Philosophy
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code that not only works
              but is also easy for other developers to understand and build
              upon. Every project is an opportunity to learn something new and
              push the boundaries of what's possible on the web.
            </p>
          </div>

          {/* Current Focus */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">
              Currently Focusing On
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-blue-500/20 text-blue-400"
              >
                Advanced React Patterns
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-500/20 text-purple-400"
              >
                Next.js 14
              </Badge>
              <Badge
                variant="secondary"
                className="bg-green-500/20 text-green-400"
              >
                TypeScript
              </Badge>
              <Badge
                variant="secondary"
                className="bg-pink-500/20 text-pink-400"
              >
                UI/UX Design
              </Badge>
              <Badge
                variant="secondary"
                className="bg-cyan-500/20 text-cyan-400"
              >
                Performance Optimization
              </Badge>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Fun Facts</h3>
            <ul className="space-y-2 text-gray-300">
              <li>🚀 I've built over 25+ projects in the last 3 years</li>
              <li>☕ I code best with a good cup of coffee</li>
              <li>
                🎨 I enjoy the creative process of turning designs into reality
              </li>
              <li>
                📚 Always learning - currently exploring advanced React patterns
              </li>
              <li>
                🤝 I love collaborating with other developers and designers
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
