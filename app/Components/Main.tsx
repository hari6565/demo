"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";
import SelectSideBar from "./SelectSideBar";
import Topbar from "./Topbar";
import { GiHamburgerMenu } from "react-icons/gi";

const Main = () => {
  const [state, setState] = useState("");
  const [toggle, setToggle] = useState(false);
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
          <SideBar state={state} setState={setState} setToggle={setToggle} />
        </div>
        <div>{state && <SelectSideBar state={state} />}</div>
        <div className="flex justify-center items-center h-[50vh] w-full">
          <div>WorkSpace</div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-black text-white">
        <div>@footer</div>
      </div>
    </div>
  );
};

export default Main;
