import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import Tilt from "react-parallax-tilt";
import { NavLink } from "react-router-dom";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";

export const Login = () => {

  const baseurl = "http://localhost:5000"

  const [showpassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    // username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showpassword);
  };

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`${baseurl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        console.log("response from server", res_data);
        storeTokenInLS(res_data.token);
        setUser({
          email: "",
          password: "",
        });

        toast.success("Login Success");

        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        console.log("Invalid credentials");
      }

      console.log(response);
    } catch (error) {
      console.log("login", error);
    }
  };

  return (
    <>
      <main className="mt-[65px]  flex shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-br-[95px] rounded-tl-[95px] ml-4 mr-4  border-2  border-[rgba(255,255,255,.2)] ">
        {/* left part */}
        <div className=" hidden sm:block h-[81.4vh] w-1/2  rounded-tl-[95px] p-10">
          <img src="./images/sign_in.svg" alt="svg" width="600px"/>
        </div>

        {/* right part */}
        <div className=" bg-gray-900 h-[81.4vh] sm:w-1/2 w-full rounded-br-[95px] rounded-tl-[95px] sm:rounded-tl-none relative overflow-hidden flex  justify-center items-center">
          <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
          <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
          <Tilt>
            <div className="h-[25rem] w-[20rem] bg-green-600 bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-green-200 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
              <h1 className="text-green-100 font-Oxanium absolute top-5 w-full flex justify-center text-3xl font-semibold animate-bounce drop-shadow-md">
                Login
              </h1>
              <form onSubmit={handleForm}>
                <div className="absolute top-[7rem] h-auto w-full flex flex-col gap-6 px-10">
                  <div className="relative font-Oxanium">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                      className="block p-2 w-full text-sm text-white bg-transparent  border border-opacity-30 border-green-200 rounded-lg focus:outline-none focus:ring-0 focus:border-green-600 peer "
                      placeholder=""
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-md text-white duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] tracking-wide bg-transparent px-1 peer-focus:px-1 peer-focus:text-white   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative font-Oxanium ">
                    <input
                      type={showpassword ? "text" : "password"}
                      name="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                      className="block p-2 pr-8 w-full text-sm text-green-100 bg-transparent  border border-opacity-30 border-green-200 rounded-lg focus:outline-none focus:ring-0 focus:border-green-600 peer "
                      placeholder=""
                    />
                    <div className="text-white cursor-pointer absolute top-2.5 right-2">
                      {showpassword ? (
                        <RxEyeOpen onClick={handleShowPassword} />
                      ) : (
                        <GoEyeClosed onClick={handleShowPassword} />
                      )}
                    </div>
                    <label
                      htmlFor="password"
                      className="absolute text-md text-green-100 duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] tracking-wide bg-transparent px-1 peer-focus:px-1 peer-focus:text-white   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Password
                    </label>
                  </div>
                  <div className="w-full flex flex-col justify-center items-center gap-2">
                    <button
                      type="submit"
                      className="text-green-200 border p-1 border-green-200 w-full rounded-lg hover:border-green-900 hover:text-green-900 hover:bg-green-100"
                    >
                      Login
                    </button>
                    <p className="text-green-100">
                      New User ?
                      <NavLink
                        to="/register"
                        className="text-green-400 hover:underline"
                      >
                        Register
                      </NavLink>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </Tilt>
        </div>
      </main>
    </>
  );
};
