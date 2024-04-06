import CP1 from "../Assets/CP1.jpg"
import CP2 from "../Assets/CP2.png"
import CP3 from "../Assets/CP3.jpg"
import CP4 from "../Assets/CP4.png"
import CP5 from "../Assets/CP5.png"
import "bootstrap/dist/css/bootstrap.min.css";

import "./Home.css"
export default function CertifiedBy() {
    return(
        <>
        <div className=" certified-img">
            
            <div className="d-flex">
            <img className="" src={CP4} alt="3" />

        <img className="" src={CP2} alt="2" />
        <img className="" src={CP1} alt="1" />

        <img className="" src={CP3} alt="4" />
        <img className="" src={CP5} alt="4" />


        </div></div>
        </>
    )
};
