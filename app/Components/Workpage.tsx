import React, { useState } from "react";
import { RiExpandLeftFill } from "react-icons/ri";
import { RiExpandRightFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa6";
import { MdOutlinePermDataSetting } from "react-icons/md";
import { MdOutlineTextFields } from "react-icons/md";
import {
  Button,
  Card,
  CardBody,
  Kbd,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Slider,
  Switch,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import picture from "../assets/keyboard.png";

const Workpage = ({ toggle, setToggle }: any) => {
  const [disSize, setDisSize] = useState(80);
  const [keyboard, setKeyboard] = useState(false);

  return (
    <div className={`h-[80vh] ${!toggle ? "w-[48vw]" : "w-[70vw]"}`}>
      <div className="flex justify-between w-[99%] h-[15%] pl-2 pt-2">
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="bordered"
            className="hover:bg-orange-300"
            onClick={() => setToggle((pre: any) => !pre)}
          >
            {!toggle ? (
              <RiExpandLeftFill size={20} />
            ) : (
              <RiExpandRightFill size={20} />
            )}
          </Button>
          <Button
            size="sm"
            variant="bordered"
            className="hover:bg-orange-300"
            onClick={() => setDisSize((pre) => (pre <= 50 ? 50 : pre - 10))}
          >
            <FaMinus size={20} />
          </Button>
          <Button size="sm" variant="bordered">
            {disSize == 80
              ? "100%"
              : disSize == 70
              ? "75%"
              : disSize == 60
              ? "50%"
              : "25%"}
          </Button>
          <Button
            size="sm"
            variant="bordered"
            className="hover:bg-orange-300"
            onClick={() => setDisSize((pre) => (pre >= 80 ? 80 : pre + 10))}
          >
            <FaPlus size={20} />
          </Button>
        </div>
        <div className="flex gap-2">
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
      <div className="flex justify-center items-center w-full h-full">
        <div
          className={`flex justify-center items-end bg-white border-2 border-slate-600 ${
            disSize == 80
              ? "w-[80%] h-[90%]"
              : disSize == 70
              ? "w-[70%] h-[80%]"
              : disSize == 60
              ? "w-[60%] h-[70%]"
              : "w-[50%] h-[60%]"
          }`}
          // className={`flex justify-center items-center w-[${String(
          //   disSize
          // )}%] h-[${String(
          //   disSize + 10
          // )}%] bg-slate-100 border-2 border-slate-600`}
        >
          {/* <Image className="w-10 h-96" src={keyBoard} alt=""></Image> */}
          {keyboard && (
            <div className=" flex items-end">
              <Image className="  " src={picture} alt=""></Image>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workpage;
