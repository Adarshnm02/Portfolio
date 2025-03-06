import React, { forwardRef } from "react";
import { FileText, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const About = forwardRef((props, ref) => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Adarshnm02"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/adarshnm02/"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:adarshnm02@gmail.com"
    }
  ];

  return (
    <section
      data-aos="fade-up"
      ref={ref}
      className="min-h-screen text-[#ccd6f6] flex flex-col items-start justify-center pt-20 space-y-8 px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-52"
    >
      <div className="space-y-4">
        <p className="text-[#64ffda] font-mono">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-[#64ffda]">Adarsh NM.</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#a9b9c1]">
          Turning ideas into innovative digital experiences.
        </h2>
      </div>

      <div className="space-y-6 max-w-3xl">
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
          As a passionate MERN Stack Developer, I specialize in creating robust
          and responsive web applications. My focus is on building solutions that
          are not only functional but also provide exceptional user experiences.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
          Currently, I'm focused on building accessible, human-centered products
          using modern web technologies and best practices in software development.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
        <a 
          href="/Adarsh_NM.pdf"
          className="group flex items-center gap-2 border border-[#64ffda] text-[#64ffda] rounded px-6 py-3 hover:bg-[#64ffda]/10 transition-colors"
        >
          <FileText className="w-5 h-5" />
          View Resume
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-[#64ffda] transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-[#64ffda] rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#64ffda] rounded-full mt-2"></div>
        </div>
      </div> */}
    </section>
  );
});

About.displayName = 'About';

export default About;