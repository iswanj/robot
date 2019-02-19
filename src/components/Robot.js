import React from 'react';

import robot from '../images/robot.svg';

export const Robot = ({ positions }) => {
  return (
    <div data-testid="robot-body" className="robotContainer" style={positions}>
      <img src={robot} className="robot" alt="robot" />
    </div>
  )
};
