import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const InternationalDirector = () => {
  return (
    <div>
        <Heading text="International Director" className="bg-[#04F200]"/>
        <InputBox imgClass="bg-[url(/6.jpg)]" className="absolute top-1/2 left-1/2 translate-x-[-52%] translate-y-[-32%] block w-99 h-82 rounded-[50%]"/>
    </div>
  );
};

export default InternationalDirector;
