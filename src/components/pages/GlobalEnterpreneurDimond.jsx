import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const GlobalEnterpreneurDimond = () => {
  return (
    <div>
      <Heading text="New Dimond Status" className="bg-[#21EC01]" />
      <InputBox
        imgClass="bg-[url(/11.jpg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-38%] block w-92 rounded-[50%]"
      />
    </div>
  );
};

export default GlobalEnterpreneurDimond;
