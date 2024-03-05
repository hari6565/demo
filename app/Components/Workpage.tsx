import React from "react";
import { RiExpandLeftFill } from "react-icons/ri";
import { RiExpandRightFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa6";
import { MdOutlinePermDataSetting } from "react-icons/md";
import { MdOutlineTextFields } from "react-icons/md";
import { Button } from "@nextui-org/react";

const Workpage = ({ toggle, setToggle }: any) => {
  return (
    <div className={`h-[50vh] ${!toggle ? "w-[48vw]" : "w-[70vw]"}`}>
      <div className="flex justify-between w-[99%] h-[15%] pl-2 pt-2">
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="bordered"
            className="hover:bg-orange-300"
            onClick={() => setToggle((pre: any) => !pre)}
          >
            {toggle ? (
              <RiExpandLeftFill size={20} />
            ) : (
              <RiExpandRightFill size={20} />
            )}
          </Button>
          <Button size="sm" variant="bordered" className="hover:bg-orange-300">
            <FaMinus size={20} />
          </Button>
          <Button size="sm" variant="bordered" className="hover:bg-orange-300">
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
        <h3>workspace</h3>
      </div>
    </div>
  );
};

export default Workpage;
