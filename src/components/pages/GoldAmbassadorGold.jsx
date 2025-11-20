import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const GoldAmbassadorGold = () => {
  return (
    <div>
      <Heading text="Gold Ambassador" className="bg-[#DBBE58]" />
      <InputBox3
        imgClass="bg-[url(/26.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50.5%] translate-y-[-43%] block w-81 rounded-[50%]"
      />
    </div>
  );
};

export default GoldAmbassadorGold;