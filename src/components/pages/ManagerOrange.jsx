import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const ManagerOrange = () => {
  return (
    <div>
      <Heading text="Manager Orange" className="bg-[#C65B13]" />
      <InputBox3
        imgClass="bg-[url(/28.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-39.25%] block w-75.5 rounded-[50%]"
      />
    </div>
  );
};

export default ManagerOrange;