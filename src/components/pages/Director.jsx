import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const Director = () => {
  return (
    <div>
      <Heading text="Director" className="bg-[#E700C3] text-white" />
      <InputBox
        imgClass="bg-[url(/17.jpg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-36%] block w-84 rounded-[50%]"
      />
    </div>
  );
};

export default Director;
