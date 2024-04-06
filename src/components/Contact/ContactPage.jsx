import "bootstrap/dist/css/bootstrap.min.css";
import brand from "../Assets/Brand.png"
import "./ContactPage.css"
import { useEffect, useState } from "react";
export default function ContactPage(params) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [Btn, setBtn] = useState("Submit");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setTimeout(() => {
        setIsActive(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isActive]);

  const handleOpenMaps = () => {
    window.open(
      "https://maps.app.goo.gl/1mhimK1qMqshEMVQ8"
    );
  };

  const handleCloseClick = () => {
    setIsActive(false);
  };


  const formSubmit = (e) => {
    e.preventDefault();
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!name.trim() | !email.trim()) {
      setError("Please Enter Details Before Submitting.");
    } else if (!re.test(email)) {
      setError("Invaild Email!");
    } else if (phone.length !== 10) {
      setError("Invalid Phone Number");
    } else {
      setError("");
      setIsActive(true);

      const emailBody = `Dear X, <br>We got clients from VR Global Consulting Website. Hope you can connect them to provide services. The details are given below. <br>Thank You. <br> <b>Name:</b>  ${name} <br> Email: ${email} <br> Phone Number: ${phone}`;
      window.Email.send({
        // port : 2525
        Host: "smtp.elasticemail.com",
        // Username: "starzabhi@gmail.com",
        // Password: "0368AA8382EA7CD98994DA1CF1037FCD8B12",
        Username: "h1",
        Password: "h1",
        // From: "starzabhi@gmail.com",
        // To: "pola.anirudh190@gmail.com ",
        Subject: "VR Global",
        Body: emailBody,
      })
        .then((message) => {
          console.log("Email sent successfully!");
          setBtn("Sent");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Failed to send email. Please try again later.");
        });
    }
  };

  useEffect(() => {
    if (Btn === "Submit") {
      return;
    }

    setBtn("Sent");

    const timer = setTimeout(() => {
      setBtn("Submit");
      setName("");
      setEmail("");
      setPhone("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [Btn]);
    return(
        <>

        <div className="container contactpage ">
          <div className="brandBanner">

        <img src={brand} className="d-block img  brand" alt="" />
        </div>

          <div className="contactPageContainer">

          <div className="row contactDetailsRow">
<div className="col-md-6 contactPageDetails">

        <p className="h3"> <i className="bi bi-person"></i> Contact Us</p>
        <div className="contactDetails">
            <p> <span className="bi bi-telephone"></span> Phone: +91 9963553332</p>

            <p> <span className="bi bi-envelope"></span> Email: <span> </span>
            <a href="mailto:pola@vrglobalconsulting.com">
                pola@vrglobalconsulting.com
            </a></p>
          </div>
          <p className="h3"> <i className="bi bi-geo-alt"></i> Location</p>

          <div className="locationDetails">
            <address>
              <p>Registered office: #66C, Vengal Rao Nagar </p>
              <p>Hyderabad 500038, Telangana, India</p>
              <button onClick={handleOpenMaps} className="btn btn-dark mt-2" >
               Open in Google Maps
              </button>
            </address>
          </div>
        </div>

<div className="col-md-6 ">
  <div className="contactPageBookCall">
<h3 className="title1 h4 text-dark " style={{ color: "white" }}>
            Book A Call
          </h3>
          <p className="h6 mt-3 text-center text-danger">{error}</p>

          <div className="submitFormContainer">
            <form
              className="mb-5"
              onSubmit={formSubmit}
              id="contactForm"
              name="contactForm"
            >
              <div className="forms submitForm">
                <div className=" p-3 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div className=" p-3 form-group submitContactFormGroup">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className=" p-3 form-group">
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="contactBtn">
                    <button
                      id="contactBtn"
                      className={`btn btn-primary ${Btn}-status`}
                      onClick={formSubmit}
                    >
                      {Btn}
                    </button>
                    <div className={`toast ${isActive ? "active" : ""}`}>
                      <div className="toast-content">
                        
                        <i className="bi bi-check check"></i>
                        <div className="message">
                          <span className="text text-1 ">
                            Message Sent Successfully <br />
                          </span>
                          <span className="text text-2">
                            Thank you for reaching out. We will contact you as
                            soon as possible.
                          </span>
                        </div>
                      </div>
                      <div
                        className={`progress ${isActive ? "active" : ""}`}
                      ></div>
                     
                        <i className="bi bi-x close" onClick={handleCloseClick}></i>

                    </div>
                  </div>

                  <span className="submitting"></span>
                </div>
            </form>
          </div>
          </div>
        </div>
        </div>
</div>
</div>




        </>
    )
};
