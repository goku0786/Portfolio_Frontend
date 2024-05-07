import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const About = () => {
  const { user } = useAuth();

  return (
    <>
      <main className="mt-[65px] bg-black shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-5 text-white ml-4 mr-4 rounded-br-[95px] rounded-tl-[95px] border-2 border-[rgba(255,255,255,.2)] ">
        <h1 className="text-center text-5xl font-Oxanium font-bold animate-pulse">
          About Me
        </h1>
        <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-9 gap-5 mt-4">
          {/* left part */}
          <div className="relative sm:h-[455px] sm:w-[305px] h-[200px] w-[200px] bg-[rgba(0,0,0,.75)] sm:rounded-tl-3xl sm:rounded-br-3xl sm:rounded-tr-none sm:rounded-bl-none rounded-full flex justify-center items-center before:content-[''] before:absolute before:w-[600px] before:h-[600px] before:bg-[conic-gradient(transparent,transparent,transparent,#FFFFFF)] before:animate-spin  after:content-[''] after:absolute after:w-[600px] after:h-[600px] after:bg-[conic-gradient(transparent,transparent,#EA580C,transparent)] after:animate-spin truncate">
            <div className="absolute  inset-[2px] bg-black z-[1] rounded-full sm:rounded-tl-3xl sm:rounded-br-3xl sm:rounded-tr-none sm:rounded-bl-none flex justify-center items-center truncate">
              <img src="./images/profileImg2.png" alt="loading" width="full"  />
            </div>
          </div>

          {/* right part */}
          <div className=" sm:w-[55%] w-full text-center sm:text-left text-wrap flex flex-col gap-5">
            <p className="flex flex-col">
              {user ? (
                <>
                  <div className="flex gap-2">
                    <p className="text-4xl"> Welcome</p>
                    <p className="text-orange-600 text-3xl capitalize font-Oxanium pt-2">
                      {user.username}
                      <span className="text-white">,</span>
                    </p>
                  </div>
                  <p className="text-lg mb-2">to our website (▀̿Ĺ̯▀̿ ̿) !!</p>
                </>
              ) : (
                <>
                  <p className="text-4xl"> Welcome,</p>
                  <p className="text-lg mb-2"> to our website (▀̿Ĺ̯▀̿ ̿) !!</p>
                </>
              )}
              <p className="text-[15px] text-gray-300">
                <span className="text-orange-400 ">✪</span> Hi there! I'm{" "}
                <span className="text-green-400">Gaurav Kumar</span>, and I love
                building websites and apps using the MERN stack. It's a
                combination of tools that helps me create awesome stuff online.
                <br />
                <span className="text-orange-400 ">✪</span> I got into
                programming because I've always been fascinated by computers and
                how they work. I wanted to learn how to make things that people
                can use on the internet, so I started learning how to code.
                <br />
                <span className="text-orange-400 ">✪</span> I'm skilled in using
                MongoDB, Express.js, React.js, and Node.js to create websites
                and apps. From making them look great with React to handling the
                technical stuff with Node.js and Express, I've got it covered
                🤩!
              </p>
            </p>
            <div className="flex flex-col gap-2 text-left">
              <section className="flex gap-2">
                <p className="font-bold">Name: </p>
                <p>Gaurav Kumar</p>
              </section>
              <section className="flex gap-2">
                <p className="font-bold">Country: </p>
                <p>India</p>
              </section>
              <section className="flex gap-2">
                <p className="font-bold">Education: </p>
                <div>
                  <p className="font-semibold">
                    B.Tech (Computer Science & Information Technology)
                  </p>
                  <p className="text-sm text-gray-300">
                    Mahatma Jyotiba Phule Rohilkhand University, Bareilly, U.P.
                  </p>
                </div>
              </section>
              <section className="flex gap-2">
                <p className="font-bold">Email : </p>
                <p>gk1237860@gmail.com</p>
              </section>
            </div>
            <div className="btn btn-group">
              <NavLink to="/contact">
                <button className="bg-orange-600 font-semibold text-white px-2 py-1 rounded-full mr-2 border-2 border-transparent hover:border-orange-600  hover:border-2 hover:bg-transparent hover:text-white">
                  {" "}
                  Connect Now
                </button>
              </NavLink>
              <NavLink to="/service">
                <button className="font-semibold px-2 py-1 text-orange-600 bg-white rounded-full border-2 border-white hover:text-white hover:border-orange-600 hover:bg-transparent  ">
                  Learn More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-[65px] bg-black shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-5 text-white ml-4 mr-4 rounded-br-[95px] rounded-tl-[95px] border-2 border-[rgba(255,255,255,.2)] ">
        {/* <h1 className="text-center  text-3xl font-Oxanium font-bold animate-pulse">
          Work Experience
        </h1>
        <div className="flex justify-center gap-2 w-full mt-2">
          <p className="font-bold">Web Deveopment: </p>
          <section>
            <p className="font-semibold">Octanet, Online</p>
            <p className="text-sm text-gray-300">June 2023 - July 2023</p>
          </section>
        </div> */}

        <h1 className="text-center  text-3xl font-Oxanium font-bold animate-pulse">
          Projects
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4  mt-4 ">
          <div className="flex justify-center gap-2 w-full mt-2">
            <p className="font-bold">Amazon Clone: </p>
            <section>
              <p className="font-semibold">Octanet, Online</p>
              <p className="text-sm text-gray-300">June 2023 - July 2023</p>
              <Link
                to="https://github.com/goku0786/OCTANET_JULY/tree/Amazon-Clone"
                className="flex gap-2"
              >
                →
                <section className="hover:text-blue-400 hover:underline">
                  Project Link
                </section>
              </Link>
            </section>
          </div>
          <div className="flex justify-center gap-2 w-full mt-2">
            <p className="font-bold">Todo List: </p>
            <section>
              <p className="font-semibold">Octanet, Online</p>
              <p className="text-sm text-gray-300">June 2023 - July 2023</p>
              <Link
                to="https://github.com/goku0786/OCTANET_JULY/tree/Todo-List"
                className="flex gap-2"
              >
                →
                <section className="hover:text-blue-400 hover:underline">
                  Project Link
                </section>
              </Link>
            </section>
          </div>
          <div className="flex justify-center gap-2 w-full mt-2">
            <p className="font-bold ">Tic-Tac-Toe Game: </p>
            <section>
              <p>May 2023 - May 2023</p>
              <Link
                to="https://github.com/goku0786/Tic_tac_toe_game"
                className="flex gap-2"
              >
                →
                <section className="hover:text-blue-400 hover:underline">
                  Project Link
                </section>
              </Link>
            </section>
          </div>
          <div className="flex justify-center gap-2 w-full mt-2">
            <p className="font-bold">Scientific Calci: </p>
            <section>
              <p>Mar 2023 - Mar 2023</p>
              <Link
                to="https://github.com/goku0786/Scientific_calci"
                className="flex gap-2"
              >
                →
                <section className="hover:text-blue-400 hover:underline">
                  Project Link
                </section>
              </Link>
            </section>
          </div>
          <div className="flex justify-center gap-2 w-full mt-2">
            <p className="font-bold">Other Work Sample: </p>
            <section>
              <p className="font-semibold">Github Profile</p>
              <Link to="https://github.com/goku0786" className="flex gap-2">
                →
                <section className="hover:text-blue-400 hover:underline">
                  Profile Link
                </section>
              </Link>
            </section>
          </div>
        </div>

        <h1 className="text-center mt-10 text-3xl font-Oxanium font-bold animate-pulse">
          Skills
        </h1>
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 text-center mt-4 ">
          <p className="font-bold">
            HTML <p className="font-normal"> Above Intermediate</p>
          </p>
          <p className="font-bold">
            CSS <p className="font-normal"> Above Intermediate</p>
          </p>
          <p className="font-bold">
            JavaScript <p className="font-normal"> Intermediate</p>
          </p>
          <p className="font-bold">
            React Js <p className="font-normal"> Intermediate</p>
          </p>
          <p className="font-bold">
            MongoDb <p className="font-normal"> Intermediate</p>
          </p>
          <p className="font-bold">
            Express.Js <p className="font-normal"> Intermediate</p>
          </p>
          <p className="font-bold">
            Node.Js <p className="font-normal"> Intermediate</p>
          </p>
          <p className="font-bold">
            Bootstrap <p className="font-normal"> Above Intermediate</p>
          </p>
          <p className="font-bold">
            Tailwind CSS <p className="font-normal"> Above Intermediate</p>
          </p>
          <p className="font-bold">
            Material UI <p className="font-normal"> Above Intermediate</p>
          </p>
          <p className="font-bold">
            C++ <p className="font-normal"> Above Intermediate</p>
          </p>
          <p className="font-bold">
            Python <p className="font-normal"> Intermediate</p>
          </p>
          <p className="font-bold">
            Java <p className="font-normal"> Intermediate</p>
          </p>
          <p className="font-bold">
            SQL <p className="font-normal"> Intermediate</p>
          </p>
          <p className="font-bold">
            DSA <p className="font-normal"> Intermediate</p>
          </p>
        </div>
      </div>
    </>
  );
};
