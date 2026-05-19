 // CardList.js
import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";

const projects = [
  {
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    description: "Personal portfolio showcasing skills, projects, and contact info.",
    website: "https://yourportfolio.com",
    github: "https://github.com/yourname/portfolio",
  },
  {
    title: "E-Commerce App",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
    description: "A full-stack shopping app with cart, login, and admin dashboard.",
    website: "https://myecommercesite.com",
    github: "https://github.com/yourname/ecommerce-app",
  },
  {
    title: "Chat App",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    description: "Real-time chat app using Socket.io and Node.js.",
    website: "https://chatterbox.live",
    github: "https://github.com/yourname/chat-app",
  },
  {
    title: "Crud App",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    description: "Real-time Crud using Socket.io and Node.js.",
    website: "https://chatterbox.live",
    github: "https://github.com/yourname/chat-app",
  },
];

const Card = ({ title, image, description, website, github }) => {
  return (
    <StyledWrapper image={image}>
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

        {/* cover with bg image and blur */}
        <div className="cover">
          <div className="cover-bg"></div>
          <h1 className="front-title">{title}</h1>
        </div>
      </div>
    </StyledWrapper>
  );
};

const CardList = () => {
  return (
    <>
      <div className="mb-8">
        <Button title="View Projects" />
      </div>
      <CardContainer>
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            website={project.website}
            github={project.github}
          />
        ))}
      </CardContainer>
    </>
  );
};

export default CardList;

// Styled Components
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px 20px;
`;

const StyledWrapper = styled.div`
  .book {
    position: relative;
    border-radius: 10px;
    width: 280px;
    height: 380px;
    background-color: whitesmoke;
    box-shadow: 1px 1px 12px #000;
    transform: preserve-3d;
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    padding: 20px;
    box-sizing: border-box;
    margin: 10px;
    overflow: hidden;
  }

  /* 🔹 Cover Background */
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

  /* 🔹 Add background image inside cover */
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

  /* 🔹 Title on top of blurred image */
  .front-title {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    color: white;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
    z-index: 1;
    position: relative;
  }

  /* 🔹 Hover effect */
  .book:hover .cover {
    transform: rotateY(-80deg);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .heading {
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project-image {
    margin-top: 10px;
    width: 120px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  .description {
    font-size: 14px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .btn-group {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 8px;
  }

  .btn {
    text-decoration: none;
    background-color: #007bff;
    color: white;
    padding: 6px 12px;
    border-radius: 5px;
    font-size: 14px;
    transition: background 0.3s ease;
  }

  .btn:hover {
    background-color: #0056b3;
  }
`;
