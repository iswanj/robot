const itemsPerRow = 5;
const miniumRow = 1;
export const getPosition = (x, y) => {
  return {
    top: 500 - (y * 100),
    right: 500 - (x * 100)
  };
};

export const caluclateXValue = index => {
  const value = index % itemsPerRow;
  if (value === 0) {
    return 1;
  }
  return Math.abs(value - itemsPerRow -1); // reduce 1 because of box numbering start from 1;
};

export const getTeleportationCordinates = index => {
  return {
    x: caluclateXValue(index), 
    y: Math.ceil(index/itemsPerRow)
  }
};

export const getCordinates = (x, y, command) => {
  if (command === 'up' && y < itemsPerRow) {
    return { x, y: y + 1}
  } else if (command === 'down' && y > miniumRow) {
    return { x, y: y - 1}
  } else if (command === 'left' && x > miniumRow) {
    return { x: x - 1, y}
  } else if (command === 'right' && x < itemsPerRow) {
    return { x: x + 1, y}
  } else {
    return { x, y }
  }
};