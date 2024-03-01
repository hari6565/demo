"use client";
import React from "react";
import { Accordion, AccordionItem, Input } from "@nextui-org/react";
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
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="w-[300px] h-[89vh] bg-slate-200 rounded-lg">
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
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title={state}
                    className=" text-sm"
                  >
                    <div className=" text-black bg-slate-300 p-4 rounded-lg">
                      {state}
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          case "page selector":
            return (
              <div className="flex flex-col">
                <div className="flex gap-3 justify-between p-4">
                  <div className="flex gap-3">
                    <FaRegNewspaper size={20} />
                    <IoDiamondOutline size={20} />
                  </div>
                  <div className="flex gap-3">
                    <ImDelicious size={20} />
                    <FaFileMedical size={20} />
                    <PiFilesLight size={20} />
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
                <div>homecard</div>
              </div>
            );
          default:
            return <div>fasdfasdfsadfa</div>;
        }
      })()}
    </div>
  );
}
