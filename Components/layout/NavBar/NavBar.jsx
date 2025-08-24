import {
  ChevronRight,
  Ellipsis,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const links = (
    <>
      <li>
        <Link href={"/home"}>Women</Link>
      </li>
      <li>
        <Link href={"/home"}>Men</Link>
      </li>
      <li>
        <Link href={"/home"}>Kids</Link>
      </li>
      <li>
        <Link href={"/home"}>Home Decor</Link>
      </li>
      <li>
        <Link href={"/home"}>Jewellery</Link>
      </li>
      <li>
        <Link href={"/home"}>Skin & Hair</Link>
      </li>
      <li>
        <Link href={"/home"}>Gifts & Crafts</Link>
      </li>
      <li>
        <Link href={"/home"}>Brands</Link>
      </li>
      <li>
        <Link href={"/home"}>Wedding</Link>
      </li>
      <li>
        <Link href={"/home"}>Monsoon 25</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="bg-[#362f2f] flex items-center justify-center h-7 py-4">
        <h2 className="flex font-normal text-sm text-white items-center">
          Get early access on launches and offers.{" "}
          <span className="underline flex items-center">
            Sign Up For Texts <ChevronRight />
          </span>
        </h2>
      </div>

      <div className="navbar h-8 bg-base-100 shadow-sm border-b-1 border-b-[#DDDBDC]">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar w-full flex items-center justify-between">
              <div className="flex text-2xl text-[#1E1E1E] font-bold uppercase">
                Oliyo
              </div>
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <span className="lg:hidden flex cursor-pointer">
                    {" "}
                    <Menu></Menu>
                  </span>
                </label>
              </div>
              <div className="hidden flex-none lg:block">
                <ul className="menu-horizontal flex gap-4 uppercase">
                  {links}
                </ul>
              </div>
              <div className="hidden lg:flex">
                <div className="flex items-center gap-4">
                  <p>
                    <Search />
                  </p>
                  <p>
                    <Link href={"../../../app/Auth/SignIn"}>
                      <User />
                    </Link>
                  </p>
                  <p>
                    <Heart />
                  </p>
                  <p>
                    <ShoppingCart />
                  </p>
                  <p>
                    <Ellipsis />
                  </p>
                </div>
              </div>
            </div>
            {/* Page content here */}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-60 p-4">
              {links}
              <div>
                <button className="btn btn-neutral w-full">Hire me</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
