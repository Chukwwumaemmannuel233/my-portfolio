"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mainLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const extraLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16 overflow-x-hidden">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
          >
            <span className="text-white font-bold text-sm">CUE</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center relative">
          {mainLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <Link
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* More Dropdown */}
          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen((o) => !o)}
              className="flex items-center text-gray-300 hover:text-blue-400"
            >
              More
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded shadow-lg z-50"
                >
                  {extraLinks.map((l) => (
                    <Link
                      key={l.name}
                      href={l.href}
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-blue-400"
                      onClick={() => setMoreOpen(false)}
                    >
                      {l.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-gray-300 hover:text-blue-400"
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-gray-900/95 border-t border-gray-800 px-4 py-4 space-y-4 overflow-x-hidden"
          >
            {[...mainLinks, ...extraLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}