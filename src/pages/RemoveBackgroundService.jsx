import React, { useState } from "react";

function RemoveBackgroundService() {
  const [image, setImage] = useState(null);
  const [bgRemove, setBgRemove] = useState(null);

  const handleRemoveBackground = async () => {
    const apiKey = "ok5knp9ujpNHXnih1RFbCsC1";
    const apiUrl = "https://api.remove.bg/v1.0/removebg";

    const formData = new FormData();
    formData.append("image_file", image, image.name);
    formData.append("size", "auto");

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "X-Api-Key": apiKey,
        },
        body: formData,
      });

      const data = await res.blob();

      const reader = new FileReader();
      reader.onloadend = () => setBgRemove(reader.result);
      reader.readAsDataURL(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(image);

  return (
    <div className="pt-[60px] text-white flex flex-col items-center ">
      <span className="my-5">
        <img
          src="https://sb.kaleidousercontent.com/67418/1024x1024/29e2b38e80/rbg-macos-app-icon-2x.png"
          width={"50px"}
          alt="loading"
        />
      </span>
      <h1 className="text-3xl font-bold">Remove Background</h1>
      <h3 className="text-xl">In simple way</h3>
      <div className="input border border-gray-500 px-2 py-2 rounded-lg bg-gray-950 mt-5">
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="text-sm text-white file:mr-5 file:py-1 file:px-3  file:text-xs file:font-medium file:border-0 file:rounded-md file:bg-gray-800 file:text-white hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700 lg:w-[40em]"
        />
      </div>
      <div className="h-10 mt-2 flex justify-center items-center">
        <button
          onClick={handleRemoveBackground}
          className="py-1 px-3 hover:px-4 hover:py-2  text-black mt-5 rounded-md cursor-pointer bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:text-lg"
        >
          Remove Background
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 my-10 ">
        {image && (
          <div className="border-2 border-gray-500 rounded-l-lg border-dashed flex flex-col gap-2 justify-center items-center p-2 w-40 lg:w-80">
            <img
              className="w-90 h-90"
              src={image ? URL.createObjectURL(image) : ""}
              alt=""
            />
            <span>Your Image</span>
          </div>
        )}
        {bgRemove && (
          <div className="border-2 border-gray-500 rounded-r-lg border-dashed flex flex-col gap-2 justify-center items-center p-2 w-40 lg:w-80">
            <img className="w-90 h-90" src={bgRemove} alt="img" />
            <span>Image Output</span>
          </div>
        )}
      </div>
      {bgRemove && (
        <div className="flex justify-center">
          <a className="w-72" href={bgRemove} download={"save.png"}>
            <button className=" bg-white text-black w-full py-2 px-3 rounded-lg hover:bg-gray-400 hover:text-white">
              Download
            </button>
          </a>
        </div>
      )}
    </div>
  );
}

export default RemoveBackgroundService;
