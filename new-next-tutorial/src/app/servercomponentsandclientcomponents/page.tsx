import MainClientComponent from "@/components/main-client-component";
import SecondaryServerComponent from "@/components/secondary-server-component";
import React from "react";

function MainServercomponent() {
  return (
    <div className=" bg-gray-400" style={{ width: "50px" }}>
      <p>MainServercomponent</p>
      <MainClientComponent>
        <SecondaryServerComponent />
      </MainClientComponent>
    </div>
  );
}

export default MainServercomponent;
