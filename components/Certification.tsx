"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-center mb-12 text-white"
        >
          Certifications
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-gray-800 border border-gray-700 hover:border-teal-400/60 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Frontend Developer (React)
              </CardTitle>
              <CardDescription className="text-teal-300 font-medium">
               Frontend Developer (React) – Issued by HackerRank
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="/certificates/my-certificate.pdf"  // 👈 Put PDF in public/certificates/
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition"
              >
                View Certificate
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
