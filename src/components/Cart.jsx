import React from "react"
import Image from "./layers/Image"
import { Link } from "react-router-dom"
const Cart =({text,img,href})=>{
    return(
        <div className="flex flex-col gap-y-3">
        <Link to={href} className="img max-w-[280px]">
            <Image src={img}/>
        </Link>
        <h1 className="text bg-blue-100 text-2xl font-semibold text-center py-3 mb-2">{text}</h1>
        </div>
    )
}
export default Cart