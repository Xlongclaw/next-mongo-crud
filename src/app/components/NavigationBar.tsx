import React from "react";
import Logo from "./Logo";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import SearchBar from "./SearchBar";

const NavigationBar = () => {
  return (
    <div className="flex justify-between w-full">
      <Logo />
      <SearchBar />
    </div>
  );
};

export default NavigationBar;
