"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setOpacity } from "../StateManage/NextUISlice";

export default function Properties() {
  const disPatch = useDispatch();
  const selNodes = useSelector((state: any) => state.counter.editComponents);
  const topBarData = useSelector((state: any) => state.counter.topBarData);
  console.log(topBarData);

  return (
    <div className=" border-[2px]">
      <div className="flex flex-col bg-gray-200  w-[310px] h-[88vh] overflow-x-auto p-2">
        <div>Node : {selNodes[0].type}</div>
        <div className="h-8">
          <Input
            rounded
            bordered
            label="Brand"
            placeholder="Primary"
            color="primary"
            value={topBarData.Brand}
          />
        </div>
        <div className=" flex flex-col gap-2">
          <div> Items</div>
          {topBarData.Items.map((ele: any, id: any) => (
            <div key={id}>
              <Input
                type="email"
                placeholder=""
                labelPlacement="outside"
                value={ele}
                // startContent={
                //   ele + "sdfgsdfgsdfg"
                //   // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
