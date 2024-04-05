import { useAuth } from "../store/auth";

export const Service = () => {
  const { info } = useAuth();

  return (
    <>
      {/* {console.log(info)} */}
      <div className="mt-[65px]  text-white bg-black shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ml-4 mr-4 rounded-br-[95px] rounded-tl-[95px]  px-10 py-5 border-2  border-[rgba(255,255,255,.2)] ">
        <h1 className="text-center text-5xl font-Oxanium font-bold animate-pulse">
          Specimen Services
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 mt-4 ">
          {info.map((currElem, index) => {
            const { service, description, price, provider } = currElem;

            return (
              <div
                className="flex  gap-4  bg-pink-700 rounded-xl relative h-[180px]    justify-center items-center before:content-[''] before:absolute before:w-[600px] before:h-[600px]  before:animate-spin  before:bg-[conic-gradient(transparent,transparent,transparent,#FFFFFF)] after:content-[''] after:absolute after:w-[600px] after:h-[600px] after:bg-[conic-gradient(transparent,transparent,#FFFFFF,transparent)] after:animate-spin truncate"
                key={index}
              >
                <div className="absolute  inset-[1.5px] bg-pink-700  rounded-xl z-[1] p-2 flex text-wrap justify-evenly gap-4 truncate">
                  {/* card left part */}
                  <div className="flex  bg-pink-700 rounded-full relative h-[50px] w-[50px]    justify-center items-center before:content-[''] before:absolute before:w-[600px] before:h-[600px]  before:animate-spin  before:bg-[conic-gradient(transparent,transparent,transparent,#FFFFFF)] after:content-[''] after:absolute after:w-[600px] after:h-[600px] after:bg-[conic-gradient(transparent,transparent,#FFFFFF,transparent)] after:animate-spin truncate">
                    <div className="absolute  inset-[1.5px] bg-pink-700 rounded-full z-[1] flex  justify-center items-center truncate">
                      <img
                        src="./images/profileImg2.png"
                        alt="loading"
                        width="70"
                      />
                    </div>
                  </div>
                  {/* card right part */}
                  <div className=" w-4/5">
                    <p className="font-bold underline">{service}</p>
                    <p>{description}</p>
                    <p className="flex gap-2">
                      <p className="text-black font-bold">Provider : </p>
                      {provider}
                    </p>
                    <p className="flex gap-2">
                      <p className="text-black font-bold">Price : </p>
                      {price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
