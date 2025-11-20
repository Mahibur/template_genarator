import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const ManagingDirectorRed = () => {
  return (
    <div>
      <Heading text="Managing Director" className="bg-[#E30F49]" />
      <InputBox3
        imgClass="bg-[url(/24.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-52%] translate-y-[-55%] block w-76.5 rounded-[50%]"
      />
    </div>
  );
};

export default ManagingDirectorRed;