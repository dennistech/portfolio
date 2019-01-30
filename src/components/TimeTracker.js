import React from 'react';

export const TimeTracker = () => (
  <div>
    <main id="time-tracker">
      <h1 className="lg-heading long-heading">
        TimeTracker <span className="text-secondary">App</span>
      </h1>
      <h2 className="sm-heading">
        TimeTracker is a simple React-Native app used to log timestamps of a work shift.
      </h2>
      <div className="tech-container">
        <h3>- Technologies -</h3>
        <div className="tech-list">
          <div className="tech-item">React Native</div>
          <div className="tech-item">Redux</div>
          <div className="tech-item">Realm</div>
        </div>
      </div>
      <div className="time-tracker">
        <div className="item">
          <img src={require("./../img/TimeTracker_ss1.png")} alt="TimeTracker start" />
          <div className="description">Start Screen</div>
        </div>
        <div className="item">
          <img src={require("./../img/TimeTracker_ss2.png")} alt="TimeTracker modal" />
          <div className="description">Modal to adjust time and save</div>
        </div>
        <div className="item">
          <img src={require("./../img/TimeTracker_ss6.png")} alt="TimeTracker history" />
          <div className="description">Shift History</div>
        </div>
        <div className="item">
          <img src={require("./../img/TimeTracker_ss7.png")} alt="TimeTracker history details" />
          <div className="description">Shift Details</div>
        </div>
      </div>
      <div className="github-link">
        <a href="https://github.com/dennistech/TimeTracker">Check it out on <i className="fab fa-github"></i></a>
      </div>
    </main>
  </div>
);
