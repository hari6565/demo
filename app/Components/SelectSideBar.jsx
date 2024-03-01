"use client";
import React from "react";
import { Accordion, AccordionItem, Input, Button } from "@nextui-org/react";
import { CiText } from "react-icons/ci";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { MdOutlineTableRows } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { RxButton } from "react-icons/rx";
import { FaRegCreditCard } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
import { CiGrid41 } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { TfiLayoutTab } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineRestorePage } from "react-icons/md";
import { MdOutlinePageview } from "react-icons/md";
import { SiCloudflarepages } from "react-icons/si";
import { MdOutlineContactPage } from "react-icons/md";
import { TbBrandPagekit } from "react-icons/tb";
import { SiPowerpages } from "react-icons/si";
import { IoDiamondOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { ImDelicious } from "react-icons/im";
import { FaFileMedical } from "react-icons/fa6";
import { PiFilesLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { CiMenuKebab } from "react-icons/ci";
import { LuListTree } from "react-icons/lu";
import { IoMdUnlock } from "react-icons/io";
import { TbFolderCog } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { MdExpand } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CiCircleAlert } from "react-icons/ci";

const Elements = [
  {
    id: 1,
    title: "Commonly used Elements",
    arr: [
      CiText,
      BsLayoutThreeColumns,
      MdOutlineTableRows,
      MdCheckBoxOutlineBlank,
      FaImage,
      RxButton,
    ],
  },
  {
    id: 2,
    title: "Layout Elements",
    arr: [
      MdOutlineTableRows,
      CiText,
      FaRegCreditCard,
      BsLayoutThreeColumns,
      RiStackLine,
      MdOutlineTableRows,
      TfiLayoutGrid3,
      TfiLayoutColumn3Alt,
      MdCheckBoxOutlineBlank,
      CiGrid41,
      FaImage,
      FaListUl,
      RxButton,
      MdCheckBoxOutlineBlank,
      TfiLayoutTab,
    ],
  },
  {
    id: 3,
    title: "BasedElements",
    arr: [
      CiText,
      FaRegCreditCard,
      BsLayoutThreeColumns,
      RiStackLine,
      MdOutlineTableRows,
      MdCheckBoxOutlineBlank,
      CiGrid41,
      FaImage,
      FaListUl,
      RxButton,
    ],
  },
  {
    id: 4,
    title: "PageElements",
    arr: [
      RxButton,
      FaImage,
      MdOutlinePageview,
      CiText,
      BsLayoutThreeColumns,
      MdOutlineTableRows,
      MdOutlineContactPage,
      MdOutlineRestorePage,
      FaRegCreditCard,
      SiPowerpages,
      RiStackLine,
      TbBrandPagekit,
      MdCheckBoxOutlineBlank,
      CiGrid41,
      SiCloudflarepages,
      FaListUl,
    ],
  },
];
export default function SelectSideBar({ state }) {
  return (
    <div className="w-[300px] h-full bg-slate-200 overflow-x-auto">
      {(() => {
        switch (state) {
          case "Elements":
            return (
              <div>
                <div className="p-2">
                  <Input
                    type="text"
                    placeholder="Search"
                    labelPlacement="outside"
                    className="w-[283px]"
                    startContent={<CiSearch />}
                  />
                </div>

                <Accordion variant="splitted" className="bg-slate-200">
                  {Elements.map((item, id) => (
                    <AccordionItem
                      key={id}
                      aria-label="Accordion 1"
                      title={item.title}
                      className=" text-sm bg-"
                    >
                      <div className="grid grid-cols-3 gap-4 text-black bg-slate-300 p-4 rounded-lg">
                        {item.arr.map((Icon, id) => {
                          return (
                            <div
                              key={id}
                              className=" border-2 border-white rounded-md p-2 flex justify-center items-center"
                            >
                              {React.createElement(Icon, { size: 30 })}
                            </div>
                          );
                        })}
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          case "tree":
            return (
              <div className="flex flex-col p-2 gap-2">
                <div className="flex justify-between">
                  <Button
                    isIconOnly
                    color="default"
                    variant="faded"
                    aria-label="Take a photo"
                  >
                    <LuListTree size={20} />
                  </Button>
                  <Button
                    isIconOnly
                    color="default"
                    variant="faded"
                    aria-label="Take a photo"
                    className="w-[120px] flex justify-between p-2"
                  >
                    <h2>Widget Tree</h2>
                    <CiCircleAlert />
                  </Button>
                  <Button
                    isIconOnly
                    color="default"
                    variant="faded"
                    aria-label="Take a photo"
                  >
                    <IoMdUnlock size={20} />
                  </Button>
                  <Button
                    isIconOnly
                    color="default"
                    variant="faded"
                    aria-label="Take a photo"
                  >
                    <HiOutlineMenuAlt4 size={20} />
                  </Button>
                  <Button
                    isIconOnly
                    color="default"
                    variant="faded"
                    aria-label="Take a photo"
                  >
                    <MdExpand size={20} />
                  </Button>
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Search"
                    labelPlacement="outside"
                    className="w-[283px]"
                    startContent={<CiSearch />}
                  />
                </div>
              </div>
            );
          case "page selector":
            return (
              <div className="flex flex-col">
                <div className="flex gap-3 justify-between p-4">
                  <div className="flex gap-3">
                    <Button
                      isIconOnly
                      color="default"
                      variant="faded"
                      aria-label="Take a photo"
                    >
                      <FaRegNewspaper size={20} />
                    </Button>
                    <Button
                      isIconOnly
                      color="default"
                      variant="faded"
                      aria-label="Take a photo"
                    >
                      <IoDiamondOutline size={20} />
                    </Button>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      isIconOnly
                      color="default"
                      variant="faded"
                      aria-label="Take a photo"
                    >
                      <ImDelicious size={20} />
                    </Button>
                    <Button
                      isIconOnly
                      color="default"
                      variant="faded"
                      aria-label="Take a photo"
                    >
                      <FaFileMedical size={20} />
                    </Button>
                    <Button
                      isIconOnly
                      color="default"
                      variant="faded"
                      aria-label="Take a photo"
                    >
                      <PiFilesLight size={20} />
                    </Button>
                  </div>
                </div>
                <div className="p-2">
                  <Input
                    type="text"
                    placeholder="Search"
                    labelPlacement="outside"
                    className="w-[283px]"
                    startContent={<CiSearch />}
                  />
                </div>
                <div className="p-2">
                  <Button
                    // color=""
                    variant="faded"
                    className="w-full flex justify-between text-black"
                  >
                    <div className="flex gap-2">
                      <GiHamburgerMenu size={20} /> <h2>HomePage</h2>
                    </div>
                    <div className="flex gap-2">
                      <TiTick size={20} /> <CiMenuKebab size={20} />
                    </div>
                  </Button>
                </div>
              </div>
            );
          case "firestore":
            return (
              <div className="flex flex-col gap-4 p-2">
                <div className="flex justify-between bg-slate-300 p-2 rounded-md">
                  <div className="flex gap-2">
                    <TbFolderCog size={30} />
                    <IoSettingsOutline size={30} />
                  </div>
                  <div className="flex gap-2">
                    <Button className="">FireBase</Button>
                    <Button>+</Button>
                  </div>
                </div>
                <div>
                  <Button className="w-full flex justify-start">
                    ...TABLE NAME
                  </Button>
                </div>
              </div>
            );
          default:
            return (
              <div className="flex justify-center items-center h-full w-full">
                ...on Process {state}
              </div>
            );
        }
      })()}
    </div>
  );
}
