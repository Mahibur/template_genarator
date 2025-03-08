import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const CorporateDirector = () => {
  return (
    <div>
      <Heading text="Corporate Director" className="bg-[#EEE406]" />
      <InputBox
        imgClass="bg-[url(/2.jpg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-36%] block w-84 rounded-[50%]"
      />
    </div>
  );
};

export default CorporateDirector;
