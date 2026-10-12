import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const NewAchivement = () => {
  return (
    <div>
      <Heading text="New Achivement" className="bg-[#C39233]" />
      <InputBox4
        imgClass="bg-[url(/27.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-51%] translate-y-[-30%] block w-110 rounded-[50%]"
        textClass="translate-y-[54%]"
      />
    </div>
  );
};

export default NewAchivement;