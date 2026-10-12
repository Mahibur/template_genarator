import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const PlatinumAmbassador = () => {
  return (
    <div>
        <Heading text="Platinum Ambassador" className="bg-[#8AFF21]"/>
        <InputBox4 imgClass="bg-[url(/10.jpg)]" className="absolute top-1/2 left-1/2 translate-x-[-51%] translate-y-[-7%] block w-89 rounded-[50%]"
        textClass="translate-y-[84%]"/>
    </div>
  );
};

export default PlatinumAmbassador;
