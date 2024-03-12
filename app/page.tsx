import React from "react";
import Main from "./Components/Main";
//  import Dt from './Components/Dt'

const page = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default page;

// "use client";
// import React from "react";
// import { FaRegFileAlt } from "react-icons/fa";
// import { Button } from "@nextui-org/react";
// import Topbar from "./Components/Topbar";

// const data = [
//   { title: "Wages Protection System" },
//   { title: "Veracious Payment Hub" },
//   { title: "SWIFT" },
//   { title: "VPH Portal" },
//   { title: "NPSS Edge" },
//   { title: "Core" },
//   { title: "Amal Siraj Finance System" },
//   { title: "Veracios Access Controller" },
//   { title: "FUNDS Transfer System" },
//   { title: "Wages Protection System" },
//   { title: "Wages Protection System" },
//   { title: "Wages Protection System" },
//   { title: "Wages Protection System" },
//   { title: "Wages Protection System" },
//   { title: "Wages Protection System" },
//   { title: "Wages Protection System" },
//   { title: "Wages Protection System" },
//   { title: "Wages Protection System" },
//   { title: "Wages Protection System" },
//   { title: "Wages Protection System" },
// ];

// const page = () => {
//   return (
//     <div>
//       <Topbar sideState={"sdfsd"} />
//       <div className="grid grid-cols-4 gap-2 border border-black p-3">
//         {data.map((item, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <Button
//               size="md"
//               variant="bordered"
//               className="border-2 border-blue-500 px-4 py-2 rounded-md h-15 w-0 mx-5 mb-1"
//             >
//               <FaRegFileAlt className="text-3xl mb-2" />
//             </Button>
//             <p className="mx-4 text-lg">{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;
