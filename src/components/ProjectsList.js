import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLink } from "react-icons/bi";
import ProjectsData from "./ProjectsData";

const button_Wrapper_Style = {
  position: "realtive",
  zIndex: 1
};

export default function App() {
  return (
      <>
          <h1 id="projects" className="project-sub-title"><span className="project-text">Pro</span>jects</h1>
      <div  id="projects" style={button_Wrapper_Style} className="projects-container">
        
                  {ProjectsData.map((project) => {
                  return (
                <div key={project.id} className="project-card">
                    <div className="img-section">          
                        <img
                            src={project.image}
                            alt=""
                        />
                        <div className="imageCardEffect"></div>
                    </div>
                    
                  <div className="project-info">
                      <h5 className="project-title">
                        {project.title}
                      </h5>
                        <p className="desc-section">{project.description}</p>
                      <div className="projects-link-section">
                          <a className="sourse-live-links" href={project.source} target="_blank" rel="noreferrer">
                              <FaGithub  size="40" />
                          </a>
                          <a className="sourse-live-links" href={project.demoLink} target="_blank" rel="noreferrer">
                              <BiLink size="40"  />
                          </a>
                      </div>
                    </div>
                </div>)
                  })}
        <a href="https://github.com/CodeWithBilal" className="more-project" target="_blank" rel="noreferrer">Check my others projects on Github</a>
      </div>
    </>
  );
}
