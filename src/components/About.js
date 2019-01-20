import React from 'react';

export const About = () => (
  <div>
    <main id="about">
      <h1 className="lg-heading">
        About <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">
        A couple of things about me...
      </h2>
      <div className="about-info">
        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>Hi! I'm Dennis and I am a self-taught Front End Engineer in San Francisco, CA with a passion for learning and applying new technologies to make improvements.</p>
        </div>
        <div className="skill skill-1">
          <h3>Programming</h3>
          <ul>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>Shell Scripting</li>
            <li>MySQL</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className="skill skill-2">
          <h3>Web Development</h3>
          <ul>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
          </ul>
        </div>
        <div className="skill skill-3">
          <h3>Frameworks</h3>
          <ul>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
);
