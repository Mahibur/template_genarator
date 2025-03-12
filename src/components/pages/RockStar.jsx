import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const RockStar = () => {
  return (
    <div>
      <Heading text="Rockstar Award" className="bg-[#ECCE71]" />
      <InputBox
        imgClass="bg-[url(/19.jpeg)] w-[1080px] h-[1080px]"
        className="absolute top-1/2 right-[5%] translate-x-[-1%] translate-y-[-57%] block w-93 rounded-[50%]"
        textClass="top-[68%] right-0 translate-x-[24%] translate-y-[5%] text-[#121212]"
      />
    </div>
  );
};

export default RockStar;
