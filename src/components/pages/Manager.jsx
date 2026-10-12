import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const Manager = () => {
  return (
    <div>
      <Heading text="Manager" className="bg-[#C65B13]" />
      <InputBox4
        imgClass="bg-[url(/28.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-51%] translate-y-[-23%] block w-92.5 rounded-[50%]"
        textClass="translate-y-[34%]"
      />
    </div>
  );
};

export default Manager;