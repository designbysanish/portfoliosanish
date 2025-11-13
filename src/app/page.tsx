"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Video, Github, Linkedin, Mail } from "lucide-react"
import Navigation from "@/components/Navigation"
import ProjectCard from "@/components/ProjectCard"

export default function Home() {
  const skills = [
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Creating intuitive and beautiful user experiences with Figma, Adobe XD, and Sketch",
      color: "text-pink-500",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building scalable web applications with React, Next.js, Node.js, and modern tech stacks",
      color: "text-blue-500",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "Producing engaging content including videos, graphics, and written materials",
      color: "text-purple-500",
      gradient: "from-purple-500 to-violet-500"
    }
  ]

  const featuredProjects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online store operations with real-time analytics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "UX/UI Design",
      tags: ["Figma", "Design System", "Prototyping"],
      link: "#"
    },
    {
      title: "SaaS Web Application",
      description: "Full-stack SaaS platform with authentication, payments, and team collaboration features",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Development",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Brand Identity Video",
      description: "Animated brand story video showcasing company values and mission statement",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop",
      category: "Content",
      tags: ["After Effects", "Motion Graphics", "Branding"],
      link: "#"
    }
  ]

  const trustedCompanies = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759691373017.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759691383590.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759691390203.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759691396741.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759691404893.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759691412149.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759691431213.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759691438298.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759691446411.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759691453445.png"
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
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            {/* 3D Floating Badge */}
            <div className="inline-block mb-8">
              <div className="glass-strong rounded-full px-6 py-2 text-sm font-medium hover:scale-105 transition-transform duration-300">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Available for Freelance Work
                </span>
              </div>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 text-glow">
              <span className="block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                Designer.
              </span>
              <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent leading-tight">
                Developer.
              </span>
              <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent leading-tight">
                Creator.
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-9 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences through design, code, and compelling content
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <Button 
                size="lg" 
                asChild 
                className="glass-strong hover:glass-strong bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-500 text-white border-0 hover:glow-primary hover:from-purple-600 hover:to-primary dark:hover:from-purple-500 dark:hover:to-primary transition-all duration-300 hover:scale-105 group min-w-[200px]"
              >
                <Link href="/work">
                  View My Work 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="glass-strong bg-gradient-to-r from-pink-500/20 to-purple-500/20 dark:from-pink-500/30 dark:to-purple-500/30 border-primary/30 hover:border-primary hover:glow-purple transition-all duration-300 hover:scale-105 min-w-[200px] text-foreground font-semibold"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
            
            {/* 3D Social Links */}
            <div className="flex justify-center gap-6 mt-8">
              <Link 
                href="https://github.com/sanishlama" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-card p-4 rounded-2xl hover:glow-primary transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
              >
                <Github className="h-6 w-6 group-hover:text-primary transition-colors" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/sanish-lama-80b718254/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-card p-4 rounded-2xl hover:glow-primary transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
              >
                <Linkedin className="h-6 w-6 group-hover:text-primary transition-colors" />
              </Link>
              <Link 
                href="mailto:designbysanish@gmail.com" 
                className="glass-card p-4 rounded-2xl hover:glow-primary transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
              >
                <Mail className="h-6 w-6 group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              What I Do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combining design thinking, technical expertise, and creative storytelling
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div 
                  key={skill.title} 
                  className="glass-card p-8 rounded-3xl hover:glass-strong transition-all duration-500 hover:scale-105 hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`bg-gradient-to-br ${skill.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Trustee Companies
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proud to collaborate with industry leaders and innovative organizations
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {trustedCompanies.map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Image 
                  src={logo} 
                  alt={`Company logo ${index + 1}`}
                  width={120}
                  height={80}
                  className="object-contain w-full h-auto max-h-20 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-4">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Featured Work
              </h2>
              <p className="text-muted-foreground text-lg">A selection of recent projects</p>
            </div>
            <Button variant="outline" asChild className="glass-strong hover:glow-primary transition-all duration-300">
              <Link href="/work">View All Projects</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.title} style={{ animationDelay: `${index * 150}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 text-center hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to help bring your ideas to life with design, development, and creative content.
            </p>
            <Button 
              size="lg" 
              asChild 
              className="glass-strong bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-500 dark:to-purple-500 text-white border-0 hover:glow-pink hover:from-purple-600 hover:to-pink-500 dark:hover:from-purple-500 dark:hover:to-pink-500 transition-all duration-300 hover:scale-105 min-w-[220px] font-semibold"
            >
              <Link href="/contact">Start a Conversation</Link>
            </Button>
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
