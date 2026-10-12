import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const VipStatus = () => {
  return (
    <div>
      <Heading text="Vip Status" className="bg-[#BC9536]" />
      <InputBox4
        imgClass="bg-[url(/35.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-51.5%] translate-y-[-29.5%] block w-109 rounded-[50%]"
        textClass="translate-y-[64%]"
      />
    </div>
  );
};

export default VipStatus;