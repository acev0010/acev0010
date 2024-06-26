import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  return (
    <Container className="container-header">
      <div
        className="d-flex align-items-center flex-wrap justify-content-center gap-3"
        style={{ gap: "10px" }}
      >
        <div>
          <h1>
            Hello, I’m <span style={{ color: "#d44d58" }}>Isabel Acevedo</span>
          </h1>
          <p>
            I’m a multimedia specialist with experience in UI & UX design,
            Front-end Development, and motion graphics.
          </p>
          <div className="social-icons">
  <a
    href="https://github.com/acev0010"
    className="social-github"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub profile"
  >
    <i className="fab fa-github"></i>
  </a>
  <a
    href="https://www.linkedin.com/in/iacev/"
    className="social-linkedin"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn profile"
  >
    <i className="fab fa-linkedin"></i>
  </a>
</div>

        </div>
        <img
          src="/images/avatar.png"
          alt="Avatar"
          className="img-fluid img-avatar"
        />
      </div>
    </Container>
  );
};

export default Header;
