import React from "react";
import Heading from "../../Heading";
import InputBox4 from "../InputBox4";

const Director = () => {
  return (
    <div>
      <Heading text="Director" className="bg-[#FED848]" />
      <InputBox4
        imgClass="bg-[url(/33.jpeg)]"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-24%] block w-92 rounded-[50%]"
        textClass="translate-y-[34%]"
      />
    </div>
  );
};

export default Director;