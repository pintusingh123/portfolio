 import React from "react";
import Button from "../buttons/Button";

function Projects() {
  let details = [
    {
      name: "CRUD App",
      description: "A simple CRUD application using MERN stack",
      Website: "crud-app-eight-phi.vercel.app/",
      code: "github.com/pintusingh123/crud-app/blob/main/src/component/Crud.jsx",
    },
    {
      name: "E-commerce Website",
      description:
        "A full-featured e-commerce website using  javascript & tailwindCSS",
      Website: "www.com",
      code: "github.com",
    },
    {
      name: "Blog Web App",
      description: "A personal portfolio website to showcase my work",
      Website: "www.com",
      code: "github.com",
    },
    {
      name: "Chat Application",
      description: "A real-time chat application using Socket.io",
      Website: "www.com",
      code: "github.com",
    },
    {
      name: "ToDo APP",
      description: "A simple ToDo application to manage daily tasks",
      Website: "todo-app.com",
      code: "github.com/yourusername/todo-app",
    },
    {
      name: "Password Genrator",
      description:
        "A simple Password Genrator using react hooks like : useCallback useState, useEffect, useRef with optimize code ",
      Website: "react-pass-genrator-one.vercel.app/",
      code: "github.com/pintusingh123/react_Pass_Genrator/blob/main/src/chaihook/Pass.jsx",
    },
  ];

  return (
    <div className="p-10 w-[70%] mx-auto min-h-screen">
      {/* Heading */}
     

    
      {/* Project Grid */}
      <div className="grid bg-blue-400 grid-cols-1 md:grid-cols-2 gap-6">
        {details.map((project, index) => (
          <div
            key={index}
            className="border shadow-gray-600 rounded-lg shadow-md p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
              <p className="mb-4">{project.description}</p>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href={`https://${project.Website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden border text-white font-semibold py-2 px-4 rounded transition-shadow duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300
                  before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-500 before:w-0 before:h-full before:z-0 before:transition-all before:duration-700 hover:before:w-full"
                style={{ zIndex: 1 }}
              >
                <span className="relative z-10">Website</span>
              </a>
              <a
                href={`https://${project.code}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden border text-white font-semibold py-2 px-4 rounded transition-shadow duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300
                  before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-600 before:to-blue-700 before:w-0 before:h-full before:z-0 before:transition-all before:duration-700 hover:before:w-full"
                style={{ zIndex: 1 }}
              >
                <span className="relative z-10">Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
