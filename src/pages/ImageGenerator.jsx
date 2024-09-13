// import React, { useRef, useState } from "react";

// function ImageGenerator() {
//   const [image_url, setImage_url] = useState("/");
//   let inputRef=useRef(null)
//   const default_image = "https://envisage.nz/wp-content/uploads/2023/02/coNTrolAi_cyborg_holding_a_magic_flower_romantic_pose_neon.jpg"

//   const imageGenerator=async()=>{
//     if(inputRef.current.value===""){
//       return 0;
//     }
//     const response = await fetch("")
//   }

//   return (
//     <div className="pt-[60px] text-white flex flex-col gap-10 items-center">
//       <h1 className="font-bold text-4xl">
//         AI Image
//         <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ml-2">
//           Generator
//         </span>
//       </h1>
//       <div>
//         {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BYc_KGmeWEJ3n86X1RmfBIoRR-VogE1O1Pl68I2aUQ&s" alt="" /> */}
//         <img
//           src={image_url==="/"?default_image:image_url}
//           alt="load"
//           width={"350px"}
//         />
//       </div>
//       <div className="flex flex-col gap-5 items-center">
//         <input
//           type="text" ref={inputRef}
//           placeholder="Describe what you want to see "
//           className="p-2 outline-none bg-zinc-700 text-gray-200 w-[50vw] rounded-sm"
//         />
//         <button className="bg-zinc-700  py-2 w-[150px] rounded-md  hover:text-black hover:bg-gray-400">
//           Generate
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ImageGenerator;
