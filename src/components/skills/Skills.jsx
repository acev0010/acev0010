import React from "react";
import "./skills.css";

const skills = [
  { name: "HTML", icon: "/images/html.png" },
  { name: "CSS", icon: "/images/css.png" },
  { name: "JavaScript", icon: "/images/js.png" },
  { name: "React", icon: "/images/atom.png" },
  { name: "Drupal", icon: "/images/drupal.png" },
  { name: "WordPress", icon: "/images/wordpress.png" },
  { name: "Shopify", icon: "/images/shopify.png" },
  { name: "W3C", icon: "/images/w3c.png" },
  { name: "Git", icon: "/images/git.png" },
  { name: "GitHub", icon: "/images/github.png" },
  { name: "Bootstrap", icon: "/images/bootstrap.png" },
  { name: "Figma", icon: "/images/figma.png" },
  { name: "11ty", icon: "/images/11ty.png" },
  { name: "Office", icon: "/images/ms.png" },
  { name: "Photoshop", icon: "/images/psd.png" },
  { name: "Adobe XD", icon: "/images/xd.png" },
  { name: "Illustrator", icon: "/images/ilust.png" },
  { name: "After Effects", icon: "/images/after.png" },
  { name: "Dreamweaver", icon: "/images/dw.png" },
];

const Skills = () => {
  return (
    <div className="container my-5">
      <h2 className="section__title mt-5" id="skills">
        <span className="bordered">SKILLS</span>
      </h2>
      <div
        className="skills-grid d-flex flex-wrap justify-content-center skills"
        data-aos="flip-up"
        data-aos-delay="100"
        data-aos-duration="600"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-once="true"
      >
        {skills.map((skill, index) => (
          <div key={index} className="text-center m-2 skill-item">
            <img
              src={skill.icon}
              alt={skill.name}
              className="img-fluid skill-icon"
            />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
