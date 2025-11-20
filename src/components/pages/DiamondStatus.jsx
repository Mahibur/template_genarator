import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const DiamondStatus = () => {
  return (
    <div>
      <Heading text="Diamond Status" className="bg-[#12BCF9]" />
      <InputBox3
        imgClass="bg-[url(/23.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-38%] block w-75.5 rounded-[50%]"
      />
    </div>
  );
};

export default DiamondStatus;