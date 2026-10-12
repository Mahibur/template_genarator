import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const WelcomeToTeam = () => {
  return (
    <div>
        <Heading text="Welcome To Team" className="bg-[#8AFF21]"/>
        <InputBox4 imgClass="bg-[url(/welcome.jpg)]" className="absolute top-1/2 left-1/2 translate-x-[-51.5%] translate-y-[-28%] block w-106 rounded-[50%]"
        textClass="translate-y-[64%]"/>
    </div>
  );
};

export default WelcomeToTeam;
