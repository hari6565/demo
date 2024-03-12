import React from "react";
import Image from "next/image";
import picture from "../assets/keyboard.png";
import { Button } from "@nextui-org/react";
import { IoCloseSharp } from "react-icons/io5";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";
import { useDispatch, useSelector } from "react-redux";
import { setPreView } from "../StateManage/NextUISlice";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const WorkingArea = ({ keyboard, setKeyboard }: any) => {
  const isPreView = useSelector((state: any) => state.counter.isPreView);
  const opacity = useSelector((state: any) => state.counter.opacity);
  const workspaceSize = useSelector(
    (state: any) => state.counter.workspaceSize
  );
  const disPatch = useDispatch();
  return (
    <div
      className={` ${
        !isPreView
          ? "flex flex-col absolute left-0 top-0 right-0 bottom-0 w-screen h-screen z-40"
          : "flex justify-center items-center w-full h-full"
      } `}
    >
      <div
        // className={`flex flex-col justify-center items-end bg-white border-2 border-slate-600 opacity-${opacity} ${
        //   workspaceSize == 80
        //     ? isPreView
        //       ? "w-full h-full"
        //       : "w-[80%] h-[90%]"
        //     : workspaceSize == 70
        //     ? isPreView
        //       ? "w-full h-full"
        //       : "w-[70%] h-[80%]"
        //     : workspaceSize == 60
        //     ? isPreView
        //       ? "w-full h-full"
        //       : "w-[60%] h-[70%]"
        //     : isPreView
        //     ? "w-full h-full"
        //     : "w-[50%] h-[60%]"
        // }`}

        // className={`flex flex-col justify-center items-end bg-white border-2 border-slate-600 opacity-${opacity} ${
        //   isPreView
        //     ? "w-full h-full"
        //     : workspaceSize == 80
        //     ? "w-[100%] h-[100%]"
        //     : workspaceSize == 70
        //     ? "w-[70%] h-[80%]"
        //     : workspaceSize == 60
        //     ? "w-[60%] h-[70%]"
        //     : "w-[50%] h-[60%]"
        // }`}

        className={`flex flex-col bg-white border-2 border-slate-600 opacity-${opacity} ${
          !isPreView
            ? "w-full h-full"
            : `w-[${workspaceSize as string}%] h-[${workspaceSize as string}%]`
        }`}

        // className={`flex flex-col justify-center items-end bg-white border-2 border-slate-600 opacity-${opacity} ${
        //   isPreView ? "w-full h-full" : `w-[80%] h-[80%]`
        // }`}
      >
        {!isPreView && (
          <div className=" absolute right-10 top-1 z-40 bg-transparent w-7 h-7 rounded-full">
            <Button
              onClick={() => disPatch(setPreView())}
              size="sm"
              className="rounded-full bg-red-300"
            >
              <IoCloseSharp />
            </Button>
          </div>
        )}
        <ReactFlow nodes={initialNodes} edges={initialEdges}>
          <Background variant={"lines"} gap={12} size={1} />
        </ReactFlow>
        {keyboard && (
          <div className="bg-black">
            <div className="flex  items-end justify-end bg-black">
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
