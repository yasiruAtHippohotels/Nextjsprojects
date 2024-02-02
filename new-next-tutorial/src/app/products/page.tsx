import Link from "next/link";
import React, { Fragment } from "react";

function Products() {
  const productId = 100;

  return (
    <Fragment>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="products/3" replace>Product 3</Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </Fragment>
  );
}

export default Products;
