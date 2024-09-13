import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Service = () => {
  const { info } = useAuth();

  return (
    <>
      {/* {console.log(info)} */}
      <div className="mt-[65px]  text-white bg-black shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ml-4 mr-4 rounded-br-[95px] rounded-tl-[95px]  px-10 py-5 border-2  border-[rgba(255,255,255,.2)] ">
        <h1 className="text-center text-5xl font-Oxanium font-bold animate-pulse">
          Services
        </h1>
        <ul className=" my-10 flex justify-center items-center flex-wrap gap-16">
          <li className="py-2 px-4 flex flex-col items-center gap-3 bg-zinc-900 rounded-md w-[300px]  shadow-[rgba(255,_255,_255,_0.4)_0px_0px_0px_2px,_rgba(255,_255,_255,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] ">
            <Link
              to="/service/remove-bg"
              className="hover:text-green-400 underline text-xl"
            >
              Remove Background
            </Link>
            <div className="flex gap-10">
              <span className="w-2/4">
                {" "}
                <img
                  src="https://sb.kaleidousercontent.com/67418/1024x1024/29e2b38e80/rbg-macos-app-icon-2x.png"
                  width={"80px"}
                  alt="loading"
                />
              </span>
              <span>
                A background remover service that removes backgrounds from
                images in easy way.
                <Link
                  to="/service/remove-bg"
                  className="hover:text-green-400 underline "
                >
                  Try Now...
                </Link>
              </span>
            </div>
          </li>

          <li className="py-2 px-4 flex flex-col items-center gap-3 bg-zinc-900 rounded-md w-[300px]  shadow-[rgba(255,_255,_255,_0.4)_0px_0px_0px_2px,_rgba(255,_255,_255,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] ">
            <Link
              to="/service/qr-generator"
              className="hover:text-green-400 underline text-xl"
            >
              Generate QR With Text
            </Link>
            <div className="flex gap-10">
              <span className="w-2/4">
                {" "}
                <img
                  src="https://sb.kaleidousercontent.com/67418/1024x1024/29e2b38e80/rbg-macos-app-icon-2x.png"
                  width={"80px"}
                  alt="loading"
                />
              </span>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                doloremque?
                <Link
                  to="/service/qr-generator"
                  className="hover:text-green-400 underline "
                >
                  Try Now...
                </Link>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
