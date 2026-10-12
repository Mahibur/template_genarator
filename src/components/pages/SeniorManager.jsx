import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const SeniorManager = () => {
  return (
    <div>
      <Heading text="Senior Manager" className="bg-[#FF3CDE]" />
      <InputBox4
        imgClass="bg-[url(/21.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-51%] translate-y-[-19.5%] block w-91 rounded-[50%]"
        textClass="translate-y-[44%]"
      />
    </div>
  );
};

export default SeniorManager;
