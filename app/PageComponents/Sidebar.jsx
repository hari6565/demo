import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { CiViewTable } from "react-icons/ci";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { TbBoxModel, TbLayoutNavbar } from "react-icons/tb";
import { FaWpforms } from "react-icons/fa";
import { PiSidebarDuotone } from "react-icons/pi";

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

export default function Sidebar() {
  const [mainDiv, contentDiv] = useState(false);
  const [open, setOpen] = useState(false);
  const [clickToEdit, setClickToEdit] = useState(null);
  const [search, setSearch] = useState("");
  // const [editingHeader, setEditingHeader] = useState(false);
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
  console.log("search", search);

  return (
    <div
      style={{
        top: 20,
        left: 20,
        position: "absolute",
        zIndex: 100,
        padding: "4px",
      }}
    >
      <div
        style={{
          width: open ? "250px" : "180px",
          height: open ? "70vh" : "40vh",
        }}
      >
        <div
          onClick={() => setOpen(!open)}
          style={{
            transitionDuration: "0.4s",
            height: open && "100%",
            width: open && "100%",
          }}
          className={`bg-gray text-black w-[20%] h-[10%] rounded-lg cursor-pointer 
          ${
            open
              ? "bg-white text-black w-full h-full border-2 border-gray-400"
              : " border-2 border-gray-400 flex items-center justify-center"
          }
           }`}
        >
          <FaPlus
            color={open ? "gray" : "gray"}
            className={open && "relative top-3 left-5"}
            style={{
              zIndex: 1000,
              transform: open ? "rotate(45deg)" : "none",
              transition: "0.5s",
            }}
          />
          <div
            style={{ transitionDuration: open ? "1.7s" : "0.1s" }}
            className={`flex flex-col items-center opacity-0 pt-[40px]  ${
              open ? "opacity-100 " : "hidden"
            }`}
          >
            {/* <Input
              style={{
                outline: "none",
                border: "none",
                boxShadow: "none",
              }}
              classNames={{
                base: " mb-3 w-[80%] h-10 bg-gray-800  ",
                mainWrapper: "h-full bg-gray-800 ",
                input: "text-small text-gray-200 ",

                inputWrapper:
                  "h-full font-normal focus:bg-gray-700 active:bg-gray-700 rounded-2xl text-gray-300 bg-gray-700 hover:bg-gray-600 ",
              }}
              className="text-gray-300    "
              placeholder="Type to search..."
              size="sm"
              startContent={<FiSearch size={16} color="#ccc" />}
              isClearable={false}
              type="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            /> */}

            <ScrollShadow
              size={20}
              color="black"
              className="w-[220px] h-[380px]"
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
                      className=" flex flex-col items-start  gap-2 bg-white border-2 border-gray-600/40  mb-3 "
                    >
                      <div className="mt-5 ml-2 flex flex-row justify-center items-center gap-2  ">
                        {React.createElement(item.icons, {
                          size: 30,
                          color: "gray",
                        })}
                        <p>{item.label}</p>

                        {/* <div className="text-white w-[70%] ">
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
                        </div> */}
                      </div>
                      <div className="flex justify-center items-center">
                        <CardFooter
                          className="mb-[12px]  text-gray-700/80 text-sm justify-between before:bg-white/10
                     border-gray-600/30 border-1 overflow-hidden py-1  
                     rounded-lg bottom-1 w-[90%]
                      shadow-small   "
                        >
                          <p>{item.description}</p>
                        </CardFooter>
                      </div>
                    </Card>
                  );
                })}
            </ScrollShadow>
          </div>
        </div>

        {/* </Tooltip> */}
      </div>
    </div>
  );
}
