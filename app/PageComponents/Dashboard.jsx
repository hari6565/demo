import React, { useCallback, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { IoCloseSharp } from "react-icons/io5";
import {
  useNodesState,
  ReactFlow,
  ReactFlowProvider,
  Controls,
  Background,
  MiniMap,
  useEdgesState,
  addEdge,
  updateEdge,
  MarkerType,
} from "reactflow";
import { ContextMenu } from "../ReactFlowComponents/UFComponents/context/ContextMenu";

import {
  NavBar,
  Table,
  Form,
  Sidebarnav,
  TextUpdaterNode,
} from "../ReactFlowComponents/UFComponents/CustomNode/CustomNode";
// import MenuDetailsComponent from "./layout/ProcessFolwMenuDetails";
import { useRef } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "reactflow/dist/style.css";
// import { Builder } from "./Customui/Builder";
// import { getWidth } from "./components/utils";
import { VscPreview } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditComponents,
  setNode,
  setStateTrack,
} from "../StateManage/UINodeSlice";
import { setPreView, setPropsOpen } from "../StateManage/NextUISlice";

export const Dashboard = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [newEdge, setNewEdge] = useState(null);

  const edgeUpdateSuccessful = useRef(true);

  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [showbuilder, setShowBuilder] = useState(false);
  const [menu, setMenu] = useState(false);
  const reactFlowWrapper = useRef(null);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    console.log(event, "drag");
  }, []);

  const navigate = useRouter();

  const NODE_TYPE = {
    NavBar: NavBar,
    Table: Table,
    Form: Form,
    Sidebarnav: Sidebarnav,
    newNode: TextUpdaterNode,
  };

  const onConnect = useCallback((params) => {
    if (nodes.length) {
      setNewEdge(params);
      setEdges((eds) => {
        if (eds.source !== params.target && eds.target !== params.source) {
          return addEdge(
            {
              ...params,

              type: nodes,
              markerEnd: {
                type: MarkerType.ArrowClosed,
              },
            },
            eds
          );
        } else {
          return addEdge(eds);
        }
      });
    }
  }, [setEdges, nodes][(setEdges, nodes)]);

  const onEdgeUpdate = useCallback(
    (oldEdge, newConnection) =>
      setEdges((els) => updateEdge(oldEdge, newConnection, els)),
    []
  );

  const connectionLineStyle = {
    strokeWidth: 3,
    stroke: "red",
  };

  const onNodeDragStop = (event, node) => console.log("drag stop", node);
  const onElementClick = (event, element) => console.log("click", element);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      const name = event.dataTransfer.getData("application/name");
      const roles = event.dataTransfer.getData("application/roles");
      const rolesColor = event.dataTransfer.getData("application/roleColor");

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      // let id = nodes.length ? Number(nodes[nodes.length - 1].id) + 1 : 0;
      const nodeDetails = type;

      const newNode = {
        id: uuidv4(),
        type: nodeDetails,
        position,
        parentId: [],
        data: {
          label: "",
          nodeColor: rolesColor,
          role: roles,
          height: "",
          width: "",
        },
        property: {
          name: "",
          description: "",
          nodeType: nodeDetails,
        },
      };

      setNodes((nds) => nds.concat(newNode));
      // disPatch(setNode(newNode));
    },
    [reactFlowInstance, nodes]
  );

  const onNodeContextMenu = useCallback(
    (event, node) => {
      event.preventDefault();
      const pane = reactFlowWrapper.current.getBoundingClientRect();

      setMenu({
        id: node.id,
        top: event.clientY < pane.height - 200 && event.clientY - 80,
        left: event.clientX < pane.width - 200 && event.clientX - 80,
        right:
          event.clientX >= pane.width - 200 && pane.width - event.clientX + 80,
        bottom:
          event.clientY >= pane.height - 200 &&
          pane.height - event.clientY + 80,
      });
    },
    [setMenu]
  );
  const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

  const settoggle = () => {
    disPatch(setStateTrack());
    window.localStorage.setItem("nodes", JSON.stringify(nodes));
    window.localStorage.setItem("edges", JSON.stringify(edges));

    disPatch(
      setNode({
        nodes: nodes,
        width: window.innerWidth,
        height: window.innerHeight,
      })
    );

    navigate.push("/Builder");
  };

  const [locked, setlocked] = useState(false);

  const onLock = () => {
    setlocked(true);
  };

  const onNodeDrag = (e, node) => {
    if (node.position.x < 0) {
      node.position.x = 0;
    }
    if (node.position.y < 0) {
      node.position.y = 0;
    }
    let rightpos = node.position.x + node.width;
    if (rightpos >= window.innerWidth) {
      node.position.x = window.innerWidth - node.width;
    }

    const updatedElements = nodes.map((element) => {
      if (element.id === node.id) {
        return { ...element, position: node.position };
      }
      return element;
    });
    setNodes(updatedElements);
    // disPatch(setNode(updatedElements));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("nodes") || "[]");
    const items2 = JSON.parse(localStorage.getItem("edges") || "[]");
    if (items && items2) {
      setNodes(items);
      setEdges(items2);
    }
  }, [window.localStorage]);

  const deleteNode = useCallback(
    (id) => {
      setNodes((nodes) =>
        nodes.filter((node) => {
          if (node.id !== id) {
            if (node.parentId.includes(id)) {
              return {
                ...node,
                parentId: node.parentId.filter((parentId) => parentId !== id),
              };
            }
            return node;
          }
        })
      );
      setEdges((edges) =>
        edges.filter((edge) => {
          if (edge.source !== id && edge.target !== id) {
            return edge;
          }
        })
      );

      localStorage.setItem(
        "nodes",
        JSON.stringify(nodes.filter((node) => node.id !== id))
      );

      localStorage.setItem(
        "edges",
        JSON.stringify(edges.filter((edge) => edge.id !== id))
      );
      setMenu(null);
    },
    [nodes, localStorage]
  );
  console.log(nodes, "aaa");

  const isPreView = useSelector((state) => state.counter.isPreView);
  const isPropsOpen = useSelector((state) => state.UFNodes.isPropsOpen);
  const disPatch = useDispatch();

  function editNode(id, node) {
    disPatch(
      setEditComponents(
        nodes.filter((node) => {
          if (node.id == id) {
            return node.type;
          }
        })
      )
    );
    if (!isPropsOpen) disPatch(setPropsOpen());
    // console.log(node);
    setMenu(null);
  }
  return (
    <div
      className={` ${
        !isPreView
          ? "flex flex-col absolute left-0 top-0 right-0 bottom-0 w-screen h-screen z-40"
          : " w-full h-full"
      } `}
    >
      {/* <MenuDetailsComponent /> */}
      {!isPreView && (
        <div className=" absolute right-10 top-1 z-40 bg-transparent w-7 h-7 rounded-full">
          <Button
            onClick={() => disPatch(setPreView())}
            size="sm"
            className="rounded-full bg-red-300"
          >
            <IoCloseSharp />
          </Button>
        </div>
      )}
      <ReactFlowProvider>
        <div className="reactflow-wrapper h-full w-full" ref={reactFlowWrapper}>
          <ReactFlow
            className="h-full w-full"
            style={{
              overflowY: "auto",
              overflowX: "hidden",
            }}
            onNodeDragStop={onNodeDragStop}
            onConnect={onConnect}
            onlyRenderVisibleElements={false}
            panOnDrag={false}
            panOnScroll={true}
            zoomOnScroll={false}
            preventScrolling={false}
            zoomOnPinch={false}
            ref={reactFlowWrapper}
            nodes={nodes}
            edges={edges}
            autoPanOnNodeDrag={false}
            deleteNode={deleteNode}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={NODE_TYPE}
            deleteKeyCode={["Backspace", "Delete"]}
            selectKeyCode={["ctrl"]}
            menu={menu}
            onNodeContextMenu={onNodeContextMenu}
            onPaneClick={onPaneClick}
            snapGrid={[15, 15]}
            snapToGrid={true}
            nodesDraggable={true}
            onNodeDrag={onNodeDrag}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onEdgeUpdate={onEdgeUpdate}
            connectionLineStyle={connectionLineStyle}
          >
            <div className="flex flex-row ">
              <div
                className=" absolute right-[70px] top-1 mt-1 p-1 bg-gray-400  hover:bg-gray-600
                  border-2 border-gray-400 text-white rounded w-15 text-center cursor-pointer z-50"
                onClick={settoggle}
              >
                <VscPreview color="white" />
              </div>
            </div>
            <Controls />

            {menu && (
              <ContextMenu
                node={nodes}
                onClick={onPaneClick}
                deleteNode={deleteNode}
                editNode={editNode}
                {...menu}
                setMenu={setMenu}
                // updatedNodeConfig={updatedNodeConfig}
              />
            )}
            <Background variant="dots" color="black" gap={25} size={2} />
            {/* <MiniMap /> */}
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};
