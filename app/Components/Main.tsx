"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";
import SelectSideBar from "./SelectSideBar";
import Topbar from "./Topbar";
import { GiHamburgerMenu } from "react-icons/gi";
import Properties from "./Properties";
import DataTable from "./DataTable";
import Properties1 from "./Properties1";
import { FaSearchPlus } from "react-icons/fa";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  Button,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

const Main = () => {
  const [state, setState] = useState("tree");
  const [toggle, setToggle] = useState(false);
  const [viewTable, setViewtable] = useState(false);
  const [props, setProps] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="h-full">
      <div className="">
        <Topbar />
      </div>
      <div className="flex bg-slate-400">
        <div className="flex flex-col">
          <div className="flex justify-center bg-slate-100 pt-1">
            <GiHamburgerMenu
              size={20}
              onClick={() => {
                setState("");
              }}
            />
          </div>
          <SideBar
            state={state}
            setState={setState}
            setToggle={setToggle}
            setViewtable={setViewtable}
          />
        </div>
        <div>
          {state === "storyboard" ? null : <SelectSideBar state={state} />}
        </div>
        <div className="flex justify-center items-center h-[50vh] w-full">
          <div>
            {viewTable ? (
              <DataTable />
            ) : state === "storyboard" ? null : (
              <h3>workspace</h3>
            )}
          </div>
        </div>
        <div>
          {viewTable ? null : state === "storyboard" ? (
            <Properties1 />
          ) : (
            <Properties />
          )}
        </div>
      </div>

      <div className="flex justify-center items-center bg-slate-300 text-black">
        <div>@footer</div>
      </div>
    </div>
  );
};

export default Main;
