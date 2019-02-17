import React from 'react';
import './App.css';

import robot from './images/robot.svg';
import up from './images/up.svg';
import down from './images/down.svg';
import left from './images/left.svg';
import right from './images/right.svg';

import { hot } from 'react-hot-loader';

import { getPosition, getTeleportationCordinates, getCordinates } from './util';

const boxCount = 25;

const App = () => {
  const [x, changeX] = React.useState(1);
  const [y, changeY] = React.useState(1);

  const move = command => {
    const { x: xPos, y: yPos } = getCordinates(x, y, command);
    changeX(xPos);
    changeY(yPos);
  };

  const teleport = ({x, y}) => {
    changeX(x);
    changeY(y);
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
        <div className="robotContainer" style={getPosition(x,y)}>
          <img src={robot} className="robot" alt="robot" />
        </div>
      </div>
      <div className="controller">
        <div className="arrow-container" />
        <div className="arrow-container" onClick={() => move('up')}>
          <img src={up} className="up arrow" alt="up" />
        </div>
        <div className="arrow-container" />
        <div className="arrow-container" onClick={() => move('left')}>
          <img src={left} className="left arrow" alt="left" />
        </div>
        <div className="arrow-container" />
        <div className="arrow-container" onClick={() => move('right')}>
          <img src={right} className="right arrow" alt="right" />
        </div>
        <div className="arrow-container" />
        <div className="arrow-container" onClick={() => move('down')}>
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
