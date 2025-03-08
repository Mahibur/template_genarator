import React from "react";
import Heading from "../../Heading";
import InputBox from "../InputBox";

const PlatinumAmbassador = () => {
  return (
    <div>
      <h1 className="bg-[#8AFF21] text-3xl font-bold text-center py-6">
      Platinum Ambassador
        </h1>
        <Heading text="Platinum Ambassador" className="bg-[#8AFF21]"/>
        <InputBox imgClass="bg-[url(/10.jpg)]" className="absolute top-1/2 left-1/2 translate-x-[-53%] translate-y-[-24%] block w-70.5 rounded-[50%]"/>
    </div>
  );
};

export default PlatinumAmbassador;
