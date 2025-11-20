import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const PremierDirectorOrange = () => {
  return (
    <div>
      <Heading text="Premier Director" className="bg-[#E3360E]" />
      <InputBox3
        imgClass="bg-[url(/36.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-52.5%] translate-y-[-55%] block w-76.25 rounded-[50%]"
      />
    </div>
  );
};

export default PremierDirectorOrange;