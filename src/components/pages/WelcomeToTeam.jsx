import React from "react";
import Heading from "../../Heading";
import InputBox3 from "../InputBox3";

const WelcomeToTeam = () => {
  return (
    <div>
      <Heading text="Welcome To Team" className="bg-[#2A9F4E] text-[#f1f1f1f1]" />
      <InputBox3
        imgClass="bg-[url(/welcome.jpg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50.5%] translate-y-[-43%] block w-81.5 rounded-[50%]"
      />
    </div>
  );
};

export default WelcomeToTeam;