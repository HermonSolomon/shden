"use client";
import { useState } from "react";
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import Image from "next/image";
import NextImage from "@/public/next.svg";
import { CiShoppingCart } from "react-icons/ci";
import { BsChevronCompactUp } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

export const Navbar = (props: Props) => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  const { data: session } = useSession();
  // console.log(session?.user);

  const SignOut = () => {
    if (session && session.user) {
      return (
        <ul className="py-5 px-1 text-neutral-600">
          <li className="hover:bg-grey-300 hover:text-neutral-900 px-5 py-2 cursor-pointer">
            {session.user.name}
          </li>
          <li
            onClick={() => signOut()}
            className="whitespace-nowrap hover:text-red-500 px-5 py-2 cursor-pointer  "
          >
            Sign out
          </li>
          <li className="whitespace-nowrap hover:text-neutral-900 px-5 py-2 cursor-pointer">
            <a href="/addproduct">Add Product</a>
          </li>
        </ul>
      );
    }
    return (
      <ul>
        <li
          onClick={() => signIn()}
          className="whitespace-nowrap text-neutral-900 hover:bg-grey-100  px-5 py-2 cursor-pointer"
        >
          Sign in
        </li>
      </ul>
    );
  };
  return (
    <div>
      <div className="flex item-center justify-between py-4 relative">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="font-semibold text-2xl">
            <Link href="/">SHDEN</Link>
          </div>
          <nav className="max-md:hidden">
            <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
              <li>
                <Link href="/" className="py-3 inline-block w-full">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="filters" className="py-3 inline-block w-full">
                  Filters
                </Link>
              </li>
              {session?.user && (
                <li>
                  <Link href="myproducts" className="py-3 inline-block w-full">
                    My Products
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="relative cursor-pointer"
          >
            <Image
              src={NextImage}
              width={35}
              height={35}
              className="rounder-full object-cover"
              alt="user image"
            />
            <div
              className={`absolute bg-white z-[2] rounder-lg shadow-lg ${
                showProfile ? "" : "hidden"
              }`}
            >
              <SignOut />
            </div>
          </div>
          <Link href="/cart">
            <div className="p-2 bg-gray-100 rounded-full">
              <CiShoppingCart size={20} />
            </div>
          </Link>
          <span
            onClick={() => setShowNav(!showNav)}
            className="p-[9px] bg-grey-100 rounded-full md:hidden"
          >
            <BsChevronCompactUp
              className={`transition ease-in duration-150 ${
                showNav ? "rotate-180" : ""
              }`}
            />
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[15px] opacity-75 px-2">
          <li>
            <Link href="/shop" className="py-3 inline-block w-full">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/filters" className="py-3 inline-block w-full">
              Filters
            </Link>
          </li>
          <li>
            <Link href="/myproducts" className="py-3 inline-block w-full">
              My Products
            </Link>
          </li>
        </ul>
        <div className="flex items-center bg-grey-100 rounded-lg my-4 py-3">
          <input
            className="w-full outline-none bg-transparent ml-2 caret-purple-500 placeholder:font-light placeholder:text-gray-600 text-[15px]"
            type="text"
            name="Search"
            id=""
            placeholder="Search"
            autoComplete="false"
          />
          <button>
            <BiSearch size={20} className="opacity-50"></BiSearch>
          </button>
        </div>
      </div>
    </div>
  );
};
