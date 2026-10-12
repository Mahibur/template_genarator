import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const NewTitanium = () => {
  return (
    <div>
      <Heading text="New Titanium" className="bg-[#AE32A1] text-[#f1f1f1f1]" />
      <InputBox4
        imgClass="bg-[url(/38.jpg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-51.5%] translate-y-[-27%] block w-108 rounded-[50%]"
        textClass="translate-y-[74%]"
      />
    </div>
  );
};

export default NewTitanium;