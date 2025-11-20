import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const VipStatus = () => {
  return (
    <div>
      <Heading text="Vip Status" className="bg-[#BC9536]" />
      <InputBox3
        imgClass="bg-[url(/35.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-37.5%] block w-75.25 rounded-[50%]"
      />
    </div>
  );
};

export default VipStatus;