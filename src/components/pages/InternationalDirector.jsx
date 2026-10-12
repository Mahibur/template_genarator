import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const InternationalDirector = () => {
  return (
    <div>
      <Heading text="International Director" className="bg-[#FED848]" />
      <InputBox4
        imgClass="bg-[url(/34.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-51%] translate-y-[-9%] block w-87.5 rounded-[50%]"
        textClass="translate-y-[64%]"
      />
    </div>
  );
};

export default InternationalDirector;