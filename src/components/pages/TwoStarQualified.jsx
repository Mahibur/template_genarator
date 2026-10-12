import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const TwoStarQualified = () => {
  return (
    <div>
      <Heading text="2-Star Qualified" className="bg-[#DF7B71]" />
      <InputBox4
            imgClass="bg-[url(/37.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-51%] translate-y-[-28%] block w-107 rounded-[50%]"
      />
    </div>
  );
};

export default TwoStarQualified;