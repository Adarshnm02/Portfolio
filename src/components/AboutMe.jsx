import React, { forwardRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";


const AboutMe = forwardRef((props, ref) => {
  const technologies = [
    [
      "Nextjs/React",
      "TypeScript/JavaScript",
      "Tailwind CSS",
      "Ether.js/web3.js",
      "AWS/Google Cloud",
    ],
    ["Node.js", "Java", "Solidity", "Mongodb", "GraphQL/RESTful APIs"],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      ref={ref}
      className="snap-start flex flex-col  items-center py-20"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-2">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header text-justify">
              <span className="text-gray-400 ">
                Hello! My name is Adarsh NM, and I&apos;m a passionate{" "}
                <span className="text-blue-400">Full Stack Web Developer</span>{" "}
                with strong problem-solving skills. My journey in computer
                science started at 2 years old when I explored c programing
                language, which started my interest in programming. Over the
                years, I continued to teach myself coding, which led me to an{" "}
                <span className="text-blue-400">Full Stack Developer</span> and
                afterward a second degree in{" "}
                <span className="text-blue-400">
                  Master of Computer Science
                </span>
                , making me a professional in this field.
              </span>
            </div>
            <div className="font-Header text-justify">
              <span className="text-gray-400 ">
                Throughout my education and career, from my self-learning days
                to earning my degrees, I&apos;ve gained experience in various
                industries. I have had the opportunity to work with companies
                and startups, including{" "}
                <span className="text-blue-400">Vision</span>,{" "}
                <span className="text-blue-400">FeverTokens</span>,{" "}
                <span className="text-blue-400">TrouveTavoi</span>, and many
                others, including transportation and international companies. At
                FeverTokens, I led the development of an innovative NFT
                marketplace, and at Vision, which is the{" "}
                <span className="text-blue-400">second-largest market</span> in
                the world for <span className="text-blue-400">ENS</span>, I led
                the development of their new NameWrapper release.
              </span>
            </div>

            <div className="font-Header tracking-wide text-justify ">
              <span className="text-gray-400  ">
                I&apos;m always interested to keep learning and improve my
                skills to make a positive impact in the tech world. Here are
                some of the technologies I&apos;ve been working with :{" "}
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16  justify-center lg:justify-start">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <MdKeyboardArrowRight className="text-gray-400" />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <MdKeyboardArrowRight className="text-gray-400" />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <img
                src={
                  "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                }
                className={"object-cover rounded-lg w-full h-full"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <img
                src={
                  "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                }
                className={"object-cover rounded-lg w-full h-full"}
                alt="My Image Not Found"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
