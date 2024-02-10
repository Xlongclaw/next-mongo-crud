import React from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div
      className="w-[25rem] h-[3.6rem] border border-white/10 rounded-full font-medium flex justify-between my-2 
items-center px-6 text-sm text-white/60 gap-3"
    >
      <div className="flex gap-3">
        <BiSearch size={22} />
        <input
          className="bg-transparent w-3/4"
          type="text"
          placeholder="Building Your Application"
        />
      </div>
      <BiChevronDown size={20} />
    </div>
  );
};

export default SearchBar;
