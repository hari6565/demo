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

  useEffect(() => {
    if (Nodes) {
      let newjs = Nodes.nodes.map((item: any) => {
        const { id, type, position, width, height } = item;
        return { id, type, position, width, height };
      });
      setJson(newjs);

      setHeight(Nodes.height);
      setWidth(Nodes.width);
    }
  }, []);
  console.log(json, "bbb");

  // const settoggle = () => {
  //   stateTrack(true);
  //   localStorage.setItem("nodes", JSON.stringify(nodes));

  //   navigate("/builder", {
  //     state: {
  //       nodes: nodes,
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     },
  //   });
  // };

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
