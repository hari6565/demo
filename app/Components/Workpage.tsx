import React, { useState } from "react";
import { RiExpandLeftFill } from "react-icons/ri";
import { RiExpandRightFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa6";
import { MdOutlinePermDataSetting } from "react-icons/md";
import { MdOutlineTextFields } from "react-icons/md";
import { Button } from "@nextui-org/react";

const Workpage = ({ toggle, setToggle }: any) => {
  const [disSize, setDisSize] = useState(80);
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
            {disSize + 20}%
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
          <Button size="sm" variant="bordered" className="hover:bg-orange-300">
            <FaRegKeyboard size={20} />
          </Button>
          <Button size="sm" variant="bordered" className="hover:bg-orange-300">
            <MdOutlinePermDataSetting size={20} />
          </Button>
          <Button size="sm" variant="bordered" className="hover:bg-orange-300">
            <MdOutlineTextFields size={20} />
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <div
          className={`flex justify-center items-center w-[${String(
            disSize
          )}%] h-[${String(disSize + 5)}%] bg-slate-100`}
        ></div>
      </div>
    </div>
  );
};

export default Workpage;
