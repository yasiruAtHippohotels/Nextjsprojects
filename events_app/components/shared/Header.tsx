import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="wrapper flex items-center justify-between">
      <Link href="/" className="w-36">
        <Image
          alt="Evently logo"
          src="/assets/images/logo.svg"
          width={128}
          height={38}
        />
      </Link>
      <div className="flex w-32 justify-end gap-3">
        <SignedOut>
          <Button asChild className="rounded-full" size="lg">
            <Link href="/signin">Login</Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
