"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";
import SelectSideBar from "./SelectSideBar";
import Topbar from "./Topbar";

const Main = () => {
  const [state, setState] = useState("");
  return (
    <div className="flex flex-col">
      <div>
        <Topbar />
      </div>
      <div className="flex ">
        <div className="flex gap-2 bg-slate-400">
          <SideBar setState={setState} />
          <SelectSideBar state={state} />
        </div>
        <div>asdfsdf</div>
      </div>
    </div>
  );
};

export default Main;
