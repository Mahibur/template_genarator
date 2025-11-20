import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const PremierDirector = () => {
  return (
    <div>
        <Heading text="Premier Director" className="bg-[#C200D3]"/>
        <InputBox imgClass="bg-[url(/7.jpg)]" className="absolute top-1/2 left-1/2 translate-x-[-52%] translate-y-[-32%] block w-98.5 h-83 rounded-[50%]"/>
    </div>
  );
};

export default PremierDirector;
