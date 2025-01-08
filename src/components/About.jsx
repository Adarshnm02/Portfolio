import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <section
      data-aos="fade-up"
      ref={ref}
      className="min-h-screen text-[#ccd6f6] flex flex-col items-start justify-center pt-20 space-y-4 px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-52"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Hi, my name is{" "}
        <span className="text-[#64ffda]">
          <strong>Adarsh NM.</strong>
        </span>
      </h2>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#a9b9c1]">
        Turning ideas into innovative digital experiences.
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl">
        As a passionate MERN Stack Developer, I specialize in creating robust
        and responsive web applications. My focus is on building solutions that
        are not only functional but also provide exceptional user experiences.
      </p>

      <a href="/Resume.pdf">
        <button className="border rounded px-4 sm:px-8 py-3 sm:py-4">
          Check out my resume!
        </button>
      </a>
    </section>
  );
});

export default About;
