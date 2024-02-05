import Link from "next/link";
import React from "react";

function F4() {
  return (
    <>
      <div>F4</div>
      <Link href="/f1/f3">F3</Link>
      <br />
      <Link href="/about">About</Link>
    </>
  );
}

export default F4;
