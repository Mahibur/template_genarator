import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const ManagingDirector = () => {
  return (
    <div>
      <Heading text="Managing Director" className="bg-[#E30F49]" />
      <InputBox4
        imgClass="bg-[url(/24.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-51%] translate-y-[-9.5%] block w-89.5 rounded-[50%]"
        textClass="translate-y-[74%]"
      />
    </div>
  );
};

export default ManagingDirector;