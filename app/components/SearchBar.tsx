import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

export const SearchBar = (props: Props) => {
  return (
    <div className="flex items-center bg-grey-100 p-2 rounded-full max-md:hidden">
      <button>
        <BiSearch size={20} className="opacity-50"></BiSearch>
      </button>
      <input
        className="outline-none bg-transparent ml-2 caret-purple-500 placeholder:font-light placeholder:text-gray-600 text-[15px]"
        type="text"
        name="Search"
        id=""
        placeholder="Search"
        autoComplete="false"
      />
    </div>
  );
};
