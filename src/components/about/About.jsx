import React from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
    <div>
      <section className="about container section" id="about">
        <h2 className="section__title" id="about">
          <span className="bordered">ABOUT ME</span>
        </h2>
        <div
          className="row"
          data-aos="fade-up-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="col-md-4 d-flex justify-content-center">
            <img src="/images/logo.svg" alt="" className="about__img" />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <div className="row about__data">
                  <div className="col-md-6">
                    <p className="about__description">
                      I am passionate about design, web development, and motion
                      graphics, and I am eager to showcase my skills while also
                      being open to learning new ones that will contribute to my
                      growth. I am motivated by challenges and opportunities to
                      improve and enhance my work. I value collaboration,
                      feedback, and innovation, and I strive to deliver
                      high-quality and impactful results.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="about__skills grid">
                      <div className="skills_data">
                        <div className="skills_titles">
                          <h3 className="skills__name">
                            Front-end development
                            <span className="skills__number">90%</span>
                          </h3>
                          <div className="skills__bar">
                            <span className="skills__percentage development"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="about__skills grid">
                      <div className="skills_data">
                        <div className="skills_titles">
                          <h3 className="skills__name">
                            UI/UX design
                            <span className="skills__number ">75%</span>
                          </h3>
                          <div className="skills__bar">
                            <span className="skills__percentage ux"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="about__skills grid">
                      <div className="skills_data">
                        <div className="skills_titles">
                          <h3 className="skills__name">
                            Motion Graphics
                            <span className="skills__number">60%</span>
                          </h3>
                          <div className="skills__bar">
                            <span className="skills__percentage motion"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
