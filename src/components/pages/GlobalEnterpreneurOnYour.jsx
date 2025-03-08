import React from "react";

import Heading from "../../Heading";
import InputBox from "../InputBox";

const GlobalEnterpreneurOnYour = () => {
  return (
    <div>
      <Heading text="Global Enterpreneur" className="bg-[#E763D4]" />
      <InputBox
        imgClass="bg-[url(/14.jpg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%] block w-78 rounded-[50%]"
      />
    </div>
  );
};

export default GlobalEnterpreneurOnYour;
