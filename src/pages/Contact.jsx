import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};


export const Contact = () => {

  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);
  const { user, BaseUrl } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BaseUrl}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Message send successfully");
      }
    } catch (error) {
      toast.error("Message not send");
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <div className="mt-[65px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white bg-black ml-4 mr-4 rounded-br-[95px] rounded-tl-[95px]  px-10 py-5 border-2  border-[rgba(255,255,255,.2)]">
          <h1 className="text-center text-5xl font-Oxanium font-bold animate-pulse">
            Contact Us
          </h1>

          <div className="flex sm:flex-row flex-col justify-center items-center sm:items-start sm:gap-9 gap-5 mt-4">
            {/* left part */}
            <div className="relative h-[200px] w-[200px] bg-[rgba(0,0,0,.75)] rounded-full flex mt-[35px] justify-center items-center animate-bounce before:content-[''] before:absolute before:w-[600px] before:h-[600px] before:bg-[conic-gradient(transparent,transparent,transparent,#2563EB)] before:animate-spin  after:content-[''] after:absolute after:w-[600px] after:h-[600px] after:bg-[conic-gradient(transparent,transparent,#2563EB,transparent)] after:animate-spin truncate">
              <div className="absolute  inset-[1.5px] bg-black z-[1] rounded-full flex justify-center items-center truncate">
                <img src="./images/profileImg2.png" alt="loading" />
              </div>
            </div>

            {/* right part  */}
            <div className="relative h-[430px] w-[350px] bg-[rgba(0,0,0,.75)] rounded-tl-3xl rounded-br-3xl  flex justify-center items-center before:content-[''] before:absolute before:w-[600px] before:h-[600px] before:bg-[conic-gradient(transparent,transparent,transparent,#2563EB)] before:animate-spin  after:content-[''] after:absolute after:w-[600px] after:h-[600px] after:bg-[conic-gradient(transparent,transparent,#2563EB,transparent)] after:animate-spin truncate">
              <div className="absolute  inset-[2px] bg-black z-[1] rounded-tl-3xl rounded-br-3xl truncate">
                <div className="w-[350px] rounded-lg p-5 flex flex-col gap-4">
                  <div className=" relative font-Oxanium">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={contact.username}
                      onChange={handleInput}
                      className="block p-2 w-full text-sm text-white bg-transparent  border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-0 focus:border-white peer "
                      placeholder=""
                    />
                    <label
                      htmlFor="username"
                      className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] tracking-wide bg-black px-1 peer-focus:px-1 peer-focus:text-white   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Username
                    </label>
                  </div>
                  <div className=" relative font-Oxanium">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={contact.email}
                      onChange={handleInput}
                      className="block p-2 w-full text-sm text-white bg-transparent  border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-0 focus:border-white peer "
                      placeholder=""
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] tracking-wide bg-black px-1 peer-focus:px-1 peer-focus:text-white   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative font-Oxanium">
                    <textarea
                      name="message"
                      id="message"
                      rows="10"
                      value={contact.message}
                      onChange={handleInput}
                      className="block p-2  w-full text-sm text-white bg-transparent  border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-0 focus:border-white peer "
                      placeholder=""
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute top-2 text-sm text-white duration-300 transform -translate-y-4 scale-75  z-10 origin-[0] tracking-wide bg-black px-1 peer-focus:px-1 peer-focus:text-white   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:left-auto start-1"
                    >
                      Message Here...
                    </label>
                  </div>
                  <div className="w-full flex flex-row-reverse">
                    <button
                      type="submit"
                      className=" font-semibold px-2 py-1 text-white rounded-full border-2 border-blue-600 hover:text-blue-600 hover:border-white  "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
