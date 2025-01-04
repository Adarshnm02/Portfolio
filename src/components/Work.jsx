import React, { forwardRef } from "react";

const Work = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen text-[#ccd6f6] flex flex-col justify-center items-center p-6"
    > 
      <h1 className="text-4xl font-bold">My Work</h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Here are some of the projects I've worked on:
      </p>
      <ul className="mt-4 list-disc space-y-2">
        <li>Project 1: Social Doctor</li>
        <li>Project 2: E-commerce Website</li>
        <li>Project 3: Portfolio Website</li>
      </ul>
    </section>
  );
});

export default Work;
