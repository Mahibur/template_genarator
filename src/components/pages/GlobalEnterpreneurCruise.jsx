import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const GlobalEnterpreneurCruise = () => {
  return (
    <div>
      <Heading text="Global Enterpreneur" className="bg-[#0082E5] text-white" />
      <InputBox
        imgClass="bg-[url(/15.jpg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-31%] block w-76 rounded-[50%]"
      />
    </div>
  );
};

export default GlobalEnterpreneurCruise;
