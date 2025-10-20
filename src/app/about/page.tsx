"use client"

import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, BookOpen, Award } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const experience = [
    {
      title: "Founder | Full Stack Developer",
      company: "VoxLoop Inc.",
      period: "Jan 2024 - Present",
      description: "Leading development of cloud-based SaaS applications, mentoring junior developers, and implementing modern tech stacks."
    },
    {
      title: "UX/UI Designer & Developer",
      company: "Fagoon AI",
      period: "Oct 2022 - Present",
      description: "Designing and developing responsive web applications, creating design systems, and collaborating with cross-functional teams."
    },
    {
      title: "Executive Graphic Designer & Content Creator",
      company: "Ginko Design",
      period: "Dec 2022 - Aug 2023",
      description: "Produced engaging content for brands including videos, graphics, and written materials while building design portfolio."
    },
    {
      title: "UX/UI Designer",
      company: "PixelForge Studio",
      period: "Jan 2022 - Oct 2022",
      description: "Designed mobile and web interfaces with a focus on usability and accessibility. Conducted usability testing and A/B testing to drive design improvements."
    },
    {title: "UX Writer",
      company: "Google LLC",
      period: "Apr 2022 - Jul 2022",
      description: "Crafted concise and user-friendly interface copy for apps and websites. Developed microcopy for buttons, menus, onboarding flows, and error messages."
    },
    {title: "Technical Product Operations Specialist",
      company: "Alibaba Group Holding Limited",
      period: "Jan 2017 - Jul 2017",
      description: "Managed workflows and operational processes for digital products. Monitored product performance using analytics dashboards."
    },
  ]

  const education = [
    {
      degree: "Master of Science (Hons) in Computing",
      institution: "Buckinghamshire New University, United Kingdom",
      period: "Oct 2021 - Aug 2022",
      description: "Specialized in Applicaion/Software and Human-Computer Interaction"
    },
    {
      degree: "Bachelor’s of Engineering in Information Technology",
      institution: "Pokhara University, Nepal",
      period: "Sep 2017 - Aug 2021",
      description: "Advanced certification in developing Front-End & Back-End and Database"
    },
    {
      degree: "Bachelor’s in Computer Application",
      institution: "Manipal Institute of Technology, India",
      period: "Sep 2017 - Mar 2021",
      description: "Deep Learning anbout computer applications and Machines"
    }
  ]

  const awards = [
    "Junior Best Employee Division Two - Tech Summit 2023",
    "Onboarding Project Lead - Inhouse Employee Awards 2023",
    "Most Innovative Employer of the Year - Creative Awards 2021"
  ]

  const skills = {
    design: ["Figma", "Adobe XD", "Sketch", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems", "Wireframing"],
    development: ["JavaScript/TypeScript", "React/Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"],
    content: ["Video Editing", "Motion Graphics", "Content Strategy", "SEO", "Social Media", "Photography", "Copywriting"]
  }

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
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </h1>
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <p className="text-lg text-muted-foreground">
                  I’m a multidisciplinary creative professional combining UX/UI design, graphic design, and front-end & back-end developer to craft compelling digital experiences. With expertise in user-centered design, prototyping, branding, and digital media, I create intuitive and engaging products that delight users.
                </p>
                <p className="text-lg text-muted-foreground">
                  I have hands-on experience working with leading tech companies including Google, Alibaba, and other industry leaders, where I contributed to designing responsive web and mobile applications, digital marketing assets, and cohesive brand identities. I’m proficient in Python, JavaScript, React/Next.js, and design tools like Figma, Adobe XD, Photoshop, Illustrator, and InDesign, ensuring seamless collaboration between design and development teams..
                </p>
                <p className="text-lg text-muted-foreground">
                  Beyond design and development, I create educational content, illustrations, and videos, bringing stories to life visually. In my free time, I enjoy dancing, singing karaoke, reading, cooking, and cheering for my favorite football teams, believing that creativity extends both inside and outside the workplace.
                </p>
              </div>
              
              <Button size="lg" asChild className="mt-6 ...">
                <a href="/resume.pdf" download="Sanish Lama.pdf">
               <Download className="mr-2 h-4 w-4" />
                 Download Resume
               </a>
          </Button>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden glass-card">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="glass-card p-3 rounded-2xl">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl hover:glass-strong transition-all duration-500 hover:scale-[1.02] group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-primary group-hover:text-purple-500 transition-colors">{job.company}</p>
                  </div>
                  <span className="glass rounded-full px-4 py-1 text-sm text-muted-foreground mt-2 sm:mt-0">{job.period}</span>
                </div>
                <p className="text-muted-foreground mt-3">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="glass-card p-3 rounded-2xl">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl hover:glass-strong transition-all duration-500 hover:scale-[1.02] group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-primary group-hover:text-purple-500 transition-colors">{edu.institution}</p>
                  </div>
                  <span className="glass rounded-full px-4 py-1 text-sm text-muted-foreground mt-2 sm:mt-0">{edu.period}</span>
                </div>
                <p className="text-muted-foreground mt-3">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section className="relative py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Heading with icon inside a small 3D box */}
    <div className="flex items-center gap-3 mb-8">
      <div className="glass-card p-3 rounded-2xl">
        <BookOpen className="h-8 w-8 text-primary" />
      </div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Skills & Tools
      </h2>
    </div>

    {/* Skill cards grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Design Card */}
      <div className="glass-card p-8 rounded-3xl hover:glass-strong transition-all duration-500 hover:scale-105 group">
        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
          Design
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.design.map((skill) => (
            <span key={skill} className="glass px-3 py-1 rounded-full text-sm hover:glass-strong transition-all">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Development Card */}
      <div className="glass-card p-8 rounded-3xl hover:glass-strong transition-all duration-500 hover:scale-105 group">
        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          Development
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.development.map((skill) => (
            <span key={skill} className="glass px-3 py-1 rounded-full text-sm hover:glass-strong transition-all">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Content Card */}
      <div className="glass-card p-8 rounded-3xl hover:glass-strong transition-all duration-500 hover:scale-105 group">
        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
          Content
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.content.map((skill) => (
            <span key={skill} className="glass px-3 py-1 rounded-full text-sm hover:glass-strong transition-all">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Awards Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="glass-card p-3 rounded-2xl">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Awards & Recognition
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:glass-strong transition-all duration-300 hover:scale-105">
                <p className="font-medium">{award}</p>
              </div>
            ))}
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