import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <h1>Welcome home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </Fragment>
  );
}
