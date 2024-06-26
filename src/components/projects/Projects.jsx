import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./projects.css";

const projects = [
  {
    image: "/images/website_thumb.PNG",
    tags: ["#front-end", "#ui-ux"],
    title: "Website Portfolio",
    link: "/documents/website.pdf",
    description:
      "Designed and developed a website portfolio from scratch using Figma, Illustrator, React and Bootstrap...",
  },
  {
    image: "/images/mmf.PNG",
    tags: ["#ui-ux", "#design"],
    title: "Mirror Mountain Film Festival",
    link: "/documents/mmf.pdf",
    description:
      "Led a the team in a 12-week project for the redesign of the Mirror Mountain Film Festival website...",
  },
  {
    image: "/images/dat.PNG",
    tags: ["#front-end"],
    title: "Digital Acessibility Toolkit",
    link: "https://a11y.canada.ca/en/",
    description:
      "Collaborated in the development of the Digital Accessibility Toolkit website for the government of Canada. Using HTML, CSS, and JavaScript",
  },
  {
    image: "/images/crayola.PNG",
    tags: ["#motion-graphics"],
    title: "Crayola Advertisement",
    link: "https://drive.google.com/file/d/103I2opnJJNuyka6YaI5TXKEwPY4uYfqz/view?usp=sharing",
    description:
      "Designed and created a stop-motion video for Crayola using After Effects.",
  },
  {
    image: "/images/cms1.PNG",
    tags: ["#cms", "#front-end"],
    title: "Shopify Website",
    link: "https://vinnys-vintage-keyss.myshopify.com/",
    description:
      "Created a website for musical keyboards with the use of Shopify and the in-buil language Liquid. Password: cms2022",
  },
  {
    image: "/images/guess-who.PNG",
    tags: ["#front-end"],
    title: "Pokemon Guess Who!",
    link: "https://acev0010.github.io/pkm-guess-who/",
    description:
      "Created a fun guessing-the-pokemon starter game inspired by guess who!",
  },
  {
    image: "/images/lost-domain.PNG",
    tags: ["#motion-graphics"],
    title: "Lost Domain Promotional Video",
    link: "https://drive.google.com/file/d/1Uhx9p1J7HgkSICMszEH1bQ5JfQOfbiT5/view?usp=sharing",
    description:
      "Storyboarded, designed and created a promotional video for the Lost Domain comic on Webtoon.",
  },
  {
    image: "/images/people-counter.PNG",
    tags: ["#front-end"],
    title: "People Counter",
    link: "https://acev0010.github.io/people-counter/",
    description:
      "A simple people counter program that allows you to keep track of your numbers.",
  },
  {
    image: "/images/craftworks.PNG",
    tags: ["#motion-graphics"],
    title: "Craftworks Promotional Video",
    link: "https://drive.google.com/file/d/1qgM1_C-6yQu4qVraGGIwl8Kgy23iFnj8/view?usp=sharing",
    description:
      "Storyboarded, designed and created an advertisement video for Craftworks.",
  },
  
];

const uniqueTags = ["#front-end", "#ui-ux", "#motion-graphics", "#design", "#cms"];

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag],
    );
  };

  const filteredProjects = selectedTags.length
    ? projects.filter((project) =>
        selectedTags.every((tag) => project.tags.includes(tag)),
      )
    : projects;

  return (
    <div
      className="container mt-5"
      data-aos="zoom-in-up"
      data-aos-delay="100"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <h2 className="section__title mt-5" id="projects">
        <span className="bordered">PROJECTS</span>
      </h2>
      <div className="tags-list mb-4">
        {uniqueTags.map((tag, index) => (
          <button
            key={index}
            className={`btn btn-sm me-2 ${
              selectedTags.includes(tag) ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="row">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            tags={project.tags}
            title={project.title}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
