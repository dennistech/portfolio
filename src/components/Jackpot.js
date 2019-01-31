import React from 'react';

export const Jackpot = () => (
  <div>
    <main id="jackpot">
      <h1 className="lg-heading long-heading">
        Jackpot <span className="text-secondary">App</span>
      </h1>
      <h2 className="sm-heading">
        The objective of the game is to flip 9 unique tiles based on the outcome of rolling a pair of dice.
      </h2>
      <div className="tech-container">
        <h3>- Technologies -</h3>
        <div className="tech-list">
          <div className="tech-item">React Native</div>
        </div>
      </div>
      <div className="jackpot">
        <div className="item rules">
          <h2>Rules</h2>
          <ol>
            <li>Start by pressing the Start button to roll the pair of dice.</li>
            <li>Flip a tile that corresponds to a die or the sum of both dice. (Available options are highlighted in red)</li>
            <li>Once a tile is selected, that number is no longer available.</li>
            <li>The game is lost when no available tiles corresponds to the dice roll.</li>
            <li>The game is won when all 9 tiles are flipped and *JACKPOT* is revealed.</li>
            <li>Restart game with Start button.</li>
          </ol>
        </div>
        <div className="item">
          <img src={require("./../img/Jackpot-App_ss1.png")} alt="Jackpot start" />
          <div className="description">Start Screen</div>
        </div>
        <div className="item">
          <img src={require("./../img/Jackpot-App_ss2.png")} alt="Jackpot tile selection" />
          <div className="description">Tile Selection</div>
        </div>
        <div className="item">
          <img src={require("./../img/Jackpot-App_ss3.png")} alt="Jackpot remaining and selected" />
          <div className="description">Remaining and Selected Tiles</div>
        </div>
        <div className="item">
          <img src={require("./../img/Jackpot-App_ss4.png")} alt="Jackpot game over" />
          <div className="description">Game Over</div>
        </div>
        <div className="item">
          <img src={require("./../img/Jackpot-App_ss5.png")} alt="Jackpot winner" />
          <div className="description">Winner!</div>
        </div>
      </div>
      <div className="github-link">
        <a href="https://github.com/dennistech/Jackpot-App">Check it out on <i className="fab fa-github"></i></a>
      </div>
    </main>
  </div>
);
