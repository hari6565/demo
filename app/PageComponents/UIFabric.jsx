import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa";
import { PiSidebarDuotone } from "react-icons/pi";
import { TbLayoutNavbar } from "react-icons/tb";
import { TbBoxModel } from "react-icons/tb";
import { CiViewTable } from "react-icons/ci";
import { ScrollShadow } from "@nextui-org/react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const data = [
  {
    label: "navbar",
    icons: TbLayoutNavbar,
    name: "navbar",
    type: "NavBar",
    description: "NavBar",
  },

  {
    icons: CiViewTable,
    label: "Table",
    name: "Table",
    type: "Table",
    description: "Table",
  },
  {
    icons: FaWpforms,
    label: "Form",
    name: "Form",
    type: "Form",
    description: "Form",
  },
  {
    icons: PiSidebarDuotone,
    label: "Sidebarnav",
    name: "Sidebarnav",
    type: "Sidebarnav",
    description: "Sidebarnav",
  },
  {
    icons: PiSidebarDuotone,
    label: "Sidebarnav",
    name: "TextUpdaterNode",
    type: "TextUpdaterNode",
    description: "Sidebarnav",
  },
];

const UIFabric = () => {
  const [search, setSearch] = useState("");
  const onDragStart = (
    event,
    nodeType,
    nodeName = "start",
    rolesColor,
    roles
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("application/name", nodeName);
    event.dataTransfer.setData("application/roleColor", rolesColor);
    event.dataTransfer.setData("application/roles", roles);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <ScrollShadow
      size={20}
      color="black"
      // className="w-[220px] h-[380px]"
    >
      {data
        .filter(
          (item) =>
            item.label.includes(search) ||
            item.label.toLowerCase().includes(search)
        )
        .map((item, index) => {
          return (
            <Card
              key={index}
              onDragStart={(event) => {
                onDragStart(event, item.type, item.name);
              }}
              draggable
              isFooterBlurred
              radius="lg"
              className=" flex flex-col items-start  gap-2 bg-white border-2 border-gray-600/40 "
            >
              <div className="flex flex-row justify-center items-center gap-2  ">
                {React.createElement(item.icons, {
                  size: 30,
                  color: "gray",
                })}
                <p>{item.label}</p>

                <div className="text-white w-[70%] ">
                  {clickToEdit === index ? (
                    <Input
                      style={{
                        outline: "none",
                        border: "none",
                        boxShadow: "none",
                      }}
                      className="text-white text-sm "
                      variant={"bordered"}
                      label={index ? " " : "Click to add name"}
                      defaultValue={item.label}
                      size="sm"
                      onChange={(e) => {
                        item.label = e.target.value;
                      }}
                      onKeyDown={(e) => {
                        console.log("event", e.key);
                        if (e.key === "Enter") {
                          e.preventDefault();
                          e.stopPropagation();

                          setClickToEdit(null);
                        }
                      }}
                    />
                  ) : (
                    <label onClick={() => setClickToEdit(index)}>
                      {item.label || "click to add name"}
                    </label>
                  )}
                </div>
              </div>
              <div className="flex justify-center items-center">
                <CardFooter
                  className=" text-gray-700/80 text-sm justify-between before:bg-white/10
border-gray-600/30 border-1 overflow-hidden  
rounded-lg bottom-1
shadow-small   "
                >
                  <p>{item.description}</p>
                </CardFooter>
              </div>
            </Card>
          );
        })}
    </ScrollShadow>
  );
};

export default UIFabric;
