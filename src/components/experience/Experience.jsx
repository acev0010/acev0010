import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./experience.css";
import Data from "./Data"; // Correct the import path if needed
import { Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Card = ({ icon, title, year, desc, className }) => (
  <div className={`card ${className}`}>
    {icon && <i className={icon}></i>}
    <h3>{title}</h3>
    <span>{year}</span>
    {Array.isArray(desc) ? (
      <ul>
        {desc.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    ) : (
      <p>{desc}</p>
    )}
  </div>
);

const Experience = () => {
  const educationData = Data.filter((val) => val.category === "education");
  const workData = Data.filter((val) => val.category === "work");

  const handleDownload = () => {
    // Replace 'resume.pdf' with the path to your resume PDF file
    const link = document.createElement("a");
    link.href = "/documents/resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section>
      <h2 className="section__title" id="experience">
        <span className="bordered">EXPERIENCE</span>
      </h2>
      <Row
        className="d-flex gap-4 justify-content-center"
        data-aos="fade-up-left"
        data-aos-delay="100"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <Col xs={12} md={5} className="timeline">
          {workData.map((val, index) => (
            <Card
              className="custom-card timeline__item"
              key={index}
              icon={val.icon}
              title={val.title}
              year={val.year}
              desc={val.desc}
            />
          ))}
        </Col>

        <Col xs={12} md={5} className="timeline">
          {educationData.map((val, id) => (
            <Card
              className="custom-card timeline__item"
              key={id}
              icon={val.icon}
              title={val.title}
              year={val.year}
              desc={val.desc}
            />
          ))}
          <div className="text-right mt-4">
            <Button className="btn-color" onClick={handleDownload}>
              Download Resume
            </Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Experience;
