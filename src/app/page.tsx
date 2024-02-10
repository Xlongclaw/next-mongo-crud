import React from "react";
import NavigationBar from "./components/NavigationBar";
import Explorer from "./components/Explorer";

const page = () => {
  return (
    <div className="h-screen py-4 px-48 flex flex-col items-center bg-[#050505]">
      <NavigationBar />
      <div className=" border border-white/10 flex-1 w-full mt-3 rounded-[2rem] flex py-8">
        <Explorer />
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default page;
