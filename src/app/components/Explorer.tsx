import React from "react";
import { BiChevronRight } from "react-icons/bi";
import dummyData from "../constants/dummyData";
import TopicSlider from "./TopicSlider";

const Explorer = () => {
  return (
    <div className="w-1/4 border-r border-white/10 pl-16 pr-12 py-4">
      <div className="">
        {dummyData[0].data.map((item_a, ia) => (
          <div key={ia} className="mb-4">
            <h2 className="text-lg font-medium pb-1">{item_a.topic}</h2>
            <div className="px-2">
              {item_a.subTopics.map((item_b, ib) => (
                <TopicSlider key={ib} topicData={JSON.stringify(item_b)} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explorer;
