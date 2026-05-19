"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import Button from "./buttons/Button";

gsap.registerPlugin(ScrollTrigger);

const allProjects = {
  frontend: [
    {
      title: "Frontend Project 1",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      description:
        "This is a modern frontend project using React and TailwindCSS.",
      website: "#",
      github: "#",
    },
    {
      title: "Frontend Project 2",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
      description: "A responsive website with animations and interactivity.",
      website: "#",
      github: "#",
    },
    {
      title: "Frontend Project 2",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
      description: "A responsive website with animations and interactivity.",
      website: "#",
      github: "#",
    },
    {
      title: "Frontend Project 2",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
      description: "A responsive website with animations and interactivity.",
      website: "#",
      github: "#",
    },
    // Add more frontend projects
  ],
};

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const activeCategory = "frontend";

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".project-card");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 10%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 w-full max-w-[1200px] px-4 mx-auto flex flex-col items-center"
    >
      <div className="mb-8 w-full text-center">
        <Button title="Proof Of My Work" />
      </div>

      {/* Frontend projects only */}
      <CardContainer>
        {allProjects.frontend.map((proj, index) => (
          <Card
            key={index}
            title={proj.title}
            image={proj.image}
            description={proj.description}
            website={proj.website}
            github={proj.github}
          />
        ))}
      </CardContainer>
    </section>
  );
};

export default ProjectSection;

// -------------------- Card & Styles --------------------
const Card = ({ title, image, description, website, github }) => (
  <StyledWrapper image={image} className="project-card">
    <div className="book">
      <div className="card-content">
        <div className="heading">
          {title}
          <img src={image} alt={title} className="project-image" />
        </div>
        <div className="description">
          <p>{description}</p>
          <div className="btn-group">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              🌐 Website
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="cover">
        <div className="cover-bg"></div>
        <h1 className="front-title">{title}</h1>
      </div>
    </div>
  </StyledWrapper>
);

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  width: 100%;
  padding: 20px 0;
`;

const StyledWrapper = styled.div`
  .book {
    position: relative;
    border-radius: 16px;
    width: 100%;
    max-width: 100%;
    min-height: 340px;
    background-color: whitesmoke;
    box-shadow: 1px 1px 18px rgba(0, 0, 0, 0.2);
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    padding: 18px;
    box-sizing: border-box;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
    box-shadow: 1px 1px 12px #000;
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    padding: 15px;
    box-sizing: border-box;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .cover {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s;
    transform-origin: 0;
    box-shadow: 1px 1px 12px #000;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .cover-bg {
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    filter: blur(3px) brightness(0.6);
    opacity: 1;
    position: absolute;
    inset: 0;
    z-index: 0;
    transition: transform 0.5s ease;
  }

  .front-title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: white;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
    z-index: 1;
    position: relative;
  }

  .book:hover .cover {
    transform: rotateY(-80deg);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    width: 100%;
  }

  .heading {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project-image {
    margin-top: 8px;
    width: 100%;
    max-width: 160px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  .description {
    font-size: 13px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .btn-group {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 6px;
  }

  .btn {
    text-decoration: none;
    background-color: #007bff;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    transition: background 0.3s ease;
  }

  .btn:hover {
    background-color: #0056b3;
  }
`;
