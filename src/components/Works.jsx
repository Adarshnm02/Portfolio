import React, { forwardRef, useState, useEffect, useRef } from "react";
import {
  Github,
  ExternalLink,
  Star,
  Blocks,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Works = forwardRef((props, ref) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    fetch("/Projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setSelectedProject(data[0]); // Set the first project as selected
      })
      .catch((error) => console.error("Error loading the JSON file:", error));
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      const interval = setInterval(() => {
        handleNextProject();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, projects]);

  const handleProjectClick = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
    scrollToProject(index);
  };

  const handlePrevProject = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
    scrollToProject(newIndex);
  };

  const handleNextProject = () => {
    const newIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
    scrollToProject(newIndex);
  };

  const scrollToProject = (index) => {
    const container = scrollContainerRef.current;
    if (container && container.children[index]) {
      const projectElement = container.children[index];
      const scrollPosition =
        projectElement.offsetLeft -
        container.offsetWidth / 2 +
        projectElement.offsetWidth / 2;
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // If projects haven't loaded yet or no project is selected, show loading state
  if (projects.length === 0 || !selectedProject) {
    return (
      <div className="min-h-screen bg-[#0a192f] text-white flex items-center justify-center">
        <div className="text-xl">Loading projects...</div>
      </div>
    );
  }

  return (
    <div ref={ref} className="min-h-screen bg-[#0a192f] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-row items-center mr-4">
          <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-2 ">
            Works
          </span>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Project List */}
        <div className="relative mb-12 mt-5">
          <button
            onClick={handleScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#112240] rounded-full hover:bg-[#1d3a6d] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 py-4 px-12 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project, index)}
                className={`flex-none w-[300px] bg-[#112240] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-purple-500 scale-105"
                    : "hover:ring-2 hover:ring-purple-500/50"
                }`}
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#112240] rounded-full hover:bg-[#1d3a6d] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Selected Project Details */}
        <div className="relative bg-[#112240] rounded-xl p-8 mb-12 transition-all duration-300">
          <button
            onClick={handlePrevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#1d3a6d] rounded-full hover:bg-[#2a4d8a] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Project Image */}
            <div className="lg:col-span-1">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {selectedProject.thumbnails.map((thumb, index) => (
                  <div
                    key={index}
                    className="aspect-video rounded-lg overflow-hidden"
                  >
                    <img
                      src={thumb}
                      alt={`${selectedProject.title} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Project Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Story Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-purple-400" />
                  <h2 className="text-xl font-semibold">Story</h2>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {selectedProject.story}
                </p>
              </div>

              {/* Features Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Blocks className="w-5 h-5 text-purple-400" />
                  <h2 className="text-xl font-semibold">Features</h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="w-5 h-5 text-purple-400" />
                  <h2 className="text-xl font-semibold">Tech Stack</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1d3a6d] text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Preview
                </a>
                <a
                  href={selectedProject.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1d3a6d] hover:bg-[#2a4d8a] px-6 py-3 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Source
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={handleNextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#1d3a6d] rounded-full hover:bg-[#2a4d8a] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
});

export default Works;
