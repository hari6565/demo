import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Tooltip,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Code,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Kbd,
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
import { FaPlay } from "react-icons/fa6";
import { RiFeedbackLine } from "react-icons/ri";

export default function Topbar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [open, setopen] = useState(false);
  return (
    <Navbar isBordered className="h-11">
      <NavbarBrand className=" -ml-44">
        <Image className=" w-8 h-8 " src={logo} alt=""></Image>
        <p className="font-bold text-inherit text-black">Torus</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Tooltip placement={"bottom"} content={"Help Menu"} color="secondary">
            <Link onPress={() => setopen(true)}>
              <AiOutlineQuestionCircle className="w-6 h-6 text-black" />
            </Link>
          </Tooltip>
          <Modal size={"sm"} isOpen={open} onOpenChange={setopen}>
            <ModalContent>
              <div>
                <h1 className="font-bold">Need Help?</h1>
                <h1 className="text-sm">
                  We value user feedback and want to help.
                </h1>
                <Divider className="my-2" />
                <h1>Torus Community</h1>
                <div className="flex gap-2">
                  <RiFeedbackLine className="w-6 h-6" />
                  <h1>Feedback</h1>
                </div>
              </div>
            </ModalContent>
          </Modal>
        </NavbarItem>
        <NavbarItem isActive>
          <Tooltip
            placement={"bottom"}
            content={"Keyboard Shortcuts"}
            color="secondary"
          >
            <Link onPress={onOpen}>
              <MdOutlineKeyboardCommandKey className="w-6 h-6  text-black" />
            </Link>
          </Tooltip>
          <Modal size={"xs"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              <ModalHeader>Icon Keyboard palette</ModalHeader>
              <ModalBody>
                <h1>General</h1>
                <div>
                  <h1 className="flex justify-between">
                    Command Palette
                    <Kbd>ctrl + K</Kbd>
                  </h1>
                  <h1 className="flex justify-between my-3">
                    Cut Widget
                    <Kbd>ctrl + X</Kbd>
                  </h1>
                  <h1 className="flex justify-between my-3">
                    Copy Widget
                    <Kbd>ctrl + C</Kbd>
                  </h1>
                  <h1 className="flex justify-between my-3">
                    Duplicate Widget
                    <Kbd>ctrl + D</Kbd>
                  </h1>
                  <h1 className="flex justify-between my-3">
                    Paste Widget
                    <Kbd>ctrl + V</Kbd>
                  </h1>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </NavbarItem>
        <NavbarItem>
          <Tooltip
            placement={"bottom"}
            content={"Command Palette"}
            color="secondary"
          >
            <Link href="#">
              <IoSearchSharp className="w-6 h-6  text-black" />
            </Link>
          </Tooltip>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className=" -mr-28 ">
        <div className="hover:border-1 hover:rounded-xl ">
          <NavbarItem>
            <Tooltip
              placement={"bottom"}
              content={"It's been 28 days since you last saved a new version."}
              color="secondary"
            >
              <Link className=" text-black" href="#">
                <FcAlarmClock className="w-6 h-6 " />
                v1
              </Link>
            </Tooltip>
          </NavbarItem>
        </div>
        <div className="hover:border-1 hover:rounded-xl ">
          <NavbarItem>
            <Tooltip
              placement={"bottom"}
              content={"Comments"}
              color="secondary"
            >
              <Link href="#">
                <FcOk className="w-6 h-6 " />
                <LiaComments className="w-6 h-6  text-black" />
              </Link>
            </Tooltip>
          </NavbarItem>
        </div>
        <div className="hover:border-1 hover:rounded-xl ">
          <NavbarItem>
            <Tooltip
              placement={"bottom"}
              content={"Project Issues"}
              color="secondary"
            >
              <Link href="#">
                <FcOk className="w-6 h-6" />
                <GrBug className="w-5 h-5  text-black" />
              </Link>
            </Tooltip>
          </NavbarItem>
        </div>
        <div className="hover:border-1 hover:rounded-md ">
          <NavbarItem>
            <Tooltip
              placement={"bottom"}
              content={"Dveloper Menu"}
              color="secondary"
            >
              <Link href="#">
                <FaCode className="w-6 h-6  text-black" />
              </Link>
            </Tooltip>
          </NavbarItem>
        </div>
        <div className="hover:border-1 hover:rounded-md ">
          <NavbarItem>
            <Tooltip
              placement={"bottom"}
              content={"Project Share"}
              color="secondary"
            >
              <Link href="#">
                <RiShareBoxFill className="w-6 h-6  text-black" />
              </Link>
            </Tooltip>
          </NavbarItem>
        </div>
        <NavbarItem>
          <Tooltip
            placement={"bottom"}
            content={"Preview App"}
            color="secondary"
          >
            <Button className=" bg-white ">
              <MdPreview className="w-8 h-8 text-orange-600 " />
            </Button>
          </Tooltip>
        </NavbarItem>

        <NavbarItem>
          <div className="w-9">
            <Popover placement={"bottom"} color="default">
              <PopoverTrigger>
                <Button color="primary" href="#">
                  <AiFillThunderbolt className="w-5 h-5 text-white" />
                  <Divider orientation="vertical" />
                  <IoIosArrowDown className="w-5 h-5 text-white" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="bg-white ">
                  <h1 className=" font-bold">Test, Run & publish </h1>
                  <div className="flex justify-between gap-3">
                    <h1> Use test mode for faster iteration.</h1>
                    <Button isIconOnly color="primary" className="-mt-4">
                      <FaPlay />
                    </Button>
                    <Button color="primary" href="#" className="-mt-4">
                      <AiFillThunderbolt className="w-5 h-5 text-white" />
                      Test
                    </Button>
                  </div>
                </div>
                <Divider className="my-2" />
                <div className="bg-slate-200 w-full flex justify-center gap-3">
                  <h1 className="">
                    You must enable the web platform in settings<br></br> in
                    order to publish to the web.
                  </h1>
                  <Button color="primary" href="#" className="">
                    <RiShareBoxFill className="w-6 h-6  text-white" />
                    Go to Setting
                  </Button>
                </div>
                <Divider className="my-2" />
                <div className=" w-full gap-2">
                  <h1 className="font-bold">Project Run Versions</h1>
                  <h1>
                    Below are the versions of your post builda or run modes.
                    <br></br> you can copy and share links.
                  </h1>
                  <Code className="my-5">
                    No previous builds. Hit the Run button to start a build.
                  </Code>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
