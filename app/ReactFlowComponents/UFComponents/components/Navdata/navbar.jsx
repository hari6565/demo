"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logbutton from "./button";

import { useDispatch, useSelector } from "react-redux";

const NavigationBar = ({ height }) => {
  const disPatch = useDispatch();
  const [navBarItem, setNavbarItem] = useState({ Brand: "", Items: [] });
  const topBarData = useSelector((state) => state.counter.topBarData);
  return (
    <React.Fragment>
      <div
        className="w-full flex justify-center items-center"
        style={{ height: "100%" }}
      >
        <Navbar
          style={{ height: "100%" }}
          className="flex justify-center items-center bg-indigo-500 rounded-md shadow-lg shadow-indigo-500/50"
        >
          <NavbarBrand className="text-white font-bold">
            <span>{topBarData.Brand}</span>
          </NavbarBrand>

          <NavbarContent className="flex justify-center items-center">
            {topBarData.Items.map((item, id) => (
              <NavbarItem className="list-none flex justify-center items-center">
                <Link
                  className="px-2 py-5 text-white font-semibold gap-3"
                  href="#"
                >
                  <div>{item}</div>
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          <div className="profile_tag">
            <div className="flex justify-center items-center">
              <Logbutton />
            </div>
          </div>
        </Navbar>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default NavigationBar;
