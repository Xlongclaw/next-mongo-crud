import React from "react";
import Logo from "./Logo";
import { BiChevronDown, BiPowerOff, BiSearch } from "react-icons/bi";
import SearchBar from "./SearchBar";

const NavigationBar = () => {
  return (
    <div className="flex justify-between w-full items-center px-8">
      <Logo />
      <SearchBar />
      <div className="bg-white/10 p-3 rounded-md">
        <BiPowerOff />
      </div>
    </div>
  );
};

export default NavigationBar;
