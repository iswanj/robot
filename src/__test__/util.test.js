import { getPosition, getCordinates, getTeleportationCordinates } from '../util';

describe('getPosition functions', () => {
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
});

describe("getCordinates Function", () => {
  it('it should return y value with add 1 if send "up" command', () => {
    let x = 1;
    let y = 1;
    const nextValues = getCordinates(x, y, "up");
    expect(nextValues).toEqual({ x: 1, y: 2 });
  });
  it('it should return y value with reduce 1 if send "down" command', () => {
    let x = 1;
    let y = 2;
    const nextValues = getCordinates(x, y, "down");
    expect(nextValues).toEqual({ x: 1, y: 1 });
  });
  it('it should return x value with add 1 if send "right" command', () => {
    let x = 1;
    let y = 1;
    const nextValues = getCordinates(x, y, "right");
    expect(nextValues).toEqual({ x: 2, y: 1 });
  });
  it('it should return x value with reduce 1 if send "left" command', () => {
    let x = 2;
    let y = 1;
    const nextValues = getCordinates(x, y, "left");
    expect(nextValues).toEqual({ x: 1, y: 1 });
  });
  it('it should return x with same value if x === 1 and send "left" command', () => {
    let x = 1;
    let y = 1;
    const nextValues = getCordinates(x, y, "left");
    expect(nextValues).toEqual({ x: 1, y: 1 });
  });
  it('it should return y with same value if y === 1 and send "down" command', () => {
    let x = 1;
    let y = 1;
    const nextValues = getCordinates(x, y, "down");
    expect(nextValues).toEqual({ x: 1, y: 1 });
  });
  it('it should return x with same value if x === 5 and send "right" command', () => {
    let x = 5;
    let y = 1;
    const nextValues = getCordinates(x, y, "right");
    expect(nextValues).toEqual({ x: 5, y: 1 });
  });
  it('it should return y with same value if y === 5 and send "up" command', () => {
    let x = 1;
    let y = 5;
    const nextValues = getCordinates(x, y, "up");
    expect(nextValues).toEqual({ x: 1, y: 5 });
  });
});

describe('getTeleportationCordinates Function', () => {
  it('Should generate cordinates by box indexes', () => {
    const boxMap = {
      25: { x: 1, y: 5 },
      24: { x: 2, y: 5 },
      23: { x: 3, y: 5 },
      22: { x: 4, y: 5 },
      21: { x: 5, y: 5 },
      20: { x: 1, y: 4 },
      19: { x: 2, y: 4 },
      18: { x: 3, y: 4 },
      17: { x: 4, y: 4 },
      16: { x: 5, y: 4 },
      15: { x: 1, y: 3 },
      14: { x: 2, y: 3 },
      13: { x: 3, y: 3 },
      12: { x: 4, y: 3 },
      11: { x: 5, y: 3 },
      10: { x: 1, y: 2 },
      9: { x: 2, y: 2 },
      8: { x: 3, y: 2 },
      7: { x: 4, y: 2 },
      6: { x: 5, y: 2 },
      5: { x: 1, y: 1 },
      4: { x: 2, y: 1 },
      3: { x: 3, y: 1 },
      2: { x: 4, y: 1 },
      1: { x: 5, y: 1 }
    }

    Object.keys(boxMap).forEach(boxIndex => {
      const cordinates = getTeleportationCordinates(boxIndex);
      expect(cordinates).toEqual(boxMap[boxIndex]);
    });
  })
});
