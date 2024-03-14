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
import { Tooltip } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { setState, setViewTable } from "../StateManage/NextUISlice";

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

export default function SideNav() {
  const disPatch = useDispatch();

  const [isOpen, onOpenChange] = useState(false);

  return (
    <div className="h-[89vh]">
      <Listbox
        onAction={(e) => {
          disPatch(setState(e as string));
        }}
        variant="faded"
        aria-label="Listbox menu with icons"
        className="flex flex-col justify-between gap-9 h-full bg-slate-100 pt-2"
      >
        {Icons.map((item: any) => (
          <ListboxItem
            textValue={item.tooltip}
            // className="bg-red-200"
            key={item.tooltip}
            // startContent={
            //   <Tooltip
            //     content={item.tooltip}
            //     key={item.id}
            //     placement="right-end"
            //   >
            //     {React.createElement(item.icon, {
            //       size: 20,
            //     })}
            //   </Tooltip>
            // }
          >
            <Tooltip content={item.tooltip} key={item.id} placement="right-end">
              <div>
                {React.createElement(item.icon, {
                  size: 20,
                })}
              </div>
            </Tooltip>
          </ListboxItem>
        ))}
      </Listbox>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="w-[100vh] h-[50%]">
          <>
            <ModalHeader className="flex justify-center bg-slate-500 text-white">
              Settings
            </ModalHeader>
            <ModalBody className="flex justify-center items-center bg-slate-200 text-md">
              ...settings
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
}
