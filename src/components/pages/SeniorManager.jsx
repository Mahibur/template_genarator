import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const SeniorManager = () => {
  return (
    <div>
      <Heading text="Senior Manager" className="bg-[#5DF30E]"/>
      <InputBox imgClass="bg-[url(/4.jpg)]" className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-36%] block w-84 rounded-[50%]"/>
    </div>
  );
};

export default SeniorManager;

