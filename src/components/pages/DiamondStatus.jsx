import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const DiamondStatus = () => {
  return (
    <div>
      <Heading text="Diamond Status" className="bg-[#12BCF9]" />
      <InputBox4
        imgClass="bg-[url(/23.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50.5%] translate-y-[-30%] block w-112 rounded-[50%]"
        textClass="translate-y-[62%]"
      />
    </div>
  );
};

export default DiamondStatus;