import React from "react";
import Image from "next/image";
import picture from "../assets/keyboard.png";
import { Button } from "@nextui-org/react";
import { IoCloseSharp } from "react-icons/io5";
const WorkingArea = ({
  opacity,
  disSize,
  keyboard,
  preView,
  setKeyboard,
}: any) => {
  return (
    <div
      className={`flex justify-center items-center ${
        preView ? " absolute left-0 top-2 w-full h-full z-40" : "w-full h-full"
      } `}
    >
      <div
        className={`flex justify-center items-end bg-white border-2 border-slate-600 opacity-${opacity} ${
          disSize == 80
            ? "w-[80%] h-[90%]"
            : disSize == 70
            ? "w-[70%] h-[80%]"
            : disSize == 60
            ? "w-[60%] h-[70%]"
            : "w-[50%] h-[60%]"
        }`}
      >
        {keyboard && (
          <div className="bg-black">
            <div className="flex items-end justify-end bg-black">
              <Button
                isIconOnly
                variant="light"
                onClick={() => setKeyboard(false)}
              >
                <IoCloseSharp className="text-white" />
              </Button>
            </div>
            <Image className="  " src={picture} alt=""></Image>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkingArea;
