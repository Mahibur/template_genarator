import React from "react"
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import SeniorManagerPurple from "./components/pages/SeniorManagerPurple";
import SeniorDirectorPurple from "./components/pages/SeniorDirectorPurple";
import DiamondStatus from "./components/pages/DiamondStatus";
import ManagingDirectorRed from "./components/pages/ManagingDirectorRed";
import PlatinumAmbassadorGold from "./components/pages/PlatinumAmbassadorGold";
import GoldAmbassadorGold from "./components/pages/GoldAmbassadorGold";
import NewAchivement from "./components/pages/NewAchivement";
import ManagerOrange from "./components/pages/ManagerOrange";
import CorporateDirectorLime from "./components/pages/CorporateDirectorLime";
import AmbassadorPurple from "./components/pages/AmbassadorPurple";
import ExecutiveDirector from "./components/pages/ExecutiveDirector";
import NationalDirectorCyan from "./components/pages/NationalDirectorCyan";
import DirectorGold from "./components/pages/DirectorGold";
import InternationalDirectorGold from "./components/pages/InternationalDirectorGold";
import VipStatus from "./components/pages/VipStatus";
import TitaniumStatus from "./components/pages/TitaniumStatus";
import PremiereDirector from "./components/pages/PremiereDirector";
import SeniorDirector from "./components/pages/SeniorDirector";


const App =()=>{
  return(
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/managingdirector" element={<ManagingDirector/>} />
    <Route path="/corporatedirector" element={<CorporateDirector/>} />
    <Route path="/manager" element={<Manager/>} />
    <Route path="/seniormanager" element={<SeniorManager/>} />
    <Route path="/nationaldirector" element={<NationalDirector/>} />
    <Route path="/internationaldirector" element={<InternationalDirector/>} />
    <Route path="/premierdirector" element={<PremierDirector/>} />
    <Route path="/ambassador" element={<Ambassador/>} />
    <Route path="/goldambassador" element={<GoldAmbassador/>} />
    <Route path="/platinumambassador" element={<PlatinumAmbassador/>} />
    <Route path="/globalenterpreneurdimond" element={<GlobalEnterpreneurDimond/>} />
    <Route path="/globalenterpreneurvip" element={<GlobalEnterpreneurVip/>} />
    <Route path="/globalenterpreneurtwostar" element={<GlobalEnterpreneurTwoStar/>} />
    <Route path="/globalenterpreneuronyour" element={<GlobalEnterpreneurOnYour/>} />
    <Route path="/globalenterpreneurcruise" element={<GlobalEnterpreneurCruise/>} />
    <Route path="/corporatedirectorgreen" element={<CorporateDirectorGreen/>} />
    <Route path="/director" element={<Director/>} />
    <Route path="/seniordirector" element={<SeniorDirector/>} />
    <Route path="/rockstar" element={<RockStar/>} /> */}
    <Route path="/seniordirector" element={<SeniorDirector/>} />
    {/* <Route path="/regionaldirector" element={<RegionalDirector/>} /> */}
    <Route path="/seniormanagerpurple" element={<SeniorManagerPurple/>} />
    <Route path="/diamondstatus" element={<DiamondStatus/>} />
    <Route path="/managingdirectorred" element={<ManagingDirectorRed/>} />
    <Route path="/platinumambassadorgold" element={<PlatinumAmbassadorGold/>} />
    <Route path="/goldambassadorgold" element={<GoldAmbassadorGold/>} />
    <Route path="/newachivement" element={<NewAchivement/>} />
    <Route path="/managerorange" element={<ManagerOrange/>} />
    <Route path="/corporatedirectorlime" element={<CorporateDirectorLime/>} />
    <Route path="/ambassadorpurple" element={<AmbassadorPurple/>} />
    {/* <Route path="/executivedirector" element={<ExecutiveDirector/>} /> */}
    <Route path="/nationaldirectorcyan" element={<NationalDirectorCyan/>} />
    <Route path="/directorgold" element={<DirectorGold/>} />
    <Route path="/internationaldirectorgold" element={<InternationalDirectorGold/>} />
    <Route path="/vipstatus" element={<VipStatus/>} />
    <Route path="/premieredirector" element={<PremiereDirector/>} />
    <Route path="/titaniumstatus" element={<TitaniumStatus/>} />
    </Routes>
    </>
  )
}
export default App;