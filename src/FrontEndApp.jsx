import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import ShowCase from "./components/Showcase/ShowCase";
import ContactPage from "./components/Contact/ContactPage";
import NavBarComponent from "./components/Navbar/NavBarComponent";
import Services from "./components/Our Services/Services"
export default function FrontEndApp(params) {
    return(
        <>
        <NavBarComponent/>
        <Routes>
        <Route  path="/" element={<HomePage/>}/>
        <Route path="/About" element={<AboutPage />} />
        <Route path="/ShowCase" element={<ShowCase />} />
        <Route path="/OurServices" element={<Services />} />

        <Route path="/Contact" element={<ContactPage />} />
        </Routes>
        
        </>
    )
};
