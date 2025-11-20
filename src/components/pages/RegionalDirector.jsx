import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const RegionalDirector = () => {
  return (
    <div>
      <Heading text="Regional Director" className="bg-[#FF3CDE]" />
      <InputBox3
        imgClass="bg-[url(/20.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-52%] translate-y-[-55%] block w-76.5 rounded-[50%]"
      />
    </div>
  );
};

export default RegionalDirector;
