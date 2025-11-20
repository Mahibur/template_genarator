import React from "react"
import Heading from "../../Heading";
import InputBox from "../InputBox";

const ManagingDirector = () => {
  return (
    <div>
        <Heading text="Managing Director" className="bg-[#30CC89]"/>
        <InputBox imgClass="bg-[url(/1.jpg)]" className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-36%] block w-84 rounded-[50%]"/>
    </div>
  );
};

export default ManagingDirector;
