import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Tooltip,
  Divider,
} from "@nextui-org/react";
import logo from "../assets/logo.ico";
import Image from "next/image";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FcAlarmClock } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { LiaComments } from "react-icons/lia";
import { GrBug } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { RiShareBoxFill } from "react-icons/ri";
import { MdPreview } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export default function Topbar() {
  return (
    <Navbar isBordered className="h-11">
      <NavbarBrand className=" -ml-44">
        <Image className=" w-8 h-8 " src={logo} alt=""></Image>
        <p className="font-bold text-inherit text-black">Torus</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#">
            <AiOutlineQuestionCircle className="w-6 h-6 text-black" />
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#">
            <MdOutlineKeyboardCommandKey className="w-6 h-6  text-black" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <IoSearchSharp className="w-6 h-6  text-black" />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className=" -mr-10">
        <div className="hover:border-1 hover:rounded-xl ">
          <NavbarItem>
            <Link className=" text-black" href="#">
              <FcAlarmClock className="w-6 h-6 " />
              v1
            </Link>
          </NavbarItem>
        </div>
        <div className="hover:border-1 hover:rounded-xl ">
          <NavbarItem>
            <Link href="#">
              <FcOk className="w-6 h-6 " />
              <LiaComments className="w-6 h-6  text-black" />
            </Link>
          </NavbarItem>
        </div>
        <div className="hover:border-1 hover:rounded-xl ">
          <NavbarItem>
            <Link href="#">
              <FcOk className="w-6 h-6" />
              <GrBug className="w-5 h-5  text-black" />
            </Link>
          </NavbarItem>
        </div>
        <div className="hover:border-1 hover:rounded-md ">
          <NavbarItem>
            <Link href="#">
              <FaCode className="w-6 h-6  text-black" />
            </Link>
          </NavbarItem>
        </div>
        <div className="hover:border-1 hover:rounded-md ">
          <NavbarItem>
            <Link href="#">
              <RiShareBoxFill className="w-6 h-6  text-black" />
            </Link>
          </NavbarItem>
        </div>
        <NavbarItem>
          <div className="">
            <Button className=" bg-white ">
              <MdPreview className="w-8 h-8 text-orange-600 " />
            </Button>
          </div>
        </NavbarItem>

        <NavbarItem>
          <div className="w-9">
            <Button color="primary" href="#">
              <AiFillThunderbolt className="w-5 h-5 text-white" />
              <Divider orientation="vertical" />
              <IoIosArrowDown className="w-5 h-5 text-white" />
            </Button>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
