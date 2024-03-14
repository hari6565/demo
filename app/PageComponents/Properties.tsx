"use client";
import React from "react";
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setOpacity, setTopBarData } from "../StateManage/NextUISlice";
import { FaChevronCircleUp } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
export default function Properties() {
  const disPatch = useDispatch();
  const selNodes = useSelector((state: any) => state.counter.editComponents);
  const topBarData = useSelector((state: any) => state.counter.topBarData);

  function handleChange(e: any) {
    disPatch(setTopBarData({ ...topBarData, [e.name]: e.value }));
  }

  const [arrLength, setArrLength] = useState(0);

  function changePosition(array, fromIndex, toIndex) {
    if (
      fromIndex < 0 ||
      fromIndex >= array.length ||
      toIndex < 0 ||
      toIndex >= array.length
    ) {
      console.error("Index out of bounds");
      return array;
    }

    // Create a copy of the array
    const newArray = array.slice();

    // Remove the element from the 'fromIndex' position
    const element = newArray.splice(fromIndex, 1)[0];

    // Insert the element at the 'toIndex' position
    newArray.splice(toIndex, 0, element);

    disPatch(setTopBarData({ ...topBarData, Items: newArray }));
  }
  function deletePosition(array, delIndex) {
    if (delIndex < 0 || delIndex >= array.length) {
      console.error("Index out of bounds");
      return array;
    }

    // Create a copy of the array
    const newArray = array.slice();

    newArray.splice(delIndex, 1);
    console.log(newArray);

    disPatch(setTopBarData({ ...topBarData, Items: newArray }));
  }
  function changeName(array, Index, ele) {
    if (Index < 0 || Index >= array.length) {
      console.error("Index out of bounds");
      return array;
    }
    const newArray = array.slice();

    newArray.splice(Index, 1, ele);
    console.log(newArray);

    disPatch(setTopBarData({ ...topBarData, Items: newArray }));
  }

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
            name="Brand"
            onChange={(e) => handleChange(e.target)}
            value={topBarData.Brand}
          />
        </div>
        <div className=" flex flex-col gap-2">
          <div>Items</div>
          {topBarData.Items.map((ele: any, id: any) => (
            <div key={id} className="flex">
              <Input
                type="email"
                placeholder=""
                labelPlacement="outside"
                className="w-[200px]"
                value={ele}
                onChange={() => {
                  changeName(topBarData.Items, id, ele);
                }}
                // startContent={
                //   ele + "sdfgsdfgsdfg"
                //   // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
              />
              <div className="flex justify-between items-center gap-2">
                <FaChevronCircleUp
                  size={20}
                  onClick={() => changePosition(topBarData.Items, id, id - 1)}
                />
                <FaChevronCircleDown
                  size={20}
                  onClick={() => changePosition(topBarData.Items, id, id + 1)}
                />
                <TiDeleteOutline
                  size={20}
                  onClick={() => deletePosition(topBarData.Items, id)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* <div>
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </div> */}
      </div>
    </div>
  );
}
