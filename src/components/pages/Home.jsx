import React from "react"
import Container from "../layers/Container"
import Cart from "../Cart"
import photo_1 from "/1.jpg"
import photo_2 from "/2.jpg"
import photo_3 from "/3.jpg"
import photo_4 from "/4.jpg"
import photo_5 from "/5.jpg"
import photo_6 from "/6.jpg"
import photo_7 from "/7.jpg"
import photo_8 from "/8.jpg"
import photo_9 from "/9.jpg"
import photo_10 from "/10.jpg"
import photo_11 from "/11.jpg"
import photo_12 from "/12.jpg"
import photo_13 from "/13.jpg"
import photo_14 from "/14.jpg"
import photo_15 from "/15.jpg"
import photo_16 from "/16.jpg"
import photo_17 from "/17.jpg"
import photo_18 from "/18.jpg"

const Home =()=>{
    return(
        <>
        <Container>
            <h1 className="py-3 text-center bg-blue-200 text-4xl font-semibold">Team Go Extreme</h1>
            <div className="main pt-4 flex flex-wrap gap-x-11 items-center justify-center">
                <Cart img={photo_1} text="Managing Director" href="/managingdirector"/>
                <Cart img={photo_2} text="Corporate Director" href="/corporatedirector"/>
                <Cart img={photo_3} text="Manager" href="/manager"/>
                <Cart img={photo_4} text="Senior Manager" href="/seniormanager"/>
                <Cart img={photo_5} text="National Director" href="/nationaldirector"/>
                <Cart img={photo_6} text="International Director" href="/internationaldirector"/>
                <Cart img={photo_7} text="Premier Director" href="/premierdirector"/>
                <Cart img={photo_8} text="Ambassador" href="/ambassador"/>
                <Cart img={photo_9} text="Gold Ambassador" href="/goldambassador"/>
                <Cart img={photo_10} text="Platinum Ambassador" href="/platinumambassador"/>
                <Cart img={photo_11} text="Global Entrepreneur" href="/globalenterpreneurdimond"/>
                <Cart img={photo_12} text="Global Entrepreneur" href="/globalenterpreneurvip"/>
                <Cart img={photo_13} text="Global Entrepreneur" href="/globalenterpreneurtwostar"/>
                <Cart img={photo_14} text="Global Entrepreneur" href="/globalenterpreneuronyour"/>
                <Cart img={photo_15} text="Global Entrepreneur" href="/globalenterpreneurcruise"/>
                <Cart img={photo_16} text="Corporate Director" href="/corporatedirectorgreen"/>
                <Cart img={photo_17} text="Director" href="/director"/>
                <Cart img={photo_18} text="Senior Director" href="/seniordirector"/>

            </div>
        </Container>
        </>
    )
}
export default Home