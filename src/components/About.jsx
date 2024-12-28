import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6"
    >
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Hi! I'm a developer passionate about building interactive web
        applications.
      </p>
    </section>
  );
});

export default About;
