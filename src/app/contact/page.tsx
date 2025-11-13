"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Linkedin, Github, Twitter, MapPin, Phone, MessageCircle, MessageCircleCodeIcon, MessageCircleHeartIcon, MessageCircleDashedIcon, X } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitStatus("success")
    setFormData({ name: "", email: "", subject: "", message: "" })
    
    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "Email Here",
      href: "mailto:designbysanish@gmail.com",
      color: "text-red-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Linkedin Profile",
      href: "https://www.linkedin.com/in/sanish-lama-80b718254/",
      color: "text-blue-500"
    },
    {
      icon: MessageCircle,
      label: "GitHub",
      value: "Github Profile",
      href: "https://github.com/sanishlama",
      color: "text-gray-700 dark:text-gray-300"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "Twitter Profile",
      href: "https://twitter.com/sanish",
      color: "text-sky-500"
    }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Dubai, United Arab Emirates"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 (55) 944-3269"
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl floating" />
      </div>

      <Navigation />
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 glass-card rounded-3xl p-8 hover:glass-strong transition-all duration-500">
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="glass-strong border-white/10"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="glass-strong border-white/10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="glass-strong border-white/10"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className="glass-strong border-white/10"
                    required
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="glass-strong p-4 rounded-2xl border border-green-500/20 text-green-600 dark:text-green-400">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="glass-strong p-4 rounded-2xl border border-red-500/20 text-red-600 dark:text-red-400">
                    Oops! Something went wrong. Please try again.
                  </div>
                )}

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting} 
                  className="glass-strong hover:glow-primary transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Social Links */}
              <div className="glass-card rounded-3xl p-6 hover:glass-strong transition-all duration-500">
                <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all group"
                      >
                        <div className="glass-card p-2 rounded-xl group-hover:glass-strong group-hover:scale-110 transition-all duration-300">
                          <Icon className={`h-5 w-5 ${social.color}`} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{social.label}</p>
                          <p className="text-sm">{social.value}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Additional Contact Info */}
              <div className="glass-card rounded-3xl p-6 hover:glass-strong transition-all duration-500">
                <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    return (
                      <div key={info.label} className="flex items-center gap-3">
                        <div className="glass-card p-2 rounded-xl">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="glass-strong rounded-3xl p-6 bg-gradient-to-br from-primary/20 to-purple-500/20 hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-2">Availability</h3>
                <p className="text-muted-foreground">
                  Currently available for freelance projects and collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl p-8">
            <div className="text-center text-muted-foreground">
              <p className="text-sm">&copy; 2024 VoxLoop. All rights reserved.</p>
              <p className="text-xs mt-2">Designed & Developed with ❤️ by SANISH</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
