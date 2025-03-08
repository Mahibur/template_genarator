import React from "react"

const Heading =({className, text})=>{
    return(
        <>
              <h1 className={`text-3xl font-bold text-center py-6 ${className}`}>
        {text}
      </h1>
        </>
    )
}
export default Heading