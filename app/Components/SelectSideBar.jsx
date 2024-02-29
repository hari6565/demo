"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
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
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { MdOutlineRestorePage } from "react-icons/md";
import { MdOutlinePageview } from "react-icons/md";
import { SiCloudflarepages } from "react-icons/si";
import { MdOutlineContactPage } from "react-icons/md";
import { TbBrandPagekit } from "react-icons/tb";
import { SiPowerpages } from "react-icons/si";
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
      TfiLayoutLineSolid,
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
    <div className="w-[300px] h-[50%]">
      {state == "Elements" ? (
        <Accordion variant="bordered" className="bg-slate-100">
          {Elements.map((item, id) => (
            <AccordionItem
              key={id}
              aria-label="Accordion 1"
              title={item.title}
              className=" text-sm"
            >
              <div className="grid grid-cols-3 gap-4 text-black">
                {item.arr.map((Icon, id) => {
                  return (
                    <div key={id} className="">
                      {React.createElement(Icon, { size: 30 })}
                    </div>
                  );
                })}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <Accordion variant="bordered" className="bg-slate-100">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="sfcdsfg"
            className=" text-sm"
          >
            <div className=" text-black">ghjfghjfgh</div>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}
