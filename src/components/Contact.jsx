import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen text-[#ccd6f6] flex flex-col justify-center items-center p-6"
    >
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Feel free to reach out to me!
      </p>
      <div className="mt-4">
        <a
          href="mailto:your-email@example.com"
          className="text-blue-600 hover:underline"
        >
          your-email@example.com
        </a>
      </div>
    </section>
  );
});

export default Contact;
