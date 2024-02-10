"use client";
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const TopicSlider = ({ topicData }: { topicData: string }) => {
  const data: {
    subTopic: string;
    topics: Array<{
      topic: string;
      data: string;
    }>;
  } = JSON.parse(topicData);
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState("NAN");
  return (
    <div className=" transition-all duration-500">
      <div
        onClick={() => setExpand(!expand)}
        className={`${expand ? "text-ascent" : "text-[#9f9f9f]"}
         font-medium  transition-all duration-500  flex justify-between
         items-center py-2 cursor-pointer`}
      >
        <h3>{data.subTopic}</h3>
        <BiChevronRight size={20} />
      </div>
      <div className={`${expand ? "block" : "hidden"}`}>
        {data.topics.map((item_c, ic) => (
          <div
            className="pl-4 py-2 hover:text-white/80 text-sm text-white/50 border-l border-white/10 ml-2 cursor-pointer"
            key={ic}
          >
            {item_c.topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicSlider;
