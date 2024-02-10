import React from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div
      className="w-[17rem] h-[2.5rem] border-2 border-white/20 rounded-full font-medium flex 
items-center px-4 text-sm text-white/60 gap-3"
    >
      <BiSearch size={20} />
      <input
        className="bg-transparent w-3/4"
        type="text"
        placeholder="Search Notes"
      />
      <BiChevronDown size={20} />
    </div>
  );
};

export default SearchBar;
