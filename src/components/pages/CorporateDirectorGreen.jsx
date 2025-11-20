import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const CorporateDirectorGreen = () => {
  return (
    <div>
      <Heading text="Corporate Director" className="bg-[#0AC202]" />
      <InputBox
        imgClass="bg-[url(/16.jpg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-38%] block w-71 rounded-[50%]"
      />
    </div>
  );
};

export default CorporateDirectorGreen;
