import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";

export const Register = () => {

  const baseurl = "https://portfolio-backend-bal8.onrender.com"
  
  const [showpassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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
      const response = await fetch(`${baseurl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("response from server", res_data);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });

        toast.success("Registration Successful");

        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.msg
        );
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
   
      <main className="mt-[65px]  flex shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-br-[95px] rounded-tl-[95px] ml-4 mr-4 border-2   border-[rgba(255,255,255,.2)]">

        {/* left part */}
        <div className="hidden sm:block h-[81.4vh] w-1/2  rounded-tl-[95px] pt-20 pl-5 pr-5">
          <img src="./images/sign_up.svg" alt="svg" />
        </div>

        {/* right part */}
        <div className=" bg-gray-900 h-[81.4vh] sm:w-1/2 w-full rounded-br-[95px] rounded-tl-[95px] sm:rounded-tl-none relative overflow-hidden flex  justify-center items-center">
          <div className="h-40-r w-40-r bg-gradient-to-r from-yellow-200 to-green-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
          <div className="h-35-r w-35-r bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
          <Tilt>
            <div className="h-[30rem] w-[20rem] bg-blue-600 bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-blue-200 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
              <h1 className="text-blue-100 font-Oxanium absolute top-5 w-full flex justify-center text-3xl font-semibold animate-bounce drop-shadow-md">
               SignUp
              </h1>
              <form onSubmit={handleForm}>
                <div className="absolute top-[6rem] h-auto w-full flex flex-col gap-6 px-10">
                  <div className="relative font-Oxanium">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                      className="block p-2 w-full text-sm text-white bg-transparent  border border-opacity-30 border-blue-200 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                      placeholder=""
                    />
                    <label
                      htmlFor="username"
                      className="absolute text-md text-white duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] tracking-wide bg-transparent px-1 peer-focus:px-1 peer-focus:text-white   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Username
                    </label>
                  </div>

                  <div className="relative font-Oxanium">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                      className="block p-2 w-full text-sm text-white bg-transparent  border border-opacity-30 border-green-200 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                      placeholder=""
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-md text-white duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] tracking-wide bg-transparent px-1 peer-focus:px-1 peer-focus:text-white   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Email
                    </label>
                  </div>

                  <div className="relative font-Oxanium">
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                      className="block p-2 w-full text-sm text-white bg-transparent  border border-opacity-30 border-green-200 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                      placeholder=""
                    />
                    <label
                      htmlFor="phone"
                      className="absolute text-md text-white duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] tracking-wide bg-transparent px-1 peer-focus:px-1 peer-focus:text-white   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Phone
                    </label>
                  </div>

                  <div className="relative font-Oxanium">
                    <input
                      name="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                      type={showpassword ? 'text': 'password'}
                      className="block p-2 pr-8 w-full text-sm text-blue-100 bg-transparent  border border-opacity-30 border-blue-200 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 peer "
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
                      className="absolute text-md text-blue-100 duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] tracking-wide bg-transparent px-1 peer-focus:px-1 peer-focus:text-white   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Password
                    </label>
                  </div>

                  <div className="w-full flex flex-col justify-center items-center gap-2">
                    <button
                      type="submit"
                      className="text-blue-200 border p-1 border-blue-200 w-full rounded-lg hover:border-blue-900 hover:text-blue-900 hover:bg-green-100"
                    >
                      Register
                    </button>
                    <p className="text-blue-100">
                      Already have an account?
                      <NavLink to="/login" className="text-blue-400 hover:underline">
                        Login
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
