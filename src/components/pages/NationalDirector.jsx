import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const NationalDirector = () => {
  return (
    <div>
        <Heading text="National Director" className="bg-[#01C1B6]"/>
        <InputBox imgClass="bg-[url(/5.jpg)]" className="absolute top-1/2 left-1/2 translate-x-[-52%] translate-y-[-32%] block w-99 h-82 rounded-[50%]"/>
    </div>
  );
};

export default NationalDirector;
