"use client";
import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import JsonUiLayout from "../ReactFlowComponents/UFComponents/components/jsonUiLayout";
// import { Button } from "primereact/button";
import { TiArrowBackOutline } from "react-icons/ti";
import { renderUiJson } from "../ReactFlowComponents/UFComponents/components/utils";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setStateTrack } from "../StateManage/UINodeSlice";
import { readReddis } from "../utilsFunctions/apiCallUnit";

const Builder = () => {
  const disPatch = useDispatch();

  function stateTrack() {
    disPatch(setStateTrack());
  }

  const Nodes = useSelector((state: any) => state.UFNodes.node);
  console.log(Nodes, "state");
  const navigate = useRouter();

  const [json, setJson] = useState([]);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  async function GetJson() {
    try {
      const res = await readReddis("testUI").then((res) => JSON.parse(res));
      console.log(res);

      if (res) {
        let newjs = res.text1.v1.nodes.map((item: any) => {
          const { id, type, position, width, height } = item;
          return { id, type, position, width, height };
        });
        console.log(newjs);

        setJson(newjs);

        setHeight(res.text1.v1.height);
        setWidth(res.text1.v1.width);
      }
    } catch (err) {
      console.log("error");
    }
  }

  useEffect(() => {
    GetJson();
  }, []);
  console.log(json, "bbb");

  const handleClick = () => {
    console.log("clicked");
    navigate.push("/");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="fixed top-4 left-4 py-3 px-3
       bg-gray-500 m-10 text-white rounded w-10 text-center hover:bg-gray-700 cursor-pointer z-50"
      >
        <TiArrowBackOutline />
      </button>
      <JsonUiLayout
        json={json}
        height={height}
        width={width}
        stateTrack={stateTrack}
      />
    </div>
  );
};

export default Builder;
