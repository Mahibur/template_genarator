import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const GlobalEnterpreneurTwoStar = () => {
  return (
    <div>
      <Heading text="Global Enterpreneur" className="bg-[#1E70FA] text-white" />
      <InputBox
        imgClass="bg-[url(/13.jpg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-38%] block w-92 rounded-[50%]"
      />
    </div>
  );
};

export default GlobalEnterpreneurTwoStar;
