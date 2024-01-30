import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Image from "next/image";
import { Fragment } from "react";


export default function Home() {
  return (
   <Fragment>

    <Hero/>
    <Camp/>
    <Features/>
    <GetApp/>

   </Fragment>

  );
}
