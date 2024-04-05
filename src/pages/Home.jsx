import { About } from "./About";
import { Service } from "./Service";
import { Contact } from "./Contact";
import Tilt from "react-parallax-tilt";

export const Home = () => {
  return (
    <>
      <main className="  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  flex justify-center items-center ">
        <div className=" bg-gray-900  w-full relative overflow-hidden flex  justify-center items-center">
          <div className="h-30-r w-30-r  bg-gradient-to-r from-teal-400 to-gray-800 rounded-full absolute right-1/2 -top-56 transform rotate-160 animate-pulse"></div>
          <div className="h-40-r w-40-r bg-gradient-to-r from-slate-500 to-stone-700 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
          <div className="h-35-r w-35-r bg-gradient-to-r from-blue-800 to-indigo-900 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
          <Tilt>
            <div className=" mt-[65px] mb-4 mr-4 ml-4 p-5 flex flex-col-reverse  sm:flex-row justify-center items-center  sm:gap-10 gap-5  bg-[rgba(0,0,0,.1)] text-white  backdrop-blur-md border-2  border-[rgba(255,255,255,.2)] rounded-br-[95px] rounded-tl-[95px] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[100%] before:h-[100%] before:bg-gradient-to-r before:from-transparent before:to-[rgba(255,255,255,.4)] before:transition-[.5s] hover:before:left-[100%] truncate ">
              {/* left part */}
              <div className="sm:w-[40%] w-full text-center sm:text-left text-wrap flex flex-col gap-1">
                <h1 className="text-6xl">Hi There,</h1>
                <h2 className="text-4xl font-Oxanium text-green-500">
                  I'm Gaurav
                </h2>
                <p className="text-orange-500">A MERN Stack Developer.</p>
                <p className="">
                  I'm skilled in using MongoDB, Express.js, React.js, and
                  Node.js to create websites and apps. From making them look
                  great with React to handling the technical stuff with Node.js
                  and Express, I've got it covered 🤩!
                </p>

                <div className="mt-4 ">
                  <a href="/contact">
                    <button className="bg-yellow-400 font-semibold text-black px-2 py-1 rounded-full mr-2 border-2 border-transparent hover:border-yellow-400  hover:border-2 hover:bg-transparent hover:text-white">
                      Contact Now
                    </button>
                  </a>
                  <a href="/service">
                    <button className=" font-semibold px-2 py-1 text-yellow-400 rounded-full border-2 border-white hover:text-white hover:border-yellow-400  ">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>

              {/* right part  */}

              <div className=" relative sm:h-[450px] sm:w-[300px] h-[200px] w-[200px] bg-[rgba(0,0,0,.75)] sm:rounded-tl-3xl sm:rounded-br-3xl sm:rounded-tr-none sm:rounded-bl-none rounded-full flex justify-center items-center before:content-[''] before:absolute before:w-[600px] before:h-[600px] before:bg-[conic-gradient(transparent,transparent,transparent,#FACC15)] before:animate-spin  after:content-[''] after:absolute after:w-[600px] after:h-[600px] after:bg-[conic-gradient(transparent,transparent,#FFFFFF,transparent)] after:animate-spin truncate">
                <div className="absolute  inset-[2px]  bg-black z-[1]  rounded-full sm:rounded-tl-3xl sm:rounded-br-3xl sm:rounded-tr-none sm:rounded-bl-none  flex justify-center items-center truncate">
                  <img src="./images/profileImg1.png" alt="" width="full" />
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </main>
      <About />
      <Service />
      <Contact />
    </>
  );
};
