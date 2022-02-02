export const recursiveDivisionMaze = (
  wallsToAnimate,
  board,
  start,
  end,
  rowStart,
  rowEnd,
  colStart,
  colEnd,
  orientation,
  surroundingWalls,
  type
) => {
  if (rowEnd < rowStart || colEnd < colStart) {
    return;
  }
  if (!surroundingWalls) {
    let relevant = [start, end];
    board.forEach((node) => {
      if (!relevant.includes(node)) {
        let row = node.row;
        let col = node.col;
        if (
          row === 0 ||
          col === 0 ||
          row === board.length - 1 ||
          col === board[0].length - 1
        ) {
          // let htmlNode = document.getElementById(`${row}-${col}`);
          wallsToAnimate.push(node);
          if (type === 'wall') {
            node.isWall = true;
          }
        }
      }
    });
    surroundingWalls = true;
  }

  if (orientation === 'horizontal') {
    let possibleRows = [];
    for (let number = rowStart; number <= rowEnd; number += 2) {
      possibleRows.push(number);
    }
    let possibleCols = [];
    for (let number = colStart - 1; number <= colEnd + 1; number += 2) {
      possibleCols.push(number);
    }
    let randomRowIndex = Math.floor(Math.random() * possibleRows.length);
    let randomColIndex = Math.floor(Math.random() * possibleCols.length);
    let currentRow = possibleRows[randomRowIndex];
    let colRandom = possibleCols[randomColIndex];
    board.forEach((node) => {
      let row = node.row;
      let col = node.col;
      if (
        row === currentRow &&
        col !== colRandom &&
        col >= colStart - 1 &&
        col <= colEnd + 1
      ) {
        // let htmlNode = document.getElementById(`${row}-${col}`);
        if (!node.isStart && !node.isEnd) {
          wallsToAnimate.push(node);
          if (type === 'wall') {
            node.isWall = true;
          }
        }
      }
    });
    if (currentRow - 2 - rowStart > colEnd - colStart) {
      recursiveDivisionMaze(
        wallsToAnimate,
        board,
        start,
        end,
        rowStart,
        currentRow - 2,
        colStart,
        colEnd,
        orientation,
        surroundingWalls,
        type
      );
    } else {
      recursiveDivisionMaze(
        wallsToAnimate,
        board,
        start,
        end,
        rowStart,
        currentRow - 2,
        colStart,
        colEnd,
        'vertical',
        surroundingWalls,
        type
      );
    }
    if (rowEnd - (currentRow + 2) > colEnd - colStart) {
      recursiveDivisionMaze(
        wallsToAnimate,
        board,
        start,
        end,
        currentRow + 2,
        rowEnd,
        colStart,
        colEnd,
        orientation,
        surroundingWalls,
        type
      );
    } else {
      recursiveDivisionMaze(
        wallsToAnimate,
        board,
        start,
        end,
        currentRow + 2,
        rowEnd,
        colStart,
        colEnd,
        'vertical',
        surroundingWalls,
        type
      );
    }
  } else {
    let possibleCols = [];
    for (let number = colStart; number <= colEnd; number += 2) {
      possibleCols.push(number);
    }
    let possibleRows = [];
    for (let number = rowStart - 1; number <= rowEnd + 1; number += 2) {
      possibleRows.push(number);
    }
    let randomColIndex = Math.floor(Math.random() * possibleCols.length);
    let randomRowIndex = Math.floor(Math.random() * possibleRows.length);
    let currentCol = possibleCols[randomColIndex];
    let rowRandom = possibleRows[randomRowIndex];
    board.forEach((node) => {
      let row = node.row;
      let col = node.col;
      if (
        col === currentCol &&
        row !== rowRandom &&
        row >= rowStart - 1 &&
        row <= rowEnd + 1
      ) {
        // let htmlNode = Document.getElementById(`${row}-${col}`);
        if (!node.isStart && !node.isEnd) {
          wallsToAnimate.push(node);
          if (type === 'wall') {
            node.isWall = true;
          }
        }
      }
    });
    if (rowEnd - rowStart > currentCol - 2 - colStart) {
      recursiveDivisionMaze(
        wallsToAnimate,
        board,
        start,
        end,
        rowStart,
        rowEnd,
        colStart,
        currentCol - 2,
        'horizontal',
        surroundingWalls,
        type
      );
    } else {
      recursiveDivisionMaze(
        wallsToAnimate,

        board,
        rowStart,
        rowEnd,
        colStart,
        currentCol - 2,
        orientation,
        surroundingWalls,
        type
      );
    }
    if (rowEnd - rowStart > colEnd - (currentCol + 2)) {
      recursiveDivisionMaze(
        wallsToAnimate,
        board,
        start,
        end,
        rowStart,
        rowEnd,
        currentCol + 2,
        colEnd,
        'horizontal',
        surroundingWalls,
        type
      );
    } else {
      recursiveDivisionMaze(
        wallsToAnimate,
        board,
        start,
        end,
        rowStart,
        rowEnd,
        currentCol + 2,
        colEnd,
        orientation,
        surroundingWalls,
        type
      );
    }
  }
};
