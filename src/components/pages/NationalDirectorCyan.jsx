import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const NationalDirectorCyan = () => {
  return (
    <div>
      <Heading text="National Director" className="bg-[#5FECFF]" />
      <InputBox3
        imgClass="bg-[url(/32.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-52.5%] translate-y-[-55%] block w-76.5 rounded-[50%]"
      />
    </div>
  );
};

export default NationalDirectorCyan;