import React, { useState } from "react";
import ReactFlow from "reactflow";

import "reactflow/dist/style.css";
import { RiExpandLeftFill } from "react-icons/ri";
import { RiExpandRightFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa6";
import { MdOutlinePermDataSetting } from "react-icons/md";
import { MdOutlineTextFields } from "react-icons/md";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Slider,
  Switch,
  Input,
} from "@nextui-org/react";
import WorkingArea from "./WorkingArea";
import { useDispatch, useSelector } from "react-redux";
import { setExpand, setWorkspaceSize } from "../StateManage/NextUISlice";

const Workpage = () => {
  const isPreView = useSelector((state: any) => state.counter.isPreView);
  const isExpand = useSelector((state: any) => state.counter.isExpand);

  const workspaceSize = useSelector(
    (state: any) => state.counter.workspaceSize
  );
  const disPatch = useDispatch();

  const [keyboard, setKeyboard] = useState(false);

  return (
    <div className={`relative h-[80vh] ${isExpand ? "w-[50vw]" : "w-[72vw]"}`}>
      {isPreView && (
        <div className="flex justify-between z-40 w-[99%] h-[15%] pl-2 pt-2">
          <div className="flex gap-2 z-40">
            <Button
              size="sm"
              variant="bordered"
              className="hover:bg-orange-300"
              onClick={() => disPatch(setExpand())}
            >
              {isExpand ? (
                <RiExpandLeftFill size={20} />
              ) : (
                <RiExpandRightFill size={20} />
              )}
            </Button>
            <Button
              size="sm"
              variant="bordered"
              className="hover:bg-orange-300"
              onClick={() =>
                disPatch(
                  setWorkspaceSize(
                    workspaceSize <= 50 ? 50 : workspaceSize - 10
                  )
                )
              }
            >
              <FaMinus size={20} />
            </Button>
            <Button size="sm" variant="bordered">
              {workspaceSize}
            </Button>
            <Button
              size="sm"
              variant="bordered"
              className="hover:bg-orange-300"
              onClick={() =>
                disPatch(
                  setWorkspaceSize(
                    workspaceSize >= 100 ? 100 : workspaceSize + 10
                  )
                )
              }
            >
              <FaPlus size={20} />
            </Button>
          </div>
          <div className="flex gap-2 z-40">
            <Button
              onClick={() => setKeyboard((pre) => !pre)}
              size="sm"
              variant="bordered"
              className="hover:bg-orange-300"
            >
              <FaRegKeyboard size={20} />
            </Button>
            <Popover>
              <PopoverTrigger>
                <Button
                  size="sm"
                  variant="bordered"
                  className="hover:bg-orange-300"
                >
                  <MdOutlinePermDataSetting size={20} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="  ">
                  <div className="flex justify-between ">
                    <h1>Safe Area</h1>
                    <Switch defaultSelected aria-label="Automatic updates" />
                  </div>
                  <div className="flex justify-between my-2">
                    <h1>Resize Snapping</h1>
                    <Switch defaultSelected aria-label="Automatic updates" />
                  </div>
                  <div className="flex justify-between gap-2">
                    <Input
                      className="w-24"
                      type="email"
                      label="Width px%"
                      labelPlacement="outside"
                    />
                    <Input
                      className="w-24"
                      type="email"
                      label="Height px%"
                      labelPlacement="outside"
                    />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Popover placement="bottom-end">
              <PopoverTrigger>
                <Button
                  size="sm"
                  variant="bordered"
                  className="hover:bg-orange-300"
                >
                  <MdOutlineTextFields size={20} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div>
                  <Slider
                    size="sm"
                    step={0.1}
                    color="foreground"
                    label="Text Scale"
                    showSteps={true}
                    maxValue={1}
                    minValue={0}
                    defaultValue={0.2}
                    className=" w-48"
                  />
                  <div className="flex justify-between">
                    <h1>Smaller</h1>
                    <h1>Default</h1>
                    <h1>Larger</h1>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      )}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <WorkingArea keyboard={keyboard} setKeyboard={setKeyboard} />
      </div>
    </div>
  );
};

export default Workpage;
