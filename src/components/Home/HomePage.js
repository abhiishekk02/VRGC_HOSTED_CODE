import HomeP1 from "../Assets/HomeP1.png";
import BenifitsCard from "./BenifitsCard.jsx";
import CertifiedBy from "./CertifiedBy.jsx";
import ClientsScroll from "./ClientsScroll.jsx";
import ContactUs from "./ContactUs.jsx";
import ExpCounter from "./ExpCounter.jsx";
import "./Home.css";
import Services from "./Services.jsx";
function HomePage(params) {
  return (
    <>
      {/* Section 1 */}
      <div className="Section1">
        <div className="row">
          <div className="col-md-6  d-flex align-items-center justify-content-center">
            <div className="tagline">
              <p>
                Certify with confidence. <br /> Thrive with assurance.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={HomeP1} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="Section2 container">
        <p className="title1">Welcome to VR Global Consulting</p>
        <p className="fs-6 text-secondary text-center">
          <b> (An ISO 9001:2015 Certified Company)</b>
        </p>
        <p className="p-4  mb-3">
          At VR Global Consulting, we stand as India's foremost trusted and
          experienced ISO certification service provider. Our extensive network
          includes collaborations with leading certification bodies across the
          nation, ensuring profound expertise in process implementation, audit,
          and certification across diverse industries. Experience excellence
          with us.
        </p>
        <ExpCounter />
      </div>
      {/* Section 3 */}
      <div className="Section 3">
        <div className="row card-rows">
          <BenifitsCard />
        </div>
      </div>
      {/* Section 4 */}
      <div className="Section4">
        <p className="title1">Our Services</p>
        <Services />
      </div>
      {/* Section 5 */}
      <div className="Section-5">
        <p className="title1 mt-4">Our Clients</p>
        <ClientsScroll />
      </div>
      {/*  */}

      <div className="Section-6  bg-dark text-light ">
        <p className="title1 mobile-display-none pt-4">Connect With Us</p>
        <ContactUs />
      </div>

      <div className="Section-7">
        <CertifiedBy />
      </div>
    </>
  );
}

export default HomePage;
