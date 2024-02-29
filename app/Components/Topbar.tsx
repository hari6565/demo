import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Tooltip,
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

export default function Topbar() {
  return (
    <Navbar isBordered className=" h-12 ">
      <NavbarBrand className=" -ml-40">
        <Image className=" w-8 h-8 mr-5" src={logo} alt=""></Image>
        <p className="font-bold text-inherit -ml-4">Torus</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Tooltip placement={"bottom"} content={"Help Menu"} color="secondary">
            <Link color="foreground" href="#">
              <AiOutlineQuestionCircle className="w-6 h-6" />
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" color="foreground">
            <MdOutlineKeyboardCommandKey className="w-6 h-6" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <IoSearchSharp className="w-6 h-6" />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="hover:border-1 hover:rounded-xl ">
          <NavbarItem>
            <Link color="foreground" href="#">
              <FcAlarmClock className="w-6 h-6" />
              v1
            </Link>
          </NavbarItem>
        </div>
        <div className="hover:border-1 hover:rounded-xl ">
          <NavbarItem>
            <Link color="foreground" href="#">
              <FcOk className="w-6 h-6" />
              <LiaComments className="w-6 h-6" />
            </Link>
          </NavbarItem>
        </div>
        <div className="hover:border-1 hover:rounded-xl ">
          <NavbarItem>
            <Link color="foreground" href="#">
              <FcOk className="w-6 h-6" />
              <GrBug className="w-5 h-5" />
            </Link>
          </NavbarItem>
        </div>
        <div className="hover:border-1 hover:rounded-md ">
          <NavbarItem>
            <Link color="foreground" href="#">
              <FaCode className="w-6 h-6" />
            </Link>
          </NavbarItem>
        </div>
        <div className="hover:border-1 hover:rounded-md ">
          <NavbarItem>
            <Link color="foreground" href="#">
              <RiShareBoxFill className="w-6 h-6" />
            </Link>
          </NavbarItem>
        </div>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
