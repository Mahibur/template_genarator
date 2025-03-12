import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const GlobalEnterpreneurVip = () => {
  return (
    <div>
      <Heading text="New VIP Status" className="bg-[#FF7300]" />
      <InputBox
        imgClass="bg-[url(/12.jpg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-38%] block w-92 rounded-[50%]"
      />
    </div>
  );
};

export default GlobalEnterpreneurVip;
