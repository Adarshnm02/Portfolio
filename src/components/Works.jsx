import React, { forwardRef, useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";


const Works = forwardRef((props, ref) => {
  const [projects, setProjects] = useState([]);
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
        console.log("Json Data :", data);
      })
      .catch((error) => console.error("Error loading the JSON file:", error));
  }, []);

  const highlightText = (text, highlightWords) => {
    if (!highlightWords || !Array.isArray(highlightWords)) return text;

    let result = text;
    highlightWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(regex, '<span class="text-teal-500 font-medium">$1</span>');
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  const renderProjectStyle1 = (project, index) => (
    <div key={index} data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
         
          <div className="hidden bg-[#0a192f] z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              
              <a href={project.projectUrl} target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-slate-900/60 opacity-50 hover:bg-slate-900/0 hover:opacity-0 hover:cursor-pointer transition-opacity duration-300"></div>
                
              </a>
              
              <img src={project.imageUrl} alt="Project Screen shot" className="w-full rounded-3xl h-full object-cover" />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* background for text in mobile responsive */}
            
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                {/* Decrease visibility by adding opacity */}
                <img src={project.imageUrl} alt="Project Screen shot" className="w-full h-full rounded-3xl  opacity-10 transition-opacity duration-300 "/>
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-gray-400 text-base font-medium">{project.projectName}</span>
                  <a href={project.projectUrl} target="_blank"rel="noopener noreferrer">
                    <span className="text-slate-200 hover:text-teal-300 font-bold text-xl transition-colors duration-300">
                      {project.projectTitle}
                    </span>
                   </a>
              </div>

              <div className="w-full bg-slate-800/80 backdrop-blur-sm rounded-md py-6 md:p-6 z-10 shadow-lg">
                <p className=" text-slate-300 md:text-slate-300 text-left p-3">
                  {highlightText(project.description, project.highlightWords)}
                </p>
              </div>

              <ul className="flex ml-3 flex-wrap w-full text-slate-400 text-sm font-medium md:justify-start">
                {project.technologies.map((item, techIndex) => (
                      <span key={techIndex} className="pr-4 z-10 hover:text-teal-300 transition-colors duration-300 cursor-pointer">
                        {item}
                      </span>
                    ))}
              </ul>

              <div className="z-10 flex fle-row ml-auto mr-3 md:ml-3 space-x-5">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><FaGithub className=" text-slate-400 hover:text-teal-600 size-5 "/></a>
                <a href={project.projectUrl} target={"_blank"} rel="noreferrer"><GoLinkExternal className=" text-slate-400 hover:text-teal-600 size-5"/></a>
              </div>
            </div>
          </div>
        </div>
  )

  const renderProjectStyle2 = (project, index) => (
    <div key={index} data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
      {/* Left image */}
      <div className="hidden bg-[#0a192f] z-10  py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
        <div className="relative rounded w-full h-full col-span-7 ">
          <a href={project.projectUrl} target={"_blank"} rel="noreferrer">
            <div className="absolute w-full h-full rounded bg-slate-900/60 opacity-50 hover:bg-slate-900/0 hover:opacity-0 hover:cursor-pointer transition-opacity duration-300"></div>
          </a>

          <img src={project.imageUrl} alt="Project Screen shot" className="w-full rounded-3xl h-full object-cover" />
        </div>
      </div>

      {/* right Content */}
      <div className=" md:absolute py-4 md:grid md:grid-cols-12 w-full h-full  content-center ">
        {/* background for text in mobile responsive */}
        <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
          <div className="relative w-full h-full">
            {/* <div className="absolute w-full h-full opacity-10 z-10"></div> */}
            <img src={project.imageUrl} alt="Project Screen shot"className="w-full h-full rounded-3xl opacity-10 transition-opacity duration-300 "/>
          </div>
        </div>

        <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start space-y-3 md:order-1">
          <div className="flex flex-col space-y-1 z-10">
            <span className="text-gray-400 text-base font-medium">{project.projectName}</span>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <span className="text-slate-200 hover:text-teal-300 font-bold text-xl transition-colors duration-300">
                {project.projectTitle}
              </span>
            </a>
          </div>
          <div className="w-full bg-slate-800/80 backdrop-blur-sm rounded-md py-6 md:p-6 z-10 shadow-lg">
            <p className="text-slate-300 md:text-slate-300 text-left  p-3 ">
              {highlightText(project.description, project.highlightWords)}
            </p>
          </div>
          <ul className="flex ml-3 mr-3 md:mr-3 flex-wrap w-full text-slate-400 text-sm font-medium ">
            {project.technologies.map((item, techIndex) => (
              <span key={techIndex} className="pr-4 z-10 hover:text-teal-300 transition-colors duration-300 cursor-pointer">
                {item}
              </span>
            ))}
          </ul>
          <div className="z-10 flex flex-row ml-auto mr-3 space-x-5">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><FaGithub className="text-slate-400 hover:text-teal-600 size-5"/></a>
            <a href={project.projectUrl} target={"_blank"} rel="noreferrer"><GoLinkExternal className="text-slate-400 hover:text-teal-600 size-5"/></a>
          </div>
        </div>
      </div>
    </div>

   )


  
  
  return (
    <div ref={ref} className=" flex flex-col xl:space-y-28 space-y-12 w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4">
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row items-center md:px-0">
        <MdKeyboardArrowRight className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px]"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>


      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {/* // TODO : to here  */}
        {/* // ?  Project  1 Ens Vision */}
        {projects.length > 0 ? (
          projects.map((project, index) => 
            index % 2 === 0 ? renderProjectStyle1(project, index) : renderProjectStyle2(project, index)
          )
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </div>
  );
});

export default Works;
