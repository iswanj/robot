import React from 'react';
import './App.css';

import up from './images/up.svg';
import down from './images/down.svg';
import left from './images/left.svg';
import right from './images/right.svg';

import { hot } from 'react-hot-loader';

import { getPosition, getTeleportationCordinates, getCordinates } from './util';

import { Robot } from './components/Robot'; 

const boxCount = 25;

const App = () => {
  const [x, changeX] = React.useState(1);
  const [y, changeY] = React.useState(1);

  const move = command => {
    const { x: xPos, y: yPos } = getCordinates(x, y, command);
    changeX(xPos);
    changeY(yPos);
  };

  const teleport = ({x: newX, y: newY}) => {
    setTimeout(() => {
      changeX(newX);
      changeY(newY);
    }, (Math.abs(x-newX) + Math.abs(y-newY)) * 100); 
    // dealy teleport duration based on travel distance (how many boxes)
  };

  const renderBoxes = () => {
    let boxes = [];

    for (let i = boxCount; i >= 1; i--) {
      boxes.push(
        <div
          onClick={() => teleport(getTeleportationCordinates(i))}
          key={i}
          className="box"
        />
      );
    }
    return boxes;
  };

  return (
    <div className="App">
      <div className="playground">
        {renderBoxes()}
        <Robot positions={getPosition(x,y)} />
      </div>
      <div className="controller">
        <div className="arrow-container" />
        <div data-testid="up-button" className="arrow-container" onClick={() => move('up')}>
          <img src={up} className="up arrow" alt="up" />
        </div>
        <div className="arrow-container" />
        <div data-testid="left-button" className="arrow-container" onClick={() => move('left')}>
          <img src={left} className="left arrow" alt="left" />
        </div>
        <div className="arrow-container" />
        <div data-testid="right-button" className="arrow-container" onClick={() => move('right')}>
          <img src={right} className="right arrow" alt="right" />
        </div>
        <div className="arrow-container" />
        <div data-testid="down-button" className="arrow-container" onClick={() => move('down')}>
          <img src={down} className="down arrow" alt="down" />
        </div>
        <div className="arrow-container" />
      </div>
    </div>
  );
};

export default (process.env.NODE_ENV === 'development'
  ? hot(module)(App)
  : App);
