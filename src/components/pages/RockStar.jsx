import React from "react";
import Heading from "../../Heading";
import InputBox2 from "../InputBox2";

const RockStar = () => {
  return (
    <div>
      <Heading text="Rockstar Award" className="bg-[#ECCE71]" />
      <InputBox2
        imgClass="bg-[url(/19.jpeg)] w-[1080px] h-[1080px]"
        className="absolute top-1/2 right-[5%] translate-x-[-23%] translate-y-[-57%] block w-92 rounded-[50%]"
        textClass="top-[65%] right-0 translate-x-[20%] translate-y-[1%] text-[#121212] text-6xl"
      />
    </div>
  );
};

export default RockStar;
