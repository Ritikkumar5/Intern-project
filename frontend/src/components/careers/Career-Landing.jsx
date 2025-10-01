import React from "react";
import Career_Opportunities from "./Career_Opportunities";
import Community_and_Events from "./Community_and_Events";

function career_Landing() {
  return (
    <>
      <div className="flex ">
        <Community_and_Events />
        <Career_Opportunities />
      </div>
    </>
  );
}

export default career_Landing;
