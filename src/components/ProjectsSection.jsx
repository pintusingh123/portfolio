 "use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import Button from "./buttons/Button";
import { HiArrowTurnRightDown } from "react-icons/hi2";


gsap.registerPlugin(ScrollTrigger);

const allProjects = {
  frontend: [
    {
      title: "Frontend Project 1",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      description: "This is a modern frontend project using React and TailwindCSS.",
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
  backend: [
    {
      title: "Backend Project 1",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      description: "REST API built with Node.js and Express.",
      website: "#",
      github: "#",
    },
    {
      title: "Backend Project 1",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      description: "REST API built with Node.js and Express.",
      website: "#",
      github: "#",
    },
    {
      title: "Backend Project 1",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      description: "REST API built with Node.js and Express.",
      website: "#",
      github: "#",
    },
    {
      title: "Backend Project 1",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      description: "REST API built with Node.js and Express.",
      website: "#",
      github: "#",
    },
    // Add more backend projects
  ],
  fullstack: [
    {
      title: "Fullstack Project 1",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      description: "A fullstack MERN app with authentication and CRUD.",
      website: "#",
      github: "#",
    },
    {
      title: "Fullstack Project 1",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      description: "A fullstack MERN app with authentication and CRUD.",
      website: "#",
      github: "#",
    },
    {
      title: "Fullstack Project 1",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      description: "A fullstack MERN app with authentication and CRUD.",
      website: "#",
      github: "#",
    },
    // Add more fullstack projects
  ],
};

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("frontend");

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
      }
    );
  }, [activeCategory]);

  return (
    <section ref={sectionRef} className="py-10 w-[70%] mx-auto flex flex-col items-center">
      <div className="mb-8">
        <Button title="Proof Of My Work" />
      </div>

      {/* Category Buttons */}
    <div className="flex justify-center gap-1 mb-3 sticky top-[10%] z-10 py-3">
  {["frontend", "backend", "fullstack"].map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveCategory(cat)}
      className={`flex items-center gap-2 text-sm  md:text-xl font-semibold tracking-widest px-2 py-3 rounded-md shadow-md
        text-black
        border-transparent  
        hover:border-b hover:border-t hover:border-l-4 hover:border-[#ccac0ccf]
        transition-all duration-500 ease-in-out
        ${activeCategory === cat ? "text-white" : "text-gray-100 hover:text-white"}`}
    >
      {cat.toUpperCase()} <HiArrowTurnRightDown className="text-xl" />
    </button>
  ))}
</div>

      {/* Project Cards */}
      <CardContainer>
        {allProjects[activeCategory].map((proj, index) => (
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
            <a href={website} target="_blank" rel="noopener noreferrer" className="btn">
              🌐 Website
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn">
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
`;

const StyledWrapper = styled.div`
  .book {
    position: relative;
    border-radius: 10px;
    width: 260px;
    height: 340px;
    background-color: whitesmoke;
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
    text-shadow: 0 2px 5px rgba(0,0,0,0.6);
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
    width: 110px;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
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
