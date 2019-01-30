import React from 'react';

export const Midnite = () => (
  <div>
    <main id="midnite">
      <h1 className="lg-heading long-heading">
        Midnite <span className="text-secondary">App</span>
      </h1>
      <h2 className="sm-heading">
        Midnite is the classic midnight (1-4-24) dice game written with React Native.
      </h2>
      <div className="tech-container">
        <h3>- Technologies -</h3>
        <div className="tech-list">
          <div className="tech-item">React Native</div>
        </div>
      </div>
      <div className="midnite">
        <div className="item-ss1">
          <img src={require("./../img/Midnite-App_ss1.png")} alt="Midnite complete game" />
          <div className="description">Game play from start to end with final score of 19</div>
        </div>
        <div className="item-ss2">
          <img src={require("./../img/Midnite-App_ss2.png")} alt="Midnite score 24" />
          <div className="description">Highest score of 24!</div>
        </div>
        <div className="item-ss3">
          <img src={require("./../img/Midnite-App_ss3.png")} alt="Midnite did not qualify" />
          <div className="description">Did Not Qualify</div>
        </div>
      </div>
      <div className="github-link">
        <a href="https://github.com/dennistech/Midnite-App">Check it out on <i className="fab fa-github"></i></a>
      </div>
    </main>
  </div>
);
