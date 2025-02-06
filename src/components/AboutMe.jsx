import React, { forwardRef } from "react";


const AboutMe = forwardRef((props, ref) => {
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      ref={ref}
      className="snap-start flex flex-col items-center pb-20"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[750px] lg:w-[950px] "
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
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header text-justify">
              <span className="text-gray-400 ">
                Hello! My name is Adarsh NM, and I&apos;m a passionate{" "}
                <span className="text-blue-400">MERN Stack Developer</span> with
                strong problem-solving skills. I completed my{" "}
                <span className="text-blue-400">
                  Bachelor&apos;s degree in BSc Electronics
                </span>
                from Calicut University and worked as a supervisor in an{" "}
                <span className="text-blue-400">
                  interior designing and manufacturing company
                </span>
                , where I developed leadership, team management, and
                adaptability skills.
              </span>
            </div>
            <div className="font-Header text-justify">
              <span className="text-gray-400 ">
                During this time, I discovered my passion for programming and
                began self-learning to enhance my technical abilities. To
                further expand my knowledge, I joined{" "}
                <span className="text-blue-400">Brototype</span>, a
                self-learning platform that combines online and offline
                education. Through this, I strengthened my expertise in{" "}
                <span className="text-blue-400">
                  MERN stack (MongoDB, Express.js, React.js, Node.js)
                </span>
                and other technologies such as{" "}
                <span className="text-blue-400">
                  DSA, TypeScript, Git, TailwindCSS, and Socket.io
                </span>
                .
              </span>
            </div>
            <div className="font-Header text-justify">
              <span className="text-gray-400 ">
                I have completed projects like{" "}
                <span className="text-blue-400">Social Doctor</span>, a doctor
                booking platform with social media features, and{" "}
                <span className="text-blue-400">TechWiz</span>, an e-commerce
                platform. Plus, numerous mini projects that have helped me
                sharpen my coding and problem-solving skills.
              </span>
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
