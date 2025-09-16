"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      timeline: formData.get("timeline"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Failed")

      toast({
        title: "Message sent successfully 🎉",
        description: "Thanks for reaching out. I’ll reply within 24 hours.",
      })
      e.currentTarget.reset()
    } catch {
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let’s Build Something Great
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
           Have a project or opportunity in mind? I’d love to hear about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
               I’m open to collaborations, freelance work, or just a friendly chat about tech.
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfo icon={<Mail className="w-6 h-6 text-white" />} label="Email" value="echukwuma561@gmail.com" link="mailto:echukwuma561@gmail.com" />
              <ContactInfo icon={<Phone className="w-6 h-6 text-white" />} label="Phone" value="+234 816 177 0490" link="tel:+2348161770490" />
              <ContactInfo icon={<MapPin className="w-6 h-6 text-white" />} label="Location" value="Enugu, Nigeria" />
            </div>
          </motion.div>

          {/* RIGHT CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gray-800 border-gray-700 transition-all duration-300 hover:scale-[1.01] hover:border-blue-500 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Project Brief</CardTitle>
                <CardDescription className="text-gray-400">
                  Please include project type, budget and timeline so I can respond faster.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField name="name" type="text" label="Name *" placeholder="Your full name" required />
                    <FormField name="email" type="email" label="Email *" placeholder="your.email@example.com" required />
                  </div>

                  <FormField name="company" type="text" label="Company / Organization" placeholder="Optional" />

                  {/* Project Type */}
                  <SelectField
                    name="projectType"
                    label="Project Type *"
                    required
                    options={["Website", "Mobile App", "UI/UX Design", "Full-stack Development", "Other"]}
                  />

                  {/* Budget */}
                  <SelectField
                    name="budget"
                    label="Budget Range *"
                    required
                    options={["$500 – $1,000", "$1,000 – $5,000", "$5,000 – $10,000", "$10,000+"]}
                  />

                  {/* Timeline */}
                  <FormField name="timeline" type="text" label="Expected Timeline" placeholder="e.g. 6–8 weeks" />

                  <FormField name="subject" type="text" label="Subject *" placeholder="What's this about?" required />

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Project Details / Pitch *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Describe your project, goals, and key requirements..."
                      className="min-h-[140px] bg-gray-900 border-gray-600 text-white focus:border-blue-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : (<><Send className="w-4 h-4 mr-2" /> Send Message</>)}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({ icon, label, value, link }: { icon: React.ReactNode, label: string, value: string, link?: string }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 
      transition-all duration-300 hover:bg-gray-700/70 hover:scale-[1.02] hover:border-blue-500">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        {link ? (
          <a href={link} className="text-white hover:text-blue-400 transition-colors">{value}</a>
        ) : (
          <p className="text-white">{value}</p>
        )}
      </div>
    </div>
  )
}

function FormField({ name, type, label, placeholder, required = false }: {
  name: string
  type: string
  label: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-gray-300">{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-gray-900 border-gray-600 text-white focus:border-blue-500"
      />
    </div>
  )
}

function SelectField({
  name,
  label,
  options,
  required = false,
}: {
  name: string
  label: string
  options: string[]
  required?: boolean
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-gray-300">{label}</Label>
      <select
        id={name}
        name={name}
        required={required}
        className="w-full bg-gray-900 border border-gray-600 text-white rounded-md focus:border-blue-500 p-2"
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}
