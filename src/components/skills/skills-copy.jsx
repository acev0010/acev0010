import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section>
      <h2 className="section__title mt-5">
        <span className="bordered">SKILLS</span>
      </h2>
      <div className="center-container">
        <section className="skills">
          <div className="container tiny d-flex justify-content-center">
            <div className="p-2">
              <img src="/images/html.png" className="img-fluid " />
              <p>Html</p>
            </div>
            <div className="p-2">
              <img src="/images/css.png" className="img-fluid " />
              <p>CSS</p>
            </div>
            <div className="p-2">
              <img src="/images/bootstrap.png" className="img-fluid " />
              <p>Bootstrap</p>
            </div>
            <div className="p-2">
              <img src="/images/atom.png" className="img-fluid " />
              <p>React</p>
            </div>
            <div className="p-2">
              <img src="/images/figma.png" className="img-fluid " />
              <p>Figma</p>
            </div>
            <div className="p-2">
              <img src="/images/js.png" className="img-fluid " />
              <p>Javascript</p>
            </div>
            <div className="p-2">
              <img src="/images/github.png" className="img-fluid " />
              <p>Github</p>
            </div>
            <div className="p-2">
              <img src="/images/git.png" className="img-fluid " />
              <p>Git</p>
            </div>
            <div className="p-2">
              <img src="/images/11ty.png" className="img-fluid " />
              <p>11ty</p>
            </div>
          </div>
          <div className="container tiny d-flex d-flex-row justify-content-center">
            <div className="p-2">
              <img src="/images/ilust.png" className="img-fluid " />
              <p>Ilustrator</p>
            </div>
            <div className="p-2">
              <img src="/images/psd.png" className="img-fluid " />
              <p>Photoshop</p>
            </div>
            <div className="p-2">
              <img src="/images/after.png" className="img-fluid " />
              <p>After Effects</p>
            </div>
            <div className="p-2">
              <img src="/images/xd.png" className="img-fluid " />
              <p>Adobe XD</p>
            </div>
            <div className="p-2">
              <img src="/images/drupal.png" className="img-fluid " />
              <p>Drupal</p>
            </div>
            <div className="p-2">
              <img src="/images/wordpress.png" className="img-fluid " />
              <p>Wordpress</p>
            </div>
            <div className="p-2">
              <img src="/images/shopify.png" className="img-fluid " />
              <p>Shopify</p>
            </div>
            <div className="p-2">
              <img src="/images/ms.png" className="img-fluid " />
              <p>Office</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;

// .tiny {
//   max-width: 4px;
//   text-align: center;
// }

// /* Add this to your CSS */
// .center-container {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// /* Adjusting the existing .skills class */
// .skills {
//   padding: 1.875rem;
//   background-color: var(--container-color);
//   box-shadow: var(--shadow);
//   border-radius: var(--border-radius);
//   margin: 0 auto; /* Add this line to center the .skills container */
// }

// /* Media query for smaller screens */
// @media (max-width: 768px) {
//   .skills {
//     width: 90%; /* Adjust width for smaller screens */
//   }

//   .tiny {
//     display: flex;
//     flex-direction: column; /* Stack items vertically */
//     align-items: center;
//   }

//   .p-2 {
//     text-align: center;
//   }
// }
