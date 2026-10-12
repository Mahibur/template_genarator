import React from "react"
import Container from "../layers/Container"
import Cart from "../Cart"
import photo_welcome from "/welcome.jpg"
import photo_8 from "/8.jpg"
import photo_10 from "/10.jpg"
import photo_19 from "/19.jpeg"
import photo_21 from "/21.jpeg"
import photo_23 from "/23.jpeg"
import photo_24 from "/24.jpeg"
import photo_26 from "/26.jpeg"
import photo_27 from "/27.jpeg"
import photo_28 from "/28.jpeg"
import photo_29 from "/29.jpeg"
import photo_30 from "/30.jpeg"
import photo_32 from "/32.jpeg"
import photo_33 from "/33.jpeg"
import photo_34 from "/34.jpeg"
import photo_35 from "/35.jpeg"
import photo_37 from "/37.jpeg"
import photo_38 from "/38.jpg"
const Home =()=>{
    return(
        <>
        <Container>
            <h1 className="py-3 text-center bg-blue-200 text-4xl font-semibold">Team Go Extreme</h1>
            <div className="main pt-4 flex flex-wrap gap-x-11 items-center justify-center">
                <Cart img={photo_welcome} text="Welcome To Team" href="/welcometoteam"/>
                <Cart img={photo_35} text="VIP Status" href="/vipstatus"/>
                <Cart img={photo_23} text="Diamond Status" href="/diamondstatus"/>
                <Cart img={photo_19} text="Two Star Qualified" href="/TwoStarQualified"/>
                <Cart img={photo_28} text="Manager" href="/manager"/>
                <Cart img={photo_21} text="Senior Manager" href="/seniormanager"/>
                <Cart img={photo_33} text="Director" href="/director"/>
                <Cart img={photo_8} text="Senior Director" href="/seniordirector"/>
                <Cart img={photo_24} text="Managing Director" href="/managingdirector"/>
                <Cart img={photo_29} text="Corporate Director" href="/corporatedirector"/>
                <Cart img={photo_32} text="National Director" href="/nationaldirector"/>
                <Cart img={photo_34} text="International Director" href="/internationaldirector"/>
                <Cart img={photo_37} text="Premiere Director" href="/premieredirector"/>
                <Cart img={photo_30} text="Ambassador" href="/ambassador"/>
                <Cart img={photo_26} text="Gold Ambassador" href="/goldambassador"/>
                <Cart img={photo_10} text="Platinum Ambassador" href="/platinumambassador"/>
                <Cart img={photo_38} text="New Titanium" href="/newtitanium"/>
                <Cart img={photo_27} text="New Achivement" href="/newachivement"/>
            </div>
        </Container>
        </>
    )
}
export default Home