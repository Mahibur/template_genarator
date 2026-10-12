import React from "react"
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import DiamondStatus from "./components/pages/DiamondStatus";
import NewAchivement from "./components/pages/NewAchivement";
import VipStatus from "./components/pages/VipStatus";
import PremiereDirector from "./components/pages/PremiereDirector";
import SeniorDirector from "./components/pages/SeniorDirector";
import PlatinumAmbassador from "./components/pages/PlatinumAmbassador";
import NationalDirector from "./components/pages/NationalDirector";
import ManagingDirector from "./components/pages/ManagingDirector";
import Manager from "./components/pages/Manager";
import InternationalDirector from "./components/pages/InternationalDirector";
import GoldAmbassador from "./components/pages/GoldAmbassador";
import Director from "./components/pages/Director";
import CorporateDirector from "./components/pages/CorporateDirector";
import Ambassador from "./components/pages/Ambassador";
import TwoStarQualified from "./components/pages/TwoStarQualified";
import WelcomeToTeam from "./components/pages/WelcomeToTeam";
import NewTitanium from "./components/pages/NewTitanium";
import SeniorManager from "./components/pages/SeniorManager";


const App =()=>{
  return(
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/welcometoteam" element={<WelcomeToTeam />} />
    <Route path="/seniordirector" element={<SeniorDirector/>} />
    <Route path="/seniormanager" element={<SeniorManager/>} />
    <Route path="/diamondstatus" element={<DiamondStatus/>} />
    <Route path="/managingdirector" element={<ManagingDirector/>} />
    <Route path="/goldambassador" element={<GoldAmbassador/>} />
    <Route path="/newachivement" element={<NewAchivement/>} />
    <Route path="/manager" element={<Manager/>} />
    <Route path="/corporatedirector" element={<CorporateDirector/>} />
    <Route path="/ambassador" element={<Ambassador/>} />
    <Route path="/nationaldirector" element={<NationalDirector/>} />
    <Route path="/director" element={<Director/>} />
    <Route path="/internationaldirector" element={<InternationalDirector/>} />
    <Route path="/vipstatus" element={<VipStatus/>} />
    <Route path="/premieredirector" element={<PremiereDirector/>} />
    <Route path="/newtitanium" element={<NewTitanium/>} />
    <Route path="/platinumambassador" element={<PlatinumAmbassador/>} />
    <Route path="/TwoStarQualified" element={<TwoStarQualified/>} />
    </Routes>
    </>
  )
}
export default App;