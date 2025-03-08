import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const Ambassador = () => {
  return (
    <div>
      <Heading text="Ambassador" className="bg-[#FD6400]" />
      <InputBox
        imgClass="bg-[url(/8.jpg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-53%] translate-y-[-24%] block w-70.5 rounded-[50%]"
      />
    </div>
  );
};

export default Ambassador;
