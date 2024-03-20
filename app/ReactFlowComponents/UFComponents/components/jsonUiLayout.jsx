import React from "react";
import NavigationBar from "./Navdata/navbar";
import TableItems from "./Tabledata/tableItem";
import { getWidth } from "./utils";
import FormComponent from "./Form/FormComponent";
import SideNavbar from "./SIdebar/SideNavbar";
import CustomBreadcrumbs from "./Breadcrumbs/breadCrumbs";

const JsonUiLayout = ({ json, width, height, stateTrack }) => {
  const CalculatePercent = (x, y) => {
    return (x / y) * 100 + "%";
  };

  const RenderComp = ({ componentData, id }) => {
    const {
      Component: ComponentName,
      props = [],
      styles = [],
      events = [],
      functions = [],
      items = [],
      currentPage,
      setCurrentPage,
    } = componentData;
    switch (componentData.type) {
      case "NavBar":
        return (
          <NavigationBar
            id={id}
            height={componentData.height}
            stateTrack={stateTrack}
          />
        );
      case "Table":
        return (
          <TableItems height={componentData.height} stateTrack={stateTrack} />
        );
      case "Form":
        return (
          <FormComponent
            height={componentData.height}
            width={componentData.width}
            stateTrack={stateTrack}
          />
        );
      case "Sidebarnav":
        return (
          <SideNavbar
            height={componentData.height}
            width={componentData.width}
            stateTrack={stateTrack}
          />
        );
      case "CustomBreadcrumbs":
        return (
          <CustomBreadcrumbs
            items={items}
            height={componentData.height}
            stateTrack={stateTrack}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            props={props}
            styles={styles}
            events={events}
            functions={functions}
          />
        );
      default:
        return <p>D E F A U L T</p>;
    }
  };

  return (
    <div className="h-screen relative" style={{ width: width }}>
      {json.map((item, index) => {
        return (
          <div
            style={{
              position: "absolute",
              left: CalculatePercent(item.position.x, width),
              top: item.position.y,
              width: CalculatePercent(item.width, width),
              height: item.height,
            }}
          >
            {console.log(item.position.y, "top", item.type)}
            {console.log(
              CalculatePercent(item.position.x, width),
              "left%",
              item.type
            )}
            <RenderComp componentData={item} id={item.id} />
          </div>
        );
      })}
    </div>
  );
};

export default JsonUiLayout;
