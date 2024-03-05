"use client";
import React from "react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button } from "@nextui-org/react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Input } from "@nextui-org/react";
import { FaSearchPlus } from "react-icons/fa";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

const Properties1 = () => {
  return (
    <div>
      <div className="flex font-bold gap-2">
        <h1 className="font-bold my-5  text-2xl">StoryBoard</h1>
        <HiOutlineExclamationCircle className="mx-2 my-2" />
        <div className="flex gap-4 items-center my-2">
          <Button size="sm">Beta</Button>
        </div>
        <div className="mb-2 mt-1 text-green-500">________________________</div>
        <h2 className="my-2 text-lg">Navigate/LogicActions</h2>
        <div className="my-2">-----</div>
        <h3 className="my-2 text-lg">Bottom Sheet Action</h3>
        <FaArrowAltCircleRight className="my-2" />
        <h4 className="my-2 text-lg">Hidden Widgets</h4>
        <HiOutlineExclamationCircle className=" my-2" />
        <div className="my-10">
          <Input type="" label="Add your label" placeholder="Type here" />
        </div>
      </div>
    </div>
  );
};

export default Properties1;
