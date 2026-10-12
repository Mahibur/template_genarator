import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const Ambassador = () => {
  return (
    <div>
      <Heading text="Ambassador" className="bg-[#F573DF]" />
      <InputBox4
        imgClass="bg-[url(/30.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-51%] translate-y-[-15.5%] block w-91 rounded-[50%]"
        textClass="translate-y-[64%]"
      />
    </div>
  );
};

export default Ambassador;