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
  setpreView,
}: any) => {
  return (
    <div
      className={` ${
        preView
          ? "flex flex-col absolute left-0 top-0 right-0 bottom-0 w-screen h-screen z-40"
          : "flex justify-center items-center w-full h-full"
      } `}
    >
      {preView && (
        <div className="flex justify-end items-end bg-black">
          <Button onClick={() => setpreView(false)}>X</Button>
        </div>
      )}
      <div
        className={`flex justify-center items-end bg-white border-2 border-slate-600 opacity-${opacity} ${
          disSize == 80
            ? preView
              ? "w-full h-full"
              : "w-[80%] h-[90%]"
            : disSize == 70
            ? preView
              ? "w-full h-full"
              : "w-[70%] h-[80%]"
            : disSize == 60
            ? preView
              ? "w-full h-full"
              : "w-[60%] h-[70%]"
            : preView
            ? "w-full h-full"
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
