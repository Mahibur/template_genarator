import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const SeniorDirector = () => {
  return (
    <div>
        <Heading text="Senior Director" className="bg-[#54FD00]"/>
        <InputBox imgClass="bg-[url(/18.jpg)]" className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-36%] block w-84 rounded-[50%]"/>
    </div>
  );
};

export default SeniorDirector;
