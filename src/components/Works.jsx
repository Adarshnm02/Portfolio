import React, { forwardRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Works = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <MdKeyboardArrowRight
          className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px]"}
        />

        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // TODO : to here  */}
        {/* // ?  Project  1 Ens Vision */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden  bg-[#0a192f] z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://www.vision.io"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <img
                src="/images/ensvision.png"
                alt="Project Screen shot"
                className="w-full rounded h-full "
              />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                {/* Decrease visibility by adding opacity */}
                <img
                  src="/images/ensvision.png"
                  alt="Project Screen shot"
                  className="w-full h-full opacity-20"
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-gray-400 text-base">Vision.io</span>
                <a
                  href="https://www.vision.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-gray-400 font-bold text-xl hover:cursor-pointer">
                    ENS names Marketplace
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-cyan-800 rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  At Vision, I played a crucial role in developing web3
                  components for their{" "}
                  <span className="text-blue-500">web3 application</span> using
                  Next.js and web3 libraries. Our focus was on integrating new
                  features and improving the user interface. One notable
                  achievement was the release of NameWrapper with{" "}
                  <span className="text-blue-500">ERC72</span> support, enabling
                  users to create{" "}
                  <span className="text-blue-500">subdomains</span>. This
                  showcased our commitment to delivering innovative solutions.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">ENS domains</span>
                <span className="pr-4 z-10">ENS names</span>
                <span className="pr-4 z-10">web3</span>
                <span className="pr-4 z-10">NFT</span>
                <span className="pr-4 z-10">ERC72</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 text-gray-400 hover:text-gray-600 ">
                <FaGithub link="https://github.com/hktitof/Ypredict" />
                <a
                  href="https://www.vision.io"
                  target={"_blank"}
                  rel="noreferrer"
                ></a>
              </div>
            </div>
          </div>
        </div>


        {/* // ?  Project 2 - YpredictAI */}

        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href="https://ubiquitous-bublanina-da84ec.netlify.app/" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <img src="/images/ensision.png" alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                {/* <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div> */}
                <img src="/images/ensision.png" alt="Project Screen shot" className='w-full h-full ' />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-gray-400 text-base">Recent Project</span>
                <a href="https://ubiquitous-bublanina-da84ec.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-gray-400 font-bold text-xl hover:cursor-pointer">
                    YPredict - v1
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-cyan-800 rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  I had the opportunity to lead the development of a token project, which aimed to create a
                  decentralized ecosystem for peer-to-peer transactions. Overseeing the planning and development of the
                  project, including the <span className="text-blue-500"> design</span> and implementation of the{" "}
                  <span className="text-blue-500"> smart contract</span> and{" "}
                  <span className="text-blue-500"> blockchain technology</span>. Here i share with you{" "}
                  <span className="text-blue-500"> YPredict - v1 </span> for the private sale.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Token</span>
                <span className="pr-4 z-10">ERC20</span>
                <span className="pr-4 z-10">Nextjs</span>
                <span className="pr-4 z-10">Smart contract</span>
                <span className="pr-4 z-10">Blockchain</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <div className="z-10 flex fle-row space-x-5 ">
                  <FaGithub link="https://github.com/hktitof/Ypredict" />
                  <a href="https://ubiquitous-bublanina-da84ec.netlify.app/" target={"_blank"} rel="noreferrer">
                    {/* <ExternalLink url={""} router={router} /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* // ?  Project  3 Ens Vision */}

        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden  bg-[#0a192f] z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://www.vision.io"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <img
                src="/images/ensvision.png"
                alt="Project Screen shot"
                className="w-full rounded h-full "
              />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                {/* Decrease visibility by adding opacity */}
                <img
                  src="/images/ensvision.png"
                  alt="Project Screen shot"
                  className="w-full h-full opacity-20"
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-gray-400 text-base">Vision.io</span>
                <a
                  href="https://www.vision.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-gray-400 font-bold text-xl hover:cursor-pointer">
                    ENS names Marketplace
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-cyan-800 rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  At Vision, I played a crucial role in developing web3
                  components for their{" "}
                  <span className="text-blue-500">web3 application</span> using
                  Next.js and web3 libraries. Our focus was on integrating new
                  features and improving the user interface. One notable
                  achievement was the release of NameWrapper with{" "}
                  <span className="text-blue-500">ERC72</span> support, enabling
                  users to create{" "}
                  <span className="text-blue-500">subdomains</span>. This
                  showcased our commitment to delivering innovative solutions.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">ENS domains</span>
                <span className="pr-4 z-10">ENS names</span>
                <span className="pr-4 z-10">web3</span>
                <span className="pr-4 z-10">NFT</span>
                <span className="pr-4 z-10">ERC72</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 text-gray-400 hover:text-gray-600 ">
                <FaGithub link="https://github.com/hktitof/Ypredict" />
                <a
                  href="https://www.vision.io"
                  target={"_blank"}
                  rel="noreferrer"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

export default Works
