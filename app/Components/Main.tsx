"use client";
import React from "react";
import SideBar from "./SideBar";
import SelectSideBar from "./SelectSideBar";
import Topbar from "./Topbar";
import Properties from "./Properties";
import DataTable from "./DataTable";
import StoryBoard from "./StoryBoard";
import { Avatar } from "@nextui-org/react";
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
import Workpage from "./Workpage";
import { BiSearchAlt } from "react-icons/bi";

import { useSelector } from "react-redux";

const Main = () => {
  const sideState = useSelector((state: any) => state.counter.sideState);
  const isExpand = useSelector((state: any) => state.counter.isExpand);
  const isViewTable = useSelector((state: any) => state.counter.isViewTable);
  const isPreView = useSelector((state: any) => state.counter.isPreView);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="h-[100vh] w-[100vw]">
      {isPreView && (
        <div className="">
          <Topbar sideState={sideState} />
        </div>
      )}
      <div className="flex bg-slate-400">
        {isPreView && (
          <div className="flex flex-col">
            <SideBar />
          </div>
        )}
        {isPreView && (
          <div>
            {sideState === "storyboard"
              ? null
              : isExpand && <SelectSideBar sideState={sideState} />}
          </div>
        )}
        <div className="flex h-[50vh] w-full">
          {isViewTable ? (
            <DataTable />
          ) : sideState === "storyboard" ? null : (
            <Workpage />
          )}
        </div>
        {isPreView && (
          <div>
            {isViewTable ? null : sideState === "storyboard" ? (
              <StoryBoard />
            ) : (
              isExpand && <Properties />
            )}
          </div>
        )}
      </div>
      <div className="flex justify-end z-40">
        <Button
          className=" fixed bottom-0 right-0 z-10"
          onPress={onOpen}
          isIconOnly
          color="secondary"
        >
          <BiSearchAlt className="w-7 h-7" />
        </Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  HI Great
                </ModalHeader>
                <ModalBody>
                  <p>
                    <h1 className="font-bold mr-48">Next ui</h1>
                  </p>
                  <div className="flex justify end gap-3">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                  </div>
                  <div>
                    <Accordion>
                      <AccordionItem
                        key="1"
                        aria-label="Project Sample"
                        title="Project Sample"
                      ></AccordionItem>
                      <AccordionItem
                        key="2"
                        aria-label="My project freezes after opening"
                        title="My project freezes after opening"
                      ></AccordionItem>
                      <AccordionItem
                        key="3"
                        aria-label="How do i upgrade a paid plan"
                        title="How do i upgrade a paid plan"
                      ></AccordionItem>
                    </Accordion>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        {/* </div>  */}
      </div>
      <div className="flex justify-center items-center bg-slate-300 text-black">
        <div>@2024Copyrights</div>
      </div>
    </div>
  );
};

export default Main;
