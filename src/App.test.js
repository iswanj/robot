import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { getPosition, getTeleportationCordinates, getCordinates } from './util';

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Testing Util functions', () => {
  /// playground width and height equal 500px;
  /// box width and h eight equal 100px;
  it('always should return for right value based on this func [500 - (x * 100)]', () => {
    const styleRightPos1 = getPosition(1, 1);
    const styleRightPos2 = getPosition(2, 1);
    const styleRightPos3 = getPosition(3, 1);
    const styleRightPos4 = getPosition(4, 1);
    const styleRightPos5 = getPosition(5, 1);
    expect(styleRightPos1).toEqual({ top: 400, right: 400 });
    expect(styleRightPos2).toEqual({ top: 400, right: 300 });
    expect(styleRightPos3).toEqual({ top: 400, right: 200 });
    expect(styleRightPos4).toEqual({ top: 400, right: 100 });
    expect(styleRightPos5).toEqual({ top: 400, right: 0 });
  });

  it('always should return for top value based on this func [500 - (y * 100)]', () => {
    const styleTopPos1 = getPosition(1, 1);
    const styleTopPos2 = getPosition(1, 2);
    const styleTopPos3 = getPosition(1, 3);
    const styleTopPos4 = getPosition(1, 4);
    const styleTopPos5 = getPosition(1, 5);
    expect(styleTopPos1).toEqual({ top: 400, right: 400 });
    expect(styleTopPos2).toEqual({ top: 300, right: 400 });
    expect(styleTopPos3).toEqual({ top: 200, right: 400 });
    expect(styleTopPos4).toEqual({ top: 100, right: 400 });
    expect(styleTopPos5).toEqual({ top: 0, right: 400 });
  });
})
