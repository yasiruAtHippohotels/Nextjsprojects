"use client";
import React from "react";
import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
  };

  return (
    <>
      <h1>OrderProduct</h1>
      <button onClick={handleClick}>place order</button>
    </>
  );
}

export default OrderProduct;
