import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const PremiereDirector = () => {
  return (
    <div>
      <Heading text="Premiere Director" className="bg-[#DF7B71]" />
      <InputBox4
            imgClass="bg-[url(/37.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-51%] translate-y-[-7%] block w-89 rounded-[50%]"
        textClass="translate-y-[84%]"
      />
    </div>
  );
};

export default PremiereDirector;