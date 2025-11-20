import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const DirectorGold = () => {
  return (
    <div>
      <Heading text="Director Gold" className="bg-[#FED848]" />
      <InputBox3
        imgClass="bg-[url(/33.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-53%] translate-y-[-48.5%] block w-71.25 rounded-[50%]"
      />
    </div>
  );
};

export default DirectorGold;