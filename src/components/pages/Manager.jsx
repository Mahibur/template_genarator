import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const Manager = () => {
  return (
    <div>
      <Heading text="Manager" className="bg-[#B94401]" />
      <InputBox
        imgClass="bg-[url(/3.jpg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-54%] translate-y-[-38%] block w-84 rounded-[50%]"
      />
    </div>
  );
};

export default Manager;
