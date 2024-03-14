import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { CiViewTable } from "react-icons/ci";
import { Tooltip, VisuallyHidden } from "@nextui-org/react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";

const data = [
  {
    label: "User",
    nodeType: "customTable",
    icon: CiViewTable,
    description:
      " Lorem ipsum dolor sit amet, ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    label: "Post",
    nodeType: "customTable",
    icon: CiViewTable,
    description:
      " Lorem ipsum dolor sit amet, ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    label: "Role",
    nodeType: "customTable",
    icon: CiViewTable,
    description:
      " Lorem ipsum dolor sit amet, ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    label: "Department",
    nodeType: "customTable",
    icon: CiViewTable,
    description:
      " Lorem ipsum dolor sit amet, ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    label: "Course",
    nodeType: "customTable",
    icon: CiViewTable,
    description:
      " Lorem ipsum dolor sit amet, ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
export default function Sidebar() {
  const [mainDiv, contentDiv] = useState(false);
  const [open, setOpen] = useState(false);
  const [clickToEdit, setClickToEdit] = useState(null);
  const [search, setSearch] = useState("");
  // const [editingHeader, setEditingHeader] = useState(false);
  const onDragStart = (event, nodeType, nodeName = "") => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("application/name", nodeName);
    event.dataTransfer.effectAllowed = "move";
  };
  console.log("search", search);

  return (
    <div
      style={{
        top: 105,

        padding: "10px",
        position: "absolute",
        zIndex: 100,
      }}
    >
      <div style={{ width: "250px", height: "500px" }}>
        {/* <Tooltip
          showArrow
          closeDelay={0}
          content="Nodes"
          placement="right"
          className={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: [
              "py-2 px-4 shadow-xl",
              "text-black bg-gradient-to-br from-white to-neutral-400",
            ],
          }}
        > */}
        <div
          onClick={() => {
            if (!open) setOpen(true);
          }}
          style={{ transitionDuration: "0.4s" }}
          className={`bg-gray-800 ${
            open ? "cursor-default" : " border-2 border-gray-400 cursor-pointer"
          } relative w-[20%] h-[10%] rounded-lg
         ${
           open
             ? "bg-gray-800 w-full h-full border-2 rounded-lg border-gray-400 "
             : ""
         }`}
        >
          <FaPlus
            color={open ? "white" : "white"}
            style={{
              zIndex: 1000,
              top: 15,
              left: 15,
              transform: open ? "rotate(45deg)" : "none",
              transition: "0.5s",
              position: "absolute",
              cursor: "pointer",
            }}
            onClick={() => {
              if (open) setOpen(false);
            }}
          />

          <div
            style={{ transitionDuration: open ? "1.7s" : "0.1s" }}
            className={`flex flex-col items-center opacity-0 pt-[40px]  ${
              open ? "opacity-100 " : ""
            }`}
          >
            <Input
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
            />

            <ScrollShadow
              size={20}
              color="white"
              className="w-[220px] h-[380px] "
            >
              {data.length > 0 ? (
                data
                  .filter(
                    (item) =>
                      item.label.includes(search) ||
                      item.label.toLowerCase().includes(search)
                  )
                  .map((item, index) => {
                    return (
                      <Card
                        key={index}
                        onDragStart={(event) =>
                          onDragStart(event, item?.nodeType, item?.label)
                        }
                        draggable
                        isFooterBlurred
                        radius="lg"
                        className=" flex flex-col items-start cursor-grab active:cursor-grabbing  gap-2 bg-slate-800 border-2 border-gray-300/40  mb-3 "
                      >
                        <div className="mt-5 ml-2 flex flex-row justify-center items-center gap-2  ">
                          {React.createElement(item.icon, {
                            size: 30,
                            color: "#ccc",
                          })}
                          <div className="text-white w-[70%] cursor-pointer ">
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
                              <label
                                className="cursor-text"
                                onClick={() => setClickToEdit(index)}
                              >
                                {item.label || "click to add name"}
                              </label>
                            )}
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <CardFooter
                            className="mb-[12px]  text-gray-200/80 text-sm justify-between before:bg-white/10
                       border-gray-300/20 border-1 overflow-hidden py-1  
                       rounded-lg bottom-1 w-[90%]
                        shadow-small   "
                          >
                            <p>{item.description}</p>
                          </CardFooter>
                        </div>
                      </Card>
                    );
                  })
              ) : (
                <div className="text-white text-2xl">No items found</div>
              )}
            </ScrollShadow>
          </div>
        </div>

        {/* </Tooltip> */}
      </div>
    </div>
  );
}
