import React from "react";


export default function Contact() {
  const phoneNumber = "2348100000000"; // Example: +2348100000000
  const message = "Hello, I would like to chat!"; // Default message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center  p-8 rounded-lg shadow-lg"
    >
      {/* Title */}
      <div className="flex flex-row items-center">
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-gray-300 text-sm sm:text-base">04.</span>
          <span className="font-sans text-gray-300 text-base">
            What&apos;s Next?
          </span>
        </div>
      </div>

      {/* Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Get In Touch
      </span>
      <p className="flex font-sans tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Although I&apos;m always open for any new opportunities, my inbox is
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>

      {/* WhatsApp Button */}
      <div className="pt-4">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <button
            className="font-mono text-sm text-gray-300 border-gray-300 
              px-8 py-4 border-[1.5px] rounded"
          >
            Chat on WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
}
