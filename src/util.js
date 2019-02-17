export const getPosition = (x, y) => {
  return {
    top: 500 - (y * 100),
    right: 500 - (x * 100)
  };
};

export const caluclateXValue = index => {
  const value = index % 5 -6;
  if (value === -6) {
    return 1;
  }
  return Math.abs(value);
};

export const getTeleportationCordinates = index => {
  return {
    x: caluclateXValue(index), 
    y: Math.ceil(index/5)
  }
};

export const getCordinates = (x, y, command) => {
  switch (command) {
    case 'up':
      if (y < 5) {
        return { x, y: y + 1}
      }
      return { x, y }
    case 'down':
      if (y > 1) {
        return { x, y: y - 1}
      }
      return { x, y }
    case 'left':
      if (x > 1) {
        return { x: x - 1, y}
      }
      return { x, y }
    case 'right':
      if (x < 5) {
        return { x: x + 1, y}
      }
      return { x, y }
    default:
      return { x, y }
  }
};