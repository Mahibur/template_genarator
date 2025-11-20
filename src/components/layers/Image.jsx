import React from "react"
const Image =({src})=>{
    return(
        <>
        <picture>
            <img className="block object-cover" src={src} alt={src} />
        </picture>
        </>
    )
}
export default Image