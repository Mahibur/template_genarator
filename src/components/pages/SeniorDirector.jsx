import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const SeniorDirector = () => {
  return (
    <div>
      <Heading text="Senior Director" className="bg-[#2A9F4E] text-[#f1f1f1f1]" />
      <InputBox4
        imgClass="bg-[url(/welcome.jpg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-51%] translate-y-[-17%] block w-89 rounded-[50%]"
        textClass="translate-y-[50%]"
      />
    </div>
  );
};

export default SeniorDirector;