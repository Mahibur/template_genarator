import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const TwoStarQualified = () => {
  return (
    <div>
      <Heading text="2-Star Qualified" className="bg-[#DF7B71]" />
      <InputBox3
        imgClass="bg-[url(/37.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-42.5%] block w-79.75 rounded-[50%]"
      />
    </div>
  );
};

export default TwoStarQualified;