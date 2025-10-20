"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import ProjectCard from "@/components/ProjectCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    // UX/UI Design Projects
    {
      title: "Car Rental Services",
      description: "A comprehensive online store for operations with real-time analytics and inventory management for cars",
      image: "/car uxui.png",
      category: "UX/UI Design",
      tags: ["Figma", "Design System", "Prototyping", "User Research"],
      link: "https://www.figma.com/design/tB6XQmWleE6LnFw4OQjLYd/Car-Rent-Website-Design?node-id=44-14919&t=QlweQJsOKJ6mPXBr-1"
    },
    {
      title: "Mobile Wallet App",
      description: "Modern banking app redesign focused on accessibility and user-friendly financial management",
      image: "/mobile wallet uxui.png",
      category: "UX/UI Design",
      tags: ["Mobile Design", "Figma", "User Testing", "Wireframing"],
      link: "https://www.figma.com/design/4itB0pWiMdlE5bKxeqahye/Wallet-Mercantil-UX-UI?node-id=2-1355&t=SiAmLYJ5uqzN8LkL-1"
    },
    {
      title: "Healthcare Portal",
      description: "Patient portal interface design for seamless appointment booking and medical record access",
      image: "/healthcare uxui.png",
      category: "UX/UI Design",
      tags: ["Healthcare", "Accessibility", "Adobe XD", "Prototyping"],
      link: "https://www.figma.com/design/VdoTWZamNaX5WPX0MUtu11/Appointment-Booking-Health-Autism-UK?node-id=0-1&t=QiAq75oyza8SdwMt-1"
    },
    {
      title: "Restaurant Booking System",
      description: "Elegant reservation system with interactive flood plans and real-time menus",
      image: "/restaurant uxui.png",
      category: "UX/UI Design",
      tags: ["Figma", "Interactive Design", "Animations"],
      link: "https://www.figma.com/design/vbjLxDlmL9zjBbRngB5lI0/Table-Booking-Restaurant-Application--Web---Mobile---Admin-Panels---Community-?node-id=1875-3216&t=0v0FxFQ1nzzL4RBQ-1"
    },
    {
      title: "AI Marketing Agency",
      description: "Marketing Agency system to promote AI products",
      image: "/ai agency uxui.png",
      category: "UX/UI Design",
      tags: ["Figma", "Interactive Design", "Animations"],
      link: "https://www.figma.com/design/4cCqqskQJ7upCuxVi1AddA/AI-MArketing-Company-Website-landing-page-----%7C----DOML--Community-?node-id=0-1&t=fL0U883MNxvAALpa-1"
    },
    {
      title: "Crypto Wallet App",
      description: "Crypto Trading & Exchange Platform with Web3",
      image: "/crypto uxui.png",
      category: "UX/UI Design",
      tags: ["Figma", "Interactive Design", "Animations"],
      link: "https://www.figma.com/design/4cCqqskQJ7upCuxVi1AddA/AI-MArketing-Company-Website-landing-page-----%7C----DOML--Community-?node-id=0-1&t=fL0U883MNxvAALpa-1"
    },
    
    // Development Projects - Fagoon Digital
    {
      title: "Fagooon Upgrade - AI Agents",
      description: "Advanced AI agents system for automated customer interactions and intelligent workflow management",
      image: "/fagoon ai.png",
      category: "Development",
      tags: ["AI", "Machine Learning", "Next.js", "Python"],
      link: "https://fagoon.ai/"
    },
    {
      title: "Calling Agent - AI Calling",
      description: "AI-powered calling system with natural language processing and real-time conversation analytics",
      image: "/ai agent.png",
      category: "Development",
      tags: ["AI", "Voice Tech", "WebRTC", "Node.js"],
      link: "https://calling.iestateagents.com.au/"
    },
    {
      title: "AI Powered CRM System",
      description: "Intelligent CRM platform with predictive analytics and automated customer engagement workflows",
      image: "/ai crm.png",
      category: "Development",
      tags: ["CRM", "AI", "React", "PostgreSQL"],
      link: "https://crm.4aconsultingservices.com.au/"
    },
    {
      title: "Employee Management System",
      description: "Comprehensive ERP system for workforce management with attendance tracking and performance analytics",
      image: "/erp system.png",
      category: "Development",
      tags: ["ERP", "Management", "TypeScript", "MySQL"],
      link: "https://dashboard.rfmfacilitymanagement.com.au/auth/login"
    },
    {
      title: "Tatto Studio Web App",
      description: "Ink Your Story, Wear Your Art - Portfolio and booking platform for tattoo artists with gallery showcase",
      image: "/tattoo web.png",
      category: "Development",
      tags: ["Next.js", "Booking", "Portfolio", "CMS"],
      link: "https://incoholic.fagoon.ai/"
    },
    {
      title: "Real Estate Platform",
      description: "Find Your Perfect Property - Advanced property search platform with listings, filters, and virtual tours",
      image: "/realstate.png",
      category: "Development",
      tags: ["Real Estate", "Next.js", "Maps API", "MongoDB"],
      link: "https://snwa.com.au/"
    },
    // Additional Development Projects
    {
      title: "SaaS Web Application",
      description: "Full-stack SaaS platform with authentication, payments, team collaboration, and real-time features",
      image: "/sass web.png",
      category: "Development",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      link: "https://www.matillion.com/"
    },
    {
      title: "E- Commerce Website",
      description: "Women's Plus size online store, time tracking, and payment integration",
      image: "/ecom.png",
      category: "Development",
      tags: ["React", "Node.js", "MongoDB", "WebSocket"],
      link: "https://loomnlace.me/"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool with multiple models and template library",
      image: "/ai content generator.png",
      category: "Development",
      tags: ["Next.js", "OpenAI", "Python", "Redis"],
      link: "https://www.expre.co.uk/"
    },
    {
      title: "FitSW for Personal Trainers",
      description: "Spanish fitness application with workout plans, progress tracking, and social features",
      image: "/fitness.png",
      category: "Development",
      tags: ["React Native", "Firebase", "Redux", "Charts"],
      link: "https://apps.apple.com/us/app/fitsw-for-personal-trainers/id1184011053?platform=iphone"
    },
    {
      title: "GreenCharge+",
      description: "Power bank sharing service, tracking charging stations, checking availability",
      image: "/greencharge.png",
      category: "Development",
      tags: ["Node.js", "Python", "Maps API", "MongoDB"],
      link: "https://greencityboxes.com/"
    },
    {
      title: "Xmagames",
      description: "Gaming Top-Up platform, Top-Up services, real time transactions",
      image: "/xmagames.png",
      category: "Development",
      tags: ["React Native", "Laravel", "Firebase", "Node.js"],
      link: "https://gameszone1.com/"
    },

    // Content Creation Projects
    {
      title: "Brand Identity Video",
      description: "Animated brand story video showcasing company values and mission statement",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop",
      category: "Content",
      tags: ["After Effects", "Motion Graphics", "Branding"],
      link: "#"
    },
    {
      title: "Product Launch Campaign",
      description: "Multi-platform content campaign including videos, graphics, and social media assets",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      category: "Content",
      tags: ["Video Production", "Photoshop", "Social Media"],
      link: "#"
    },
    {
      title: "Tutorial Video Series",
      description: "Educational video series teaching web development fundamentals with engaging animations",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      category: "Content",
      tags: ["Video Editing", "Screen Recording", "Teaching"],
      link: "#"
    },
    {
      title: "Podcast Branding Package",
      description: "Complete visual identity for tech podcast including cover art, social templates, and animations",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop",
      category: "Content",
      tags: ["Illustrator", "Branding", "Audio Production"],
      link: "#"
    },
    {
      title: "Tech Blog Content",
      description: "Series of in-depth technical articles with custom illustrations and code examples",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
      category: "Content",
      tags: ["Technical Writing", "Illustration", "SEO"],
      link: "#"
    },
  ]

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => {
        if (activeFilter === "design") return p.category === "UX/UI Design"
        if (activeFilter === "development") return p.category === "Development"
        if (activeFilter === "content") return p.category === "Content"
        return true
      })

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
              My Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of design, development, and content projects I've worked on
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="glass-strong rounded-2xl p-2">
              <Tabs defaultValue="all" className="w-full max-w-2xl" onValueChange={setActiveFilter}>
                <TabsList className="grid w-full grid-cols-4 bg-transparent">
                  <TabsTrigger value="all" className="data-[state=active]:glass-strong">All Work</TabsTrigger>
                  <TabsTrigger value="design" className="data-[state=active]:glass-strong">UX/UI Design</TabsTrigger>
                  <TabsTrigger value="development" className="data-[state=active]:glass-strong">Development</TabsTrigger>
                  <TabsTrigger value="content" className="data-[state=active]:glass-strong">Content</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            </div>
          )}
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