// function for generating basic grid

export const generateGrid = () => {
  let grid = [];
  for (let i = 0; i < 21; i++) {
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

// export const updateWall = (row, col,start,end,grid) => {
//   if (
//     (row === start[0] && col === start[1]) ||
//     (row === end[0] && col === end[1])
//   ) {
//     return;
//   }
//   const node = grid[row][col];
//   const newGrid = grid.slice();
//   const newNode = { ...node, isWall: !node.isWall };
//   newGrid[row][col] = newNode;
//   setGrid(newGrid);
// };
