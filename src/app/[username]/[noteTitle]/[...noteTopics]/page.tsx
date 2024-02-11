import React from "react";

const page = ({ params }: { params: { noteTopics: string[] } }) => {
  if (params.noteTopics[1] == null)
    return <div>Only First Topic Exist SO SET OTHER TWO TOPIC INDEX TO 0</div>;
  if (params.noteTopics[2] == null)
    return <div>Two Topics Exist SO SET OTHER ONE TOPIC INDEX TO 0</div>;
  if (params.noteTopics[3] == null)
    return <div>Three Topics Exist SO DISPLAY SPECIFIED TOPIC</div>;
};

export default page;
