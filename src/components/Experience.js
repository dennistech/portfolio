import React from 'react';

export const Experience = () => (
  <div>
    <main id="experience">
      <h1 className="lg-heading">
        My <span className="text-secondary">Experience</span>
      </h1>
      <h2 className="sm-heading">
        Check out some of my projects...
      </h2>
      <div className="experience">
        <div className="item">
          <a href="#!">
            <img src={require("./../img/project.jpg")} alt="Project" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye"></i> Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github"></i> Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={require("./../img/project.jpg")} alt="Project" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye"></i> Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github"></i> Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={require("./../img/project.jpg")} alt="Project" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye"></i> Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github"></i> Github
          </a>
        </div>
      </div>
    </main>
  </div>
);
