// function for generating basic grid

export const generateGrid = () => {
  let grid = [];
  for (let i = 0; i < 20; i++) {
    let row = [];
    for (let j = 0; j < 50; j++) {
      row.push(createNode(i, j));
    }
    grid.push(row);
  }
  return grid;
};

// function for creating a node object

export const createNode = (row, col) => {
  return {
    row,
    col,
    distance: Infinity,
    isEnd: row === 7 && col === 40,
    isStart: row === 7 && col === 10,
    isVisited: false,
    previousNode: null,
    isWall: false,
    gCost: Infinity,
    hCost: Infinity,
    fCost: Infinity,
  };
};
