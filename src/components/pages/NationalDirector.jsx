import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const NationalDirector = () => {
  return (
    <div>
      <Heading text="National Director" className="bg-[#5FECFF]" />
      <InputBox4
        imgClass="bg-[url(/32.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-51%] translate-y-[-14%] block w-90 rounded-[50%]"
        textClass="translate-y-[54%]"
      />
    </div>
  );
};

export default NationalDirector;