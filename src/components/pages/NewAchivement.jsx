import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const NewAchivement = () => {
  return (
    <div>
      <Heading text="New Achivement" className="bg-[#C39233]" />
      <InputBox3
        imgClass="bg-[url(/27.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-42.5%] block w-79.5 rounded-[50%]"
      />
    </div>
  );
};

export default NewAchivement;