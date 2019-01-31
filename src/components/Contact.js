import React from 'react';

export const Contact = () => (
  <div>
    <main id="contact">
      <h1 className="lg-heading">
        Contact <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">
        You can reach me here...
      </h2>
      <div className="boxes">
        <div>
          <span className="text-secondary">Email: </span>
          <a href="mailto:dennismok25@gmail.com">dennismok25@gmail.com</a>
        </div>
        <div>
          <span className="text-secondary">Linkedin: </span>
          <a href="https://linkedin.com/in/mokdennis">
            My Linkedin <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </main>
  </div>
);
