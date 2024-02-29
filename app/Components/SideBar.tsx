"use client";

import React, { useState } from "react";
import { LuListTree } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa6";
import { TbLayersLinked } from "react-icons/tb";
import { FaTableList } from "react-icons/fa6";
import { GrDatabase } from "react-icons/gr";
import { TbFolderCog } from "react-icons/tb";
import { TbApiApp } from "react-icons/tb";
import { GrMultimedia } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaElementor } from "react-icons/lia";
import { Listbox, ListboxItem, cn } from "@nextui-org/react";

const Icons = [
  {
    id: 0,
    icon: LiaElementor,
    tooltip: "Elements",
    color: "white",
  },
  {
    id: 1,
    icon: LuListTree,
    tooltip: "tree",
  },
  {
    id: 2,
    icon: FaRegNewspaper,
    tooltip: "page selector",
  },
  {
    id: 3,
    icon: TbLayersLinked,
    tooltip: "storyboard",
  },
  {
    id: 4,
    icon: FaTableList,
    tooltip: "firestore",
  },
  {
    id: 5,
    icon: GrDatabase,
    tooltip: "datatypes",
  },
  {
    id: 6,
    icon: TbFolderCog,
    tooltip: "app values",
  },
  {
    id: 7,
    icon: TbApiApp,
    tooltip: "api calls",
  },
  {
    id: 8,
    icon: GrMultimedia,
    tooltip: "media",
  },
  {
    id: 9,
    icon: IoSettingsOutline,
    tooltip: "settings",
  },
];

export default function SideBar({ state, setState, setToggle }: any) {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <div className="h-[86vh]">
      <Listbox
        onAction={(e) => {
          setState(e);
          {
            state !== e ? null : setToggle((pre: any) => !pre);
          }
        }}
        variant="faded"
        aria-label="Listbox menu with icons"
        className="flex flex-col justify-between gap-9 h-full bg-slate-100"
      >
        {Icons.map((item: any) => (
          <ListboxItem
            // className="bg-red-200"
            key={item.tooltip}
            startContent={React.createElement(item.icon, {
              size: 20,
            })}
          />
        ))}
      </Listbox>
    </div>
  );
}
