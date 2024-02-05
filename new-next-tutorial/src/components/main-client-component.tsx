"use client";
import React from "react";

function MainClientComponent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className=" bg-red-500"
      style={{ width: "100px", backgroundColor: "red" }}
    >
      <p>MainClientComponent</p>
      {children}
    </div>
  );
}

export default MainClientComponent;
