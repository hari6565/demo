"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { CiCirclePlus } from "react-icons/ci";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { TiCalculator } from "react-icons/ti";
import { AiTwotoneSwitcher } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillDatabase } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillDiff } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { Progress } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";

export default function App() {
  const defaultContent = <input type="text" placeholder="HomePage" />;
  const defaultContents = "opacity";

  return (
    <div className=" border-[2px]">
      <div className=" bg-gray-200  w-[350px] h-[88vh] overflow-x-auto ">
        <Input
          label=""
          variant="bordered"
          placeholder="PageParameters"
          className="text-white"
          endContent={
            <button className="focus:outline-none" type="button">
              <CiCirclePlus className="w-6 h-6 text-blue-500" />
            </button>
          }
        />
        <div>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Route Settings"
              subtitle=""
              title="Route Settings"
            >
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex items-center my-3">
          <TiCalculator className="mr-2" />
          <h1>Scaffold</h1>
          <AiTwotoneSwitcher className="ml-10 mx-10" />
          <RiDeleteBinLine className="ml-10 mx-5" />
        </div>
        <div>
          <Input
            type="Homepage"
            label="HomePage"
            className="text-white bg-gray-200 flex items-center w-13 my-3 ml-4 "
          />
        </div>

        <div className="flex items-center">
          <AiFillDatabase className="mr-5 mx-4" />
          <AiFillCaretRight className="mr-5 mx-4" />
          <AiFillDiff className="mr-5 mx-4" />
          <FaArrowUpRightFromSquare className="mr-5 mx-6" />
          <FaLocationArrow className="mr-5 mx-7" />
        </div>
        <div className="border-none rounded-none my-4">
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Visibility"
              subtitle=""
              title="Visibility"
            >
              {defaultContents}
              <Progress
                aria-label="Loading..."
                value={60}
                className="max-w-md"
              />
              <Input type="text" placeholder="1" />
            </AccordionItem>
          </Accordion>
        </div>
        <div className="border-none rounded-none my-4">
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Page(Scaffold)Properties"
              subtitle=""
              title="Page(Scaffold)Properties"
            >
              <h2>Background color</h2>
              <Input type="text" placeholder="Primarybackground" />
              <div className="flex justify-between">
                <h3 className="text-gray-500 text-sm my-3">Safearea</h3>
                <Switch
                  defaultSelected
                  aria-label="Automatic updates"
                  className="ml-2"
                />
              </div>

              <div className="flex justify-between">
                <h4 className=" text-gray-500 text-sm my-3">
                  High Keyboard on tap
                </h4>
                <Switch
                  className=" ml-2"
                  defaultSelected
                  aria-label="Automatic updates"
                />
              </div>

              <div className="flex justify-between">
                <h5 className=" text-gray-500 text-sm my-3">
                  Disable Android back button
                </h5>
                <Switch defaultSelected color="default"></Switch>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion className="text-gray-500">
            <AccordionItem
              key="1"
              aria-label="NavBar Item Properties"
              subtitle=""
              title="NavBar Item Properties"
            >
              <div className="flex justify-between ">
                <h6>Show on NavBar</h6>
                <Switch
                  className="ml-2 my-3"
                  defaultSelected
                  color="default"
                ></Switch>
              </div>
              <div className="flex justify-between">
                <p>Always show Navbar on page</p>
                <Switch
                  className="ml-2"
                  defaultSelected
                  color="default"
                ></Switch>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
