"use client";
import { BsFillCartCheckFill } from "react-icons/bs";
import Link from "next/link";
import Count from "../Count/page";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { status, data: session } = useSession();

  return (
    <div className="w-full">
      <nav className="w-full h-[70px] md:h-[90px]  bg-blue-500 text-white flex items-center justify-between px-[30px] md:px-[60px]">
        <div className="title">
          <Link href="/">
            <h1 className="text-[22px] md:text-2xl font-semibold">Shopping Cart</h1>
          </Link>
        </div>
        <div className="cart cursor-pointer flex items-center gap-3">
          {(status === "unauthenticated") ? null : 
            <Link href={"/Cart"} className="flex items-center gap-2 ">
              <BsFillCartCheckFill className="text-2xl" />
              ( <Count />)
            </Link>
          }

          {status === "unauthenticated" ? (
            <Link href={"/login"} className="border-2 px-5 py-1 rounded-full">
              Login
            </Link>
          ) : null}

          {status === "authenticated" ? (
            <button
              onClick={() => signOut()}
              className="border-2 px-5 py-1 rounded-full"
            >
              Logout
            </button>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Header;
