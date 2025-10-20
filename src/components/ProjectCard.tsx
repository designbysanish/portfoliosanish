"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  link?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  category,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <div className="group relative glass-card rounded-3xl overflow-hidden hover:glass-strong transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
      {/* 3D Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="glass-strong border-white/20 text-white font-semibold px-3 py-1">
            {category}
          </Badge>
        </div>
        
        {/* External Link Icon */}
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 glass-strong p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:glow-primary"
          >
            <ExternalLink className="h-5 w-5 text-white" />
          </Link>
        )}
      </div>
      
      {/* Content with Glass Effect */}
      <div className="p-6 relative">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Tags with Glass Pills */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="glass px-3 py-1 rounded-full text-xs font-medium border border-white/10 hover:glass-strong hover:scale-105 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* 3D Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 rounded-3xl" />
      </div>
    </div>
  )
}