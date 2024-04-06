import React, { useState } from "react";

const Services = (params) => {
  const ServicesCard = ({ service_title, service_desc }) => {
    const [showBtn, setShowBtn] = useState(true);
    const [clicked, setClicked] = useState("");

    const handleShowMore = () => {
      setShowBtn(!showBtn);
      setClicked(showBtn ? "clicked" : "");
    };

    return (
      <div className={`service-card ${clicked}`}>
        {showBtn ? (
          <p className="service-title">{service_title}</p>
        ) : (
          <p className="service-desc">{service_desc}</p>
        )}
        <button
          className={`service-btn ${showBtn ? "" : "clicked"}`}
          onClick={handleShowMore}
        >
          +
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="section-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ServicesCard
                service_title="Process Documentation"
                service_desc=" Enhance efficiency and clarity by streamlining your processes. We'll work with you to identify areas of improvement and implement organized workflows tailored to your business needs."
              />
            </div>
            <div className="col-md-4">
              <ServicesCard
                service_title="Process Improvement"
                service_desc="Optimize your operational strategies for maximum
                    effectiveness. Our team will analyze your current practices,
                    identify bottlenecks, and propose solutions to enhance
                    productivity and profitability."
              />
            </div>
            <div className="col-md-4">
              <ServicesCard
                service_title="Achieve ISO Certification"
                service_desc="Elevate your organization's standards with ISO
                    certification. We'll guide you through the certification
                    process, ensuring compliance with international quality
                    management standards and positioning your business for
                    global recognition."
              />
            </div>

            <div className="col-md-4">
              <ServicesCard
                service_title="Conducting Internal Audits"
                service_desc="Ensure regulatory compliance and identify areas for improvement through expert internal audits. Our experienced auditors will conduct thorough assessments of your systems and processes, providing valuable insights to drive continuous improvement."
              />
            </div>
            <div className="col-md-4">
              <ServicesCard
                service_title="Conducting Surveillance Audit"
                service_desc="Maintain compliance and uphold the integrity of your certifications with our surveillance audit support services. We'll assist you in preparing for and navigating surveillance audits, ensuring ongoing adherence to regulatory requirements."
              />
            </div>
            <div className="col-md-4">
              <ServicesCard
                service_title="Provide Trainings"
                service_desc="Invest in the professional development of your team with customized training solutions. From technical skills to leadership development, our training programs are designed to empower your employees and enhance organizational capabilities."
              />
            </div>
            {/* <div className="col-md-4">
              <ServicesCard
                service_title="Company Registration and GST Services"
                service_desc="Simplify the complexities of company registration and GST compliance with our comprehensive services. Whether you're establishing a new business or navigating regulatory changes, we'll provide expert guidance and support to ensure compliance and mitigate risk."
              />
            </div> */}

            <div className="col-md-4" >
              <ServicesCard 
                service_title="Enhance Capability with CMMI"
                service_desc="Leverage the Capability Maturity Model Integration (CMMI) framework to enhance your organization's capability and performance. Our experts will guide you through the process of assessing, improving, and benchmarking your key capabilities, leading to sustained business growth and excellence."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
