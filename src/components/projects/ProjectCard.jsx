// ProjectCard.js
import React from "react";
import "./projectCard.css"; // Import the CSS file

const getBadgeClass = (tag) => {
  switch (tag) {
    case "#front-end":
      return "badge-front-end";
    case "#ui-ux":
      return "badge-ui-ux";
    case "#motion-graphics":
      return "badge-motion-graphics";
    case "#design":
      return "badge-design";
    default:
      return "badge-primary";
  }
};

const ProjectCard = ({ image, tags, title, link, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 project-card">
        <div className="project-card-image">
          <img src={image} className="card-img-top" alt={title} />
          <div className="overlay">
            <div className="text">{description}</div>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-text">
            {tags.map((tag, index) => (
              <span key={index} className={`badge me-1 ${getBadgeClass(tag)}`}>
                {tag}
              </span>
            ))}
          </div>
          <a
            href={link}
            className="btn btn-primary mt-3"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
