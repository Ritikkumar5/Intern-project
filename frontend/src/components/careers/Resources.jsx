import React from "react";
import Resources_Sidebar from "./Resources_Sidebar";
import Resources_Browse from "./Resources-browse";
function CareerResources() {
  return (
    <>
      <div className="flex ">
        <Resources_Sidebar />
        <Resources_Browse />
      </div>
    </>
  );
}
export default CareerResources;
