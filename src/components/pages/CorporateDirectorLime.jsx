import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const CorporateDirectorLime = () => {
  return (
    <div>
      <Heading text="Corporate Director" className="bg-[#83FE3C]" />
      <InputBox3
        imgClass="bg-[url(/29.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-52%] translate-y-[-55%] block w-76.5 rounded-[50%]"
      />
    </div>
  );
};

export default CorporateDirectorLime;