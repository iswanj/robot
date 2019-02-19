import React from 'react';

import App from '../App';
import { Robot } from '../components/Robot';

import {render, fireEvent, waitForElement, cleanup} from 'react-testing-library'
import 'jest-dom/extend-expect'

afterEach(cleanup);

describe('Robot Component', () => {
  it('it renders with correct styles', async () => {
    const style = {
      top: 400,
      right: 400
    }
    const { getByTestId } = render(<Robot positions={style} />);

    const element = await waitForElement(() =>
      getByTestId('robot-body')
    );
    expect(element.style._values).toEqual({ "top": "400px", "right": "400px" });
  });
});

describe('App Component', async () => {
  it('Controller up, down, left and right arrow clicks change robot top position', async () => {
    const { getByTestId } = render(<App />);

    const upButton = await waitForElement(() =>
      getByTestId('up-button')
    );

    const downButton = await waitForElement(() =>
      getByTestId('down-button')
    );

    const leftButton = await waitForElement(() =>
      getByTestId('left-button')
    );

    const rightButton = await waitForElement(() =>
      getByTestId('right-button')
    );

    fireEvent.click(upButton);

    const robot = await waitForElement(() =>
      getByTestId('robot-body')
    );
    expect(robot.style._values).toEqual({ "top": "300px", "right": "400px" });

    fireEvent.click(downButton);
    // now top value should reset to 400 
    // because with click down button robot should come back to the previous y position

    expect(robot.style._values).toEqual({ "top": "400px", "right": "400px" });

    fireEvent.click(rightButton);
    // now right value should change to 300

    expect(robot.style._values).toEqual({ "top": "400px", "right": "300px" });

    fireEvent.click(leftButton);
    // now right value should reset to 300
    // because with click left button robot should come back to the previous x position

    expect(robot.style._values).toEqual({ "top": "400px", "right": "400px" });
  });
});
