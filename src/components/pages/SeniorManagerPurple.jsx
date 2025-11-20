import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const SeniorManagerPurple = () => {
  return (
    <div>
      <Heading text="Senior Manager" className="bg-[#FF3CDE]" />
      <InputBox3
        imgClass="bg-[url(/21.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-39%] block w-75.5 rounded-[50%]"
      />
    </div>
  );
};

export default SeniorManagerPurple;
