import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="bg-[#0a192f] min-h-screen text-[#ccd6f6] flex flex-col items-start justify-center pt-20 px-8 space-y-4"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Hi, my name is{" "}
        <span className="text-[#64ffda]">Adarsh NM.</span>
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        I turn ideas into reality.
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl">
        I’m a MERN Stack Developer, passionate about building exceptional
        digital experiences. Currently, I’m focused on building responsive
        full-stack web applications.
      </p>
    </section>
  );
});

export default About;