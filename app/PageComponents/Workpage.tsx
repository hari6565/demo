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
import { useDispatch, useSelector } from "react-redux";
import {
  setExpand,
  setWorkspaceSize,
  setStateTrack,
  setPropsOpen,
} from "../StateManage/NextUISlice";

import { Dashboard } from "./Dashboard";

const Workpage = () => {
  const isPreView = useSelector((state: any) => state.counter.isPreView);
  const isExpand = useSelector((state: any) => state.counter.isExpand);
  const isPropsOpen = useSelector((state: any) => state.counter.isPropsOpen);

  const workspaceSize = useSelector(
    (state: any) => state.counter.workspaceSize
  );
  const disPatch = useDispatch();

  return (
    <div className={`relative h-full w-full`}>
      {isPreView && (
        <div className="flex justify-between z-40 w-full h-[15%] pl-2 pt-2">
          <div className="flex gap-2 z-40">
            <Button
              isIconOnly
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
          </div>
          <div className="flex gap-2 z-40"></div>
          {isPropsOpen && (
            <div className="flex gap-2 z-40">
              <Button
                size="sm"
                variant="bordered"
                className="hover:bg-orange-300"
                onClick={() => disPatch(setPropsOpen())}
              >
                {isExpand ? (
                  <RiExpandRightFill size={20} />
                ) : (
                  <RiExpandLeftFill size={20} />
                )}
              </Button>
            </div>
          )}
        </div>
      )}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Dashboard />
      </div>
    </div>
  );
};

export default Workpage;
