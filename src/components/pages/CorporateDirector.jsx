import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const CorporateDirector = () => {
  return (
    <div>
      <Heading text="Corporate Director" className="bg-[#83FE3C]" />
      <InputBox4
        imgClass="bg-[url(/29.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-52%] translate-y-[-16%] block w-90.5 rounded-[50%]"
        textClass="translate-y-[64%]"
      />
    </div>
  );
};

export default CorporateDirector;