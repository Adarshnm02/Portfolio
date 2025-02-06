import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Blocks,
  FileJson,
  FileType,
  Palette,
  Layout,
  Server,
  Database,
  Network,
  Cloud,
  CloudCog,
  Flame,
  GitBranch,
  Github,
  Radio,
  Coffee,
  Component,
  Globe,
  Layers,
  Box,
  Terminal,
  Code,
  Cpu,
  MonitorSmartphone,
  Wrench,
  FileCode2,
  Settings,
  BookOpen,
  Triangle,
} from "lucide-react";

const Technologies = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", icon: <Code2 className="w-5 h-5" /> },
      { name: "Next.js", icon: <Blocks className="w-5 h-5" /> },
      { name: "HTML5", icon: <Globe className="w-5 h-5" /> },
      { name: "CSS3", icon: <Palette className="w-5 h-5" /> },
      { name: "JavaScript", icon: <FileJson className="w-5 h-5" /> },
      { name: "TypeScript", icon: <FileType className="w-5 h-5" /> },
      { name: "jQuery", icon: <Code className="w-5 h-5" /> },
      { name: "Redux", icon: <Layers className="w-5 h-5" /> },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", icon: <Server className="w-5 h-5" /> },
      { name: "Express.js", icon: <Box className="w-5 h-5" /> },
      { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
      { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
      { name: "RESTful APIs", icon: <Network className="w-5 h-5" /> },
      { name: "Mongoose", icon: <FileCode2 className="w-5 h-5" /> },
      { name: "JWT", icon: <Settings className="w-5 h-5" /> },
      { name: "Socket.io", icon: <Radio className="w-5 h-5" /> },
    ],
  },
  {
    category: "UI Frameworks & Tools",
    items: [
      { name: "Tailwind CSS", icon: <Palette className="w-5 h-5" /> },
      { name: "Bootstrap", icon: <Layout className="w-5 h-5" /> },
      { name: "Material UI", icon: <Component className="w-5 h-5" /> },
      { name: "Shadcn/ui", icon: <Component className="w-5 h-5" /> },
      { name: "Vite", icon: <Flame className="w-5 h-5" /> },
      { name: "Webpack", icon: <Box className="w-5 h-5" /> },
      { name: "Sass/SCSS", icon: <Palette className="w-5 h-5" /> },
      { name: "Styled Components", icon: <Palette className="w-5 h-5" /> },
    ],
  },
  {
    category: "Programming & Languages",
    items: [
      { name: "JavaScript (ES6+)", icon: <FileJson className="w-5 h-5" /> },
      { name: "TypeScript", icon: <FileType className="w-5 h-5" /> },
      { name: "C Programming", icon: <Terminal className="w-5 h-5" /> },
      { name: "Java", icon: <Coffee className="w-5 h-5" /> },
      { name: "Python", icon: <Code className="w-5 h-5" /> },
      { name: "DSA", icon: <Cpu className="w-5 h-5" /> },
      { name: "OOP", icon: <Box className="w-5 h-5" /> },
      { name: "SQL", icon: <Database className="w-5 h-5" /> },
    ],
  },
  {
    category: "Development Tools",
    items: [
      { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
      { name: "GitHub", icon: <Github className="w-5 h-5" /> },
      { name: "VS Code", icon: <Code2 className="w-5 h-5" /> },
      { name: "Postman", icon: <MonitorSmartphone className="w-5 h-5" /> },
      { name: "Chrome DevTools", icon: <Wrench className="w-5 h-5" /> },
      { name: "npm/yarn", icon: <Box className="w-5 h-5" /> },
      { name: "ESLint", icon: <Code className="w-5 h-5" /> },
      { name: "Jest", icon: <BookOpen className="w-5 h-5" /> },
    ],
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
      { name: "Cloudinary", icon: <CloudCog className="w-5 h-5" /> },
      { name: "Firebase", icon: <Flame className="w-5 h-5" /> },
      { name: "Heroku", icon: <Cloud className="w-5 h-5" /> },
      { name: "Netlify", icon: <Globe className="w-5 h-5" /> },
      { name: "Vercel", icon: <Triangle className="w-5 h-5" /> },
      { name: "Docker", icon: <Box className="w-5 h-5" /> },
      { name: "CI/CD", icon: <GitBranch className="w-5 h-5" /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Skills = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full max-w-7xl mx-auto"
      >
        <motion.div
          variants={sectionVariants}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#64ffda]">
            Skills
          </h2>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {Technologies.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              variants={sectionVariants}
              className="bg-[#112240] rounded-lg p-6 hover:bg-[#112240]/70 transition-colors"
            >
              <h3 className="text-[#64ffda] font-semibold text-lg mb-4 tracking-wide">
                {section.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {section.items.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    className="flex items-center gap-2.5 group cursor-pointer"
                  >
                    <div className="text-[#64ffda] opacity-75 group-hover:opacity-100 transition-opacity">
                      {tech.icon}
                    </div>
                    <span className="text-[#a8b2d1] group-hover:text-[#64ffda] text-sm font-medium transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
});

Skills.displayName = "Skills";

export default Skills;
