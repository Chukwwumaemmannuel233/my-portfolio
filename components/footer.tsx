"use client"

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 text-base">
      <div className="max-w-6xl mx-auto">
        {/* ==== Top Grid ==== */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CUE</span>
              </div>
              <span className="text-white font-semibold text-lg">
                Chukwuma Ugwu Emmanuel
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Full-Stack Developer dedicated to building robust, scalable,
              and user-focused web & mobile solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["about", "experience", "skills", "projects", "contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:echukwuma561@gmail.com"
                  className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>echukwuma561@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348161770490"
                  className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+234&nbsp;816&nbsp;177&nbsp;0490</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Me */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Follow Me</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Connect with me across the web.
            </p>
            <div className="flex space-x-5">
              <SocialLink href="https://github.com/Chukwwumaemmannuel233" icon={<Github className="w-4 h-4" />} />
              <SocialLink href="https://www.linkedin.com/in/chukwuma-emmanuel-53386236b/" icon={<Linkedin className="w-4 h-4" />} />
              <SocialLink href="https://twitter.com/" icon={<Twitter className="w-4 h-4" />} />
              <SocialLink href="https://instagram.com/" icon={<Instagram className="w-4 h-4" />} />
              <SocialLink href="https://facebook.com/" icon={<Facebook className="w-4 h-4" />} />
            </div>
          </div>
        </div>

        {/* ==== Bottom Bar ==== */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <span>
            © {new Date().getFullYear()} Chukwuma Ugwu Emmanuel. All rights reserved.
          </span>
          <span className="mt-2 md:mt-0">
            Built with React, Next.js & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        text-gray-400 hover:text-blue-400
        transition-colors p-2 rounded-full
        hover:bg-gray-800
      "
    >
      {icon}
    </a>
  )
}
