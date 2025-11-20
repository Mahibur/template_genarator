import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const AmbassadorPurple = () => {
  return (
    <div>
      <Heading text="Ambassador" className="bg-[#F573DF]" />
      <InputBox3
        imgClass="bg-[url(/30.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-51%] translate-y-[-43.5%] block w-81.5 rounded-[50%]"
      />
    </div>
  );
};

export default AmbassadorPurple;