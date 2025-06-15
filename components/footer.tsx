"use client"

import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CUE</span>
              </div>
              <span className="text-white font-semibold text-lg">Chukwuma Ugwu Emmanuel</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Frontend Developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:echukwuma561@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>echukwuma561@gmail.com</span>
              </a>
              <a
                href="tel:+2348161770490"
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+234 816 177 0490</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/Chukwwumaemmannuel233"
              className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
            href="https://www.linkedin.com/in/chukwuma-emmanuel-53386236b/"
              className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:echukwuma561@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by Chukwuma Ugwu Emmanuel © 2024</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
