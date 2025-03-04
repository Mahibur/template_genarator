import React from "react"
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import ManagingDirector from "./components/pages/ManagingDirector";
import CorporateDirector from "./components/pages/CorporateDirector";
import Manager from "./components/pages/Manager";
import SeniorManager from "./components/pages/SeniorManager";
import NationalDirector from "./components/pages/NationalDirector";
import InternationalDirector from "./components/pages/InternationalDirector";
import PremierDirector from "./components/pages/PremierDirector";
import Ambassador from "./components/pages/Ambassador";
import GoldAmbassador from "./components/pages/GoldAmbassador";
import PlatinumAmbassador from "./components/pages/PlatinumAmbassador";
import GlobalEnterpreneurDimond from "./components/pages/GlobalEnterpreneurDimond";
import GlobalEnterpreneurVip from "./components/pages/GlobalEnterpreneurVip";
import GlobalEnterpreneurTwoStar from "./components/pages/GlobalEnterpreneurTwoStar";
import GlobalEnterpreneurOnYour from "./components/pages/GlobalEnterpreneurOnYour";
import GlobalEnterpreneurCruise from "./components/pages/GlobalEnterpreneurCruise";
import CorporateDirectorGreen from "./components/pages/CorporateDirectorGreen";
import Director from "./components/pages/Director";
import SeniorDirector from "./components/pages/SeniorDirector";


const App =()=>{
  return(
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/managingdirector" element={<ManagingDirector/>} />
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

    </Routes>
    </>
  )
}
export default App;