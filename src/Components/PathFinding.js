import React, { useState, useEffect } from 'react';

import Node from './Node';
import { useNavbarContext } from '../Context/NavbarContext';
import { useSearchingContext } from '../Context/SearchingContext';
import {
  updateWall,
  animateInstantly,
  cleanGrid,
} from '../Ulilities/gridFunctions';
import information from '../Data/information';
import algoInformation from '../Data/algorithmInformatoin';
import Modal from '../Components/Modal';
import Navbar from './Navbar';
import Submenu from './SubMenu';

const PathFinding = () => {
  const [moveEnd, setMoveEnd] = useState(false);
  const [moveStart, setMoveStart] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [addWall, setAddWall] = useState(false);

  const {
    grid,
    updateGrid,
    setStartNode,
    setEndNode,
    startNode: start,
    endNode: end,
    searchingAlgorithm,
    isSuccessful,
    isRunning,
    modal,
  } = useSearchingContext();
  const { closeSubmenu } = useNavbarContext();

  useEffect(() => {
    document.getElementById('temp').ondragstart = function () {
      return false;
    };
  }, [grid]);

  const handleMouseDown = (row, col) => {
    if (row === start[0] && col === start[1]) {
      setMouseDown(true);
      setMoveStart(true);
      return;
    } else if (row === end[0] && col === end[1]) {
      setMouseDown(true);
      setMoveEnd(true);
      return;
    } else if (grid[row][col].isWall) {
      setMouseDown(true);
      updateWall(row, col, start, end, grid, updateGrid, addWall);
    } else {
      setMouseDown(true);
      setAddWall(true);
      updateWall(row, col, start, end, grid, updateGrid, addWall);
    }
  };

  const handleMouseUp = () => {
    setMouseDown(false);
    setMoveStart(false);
    setMoveEnd(false);
    setAddWall(false);
  };

  const handleMouseEnter = (row, col) => {
    if (mouseDown && moveStart && isSuccessful) {
      if (grid[row][col].isWall) {
        return;
      }
      moveStartNode(row, col);
      cleanGrid(grid, updateGrid);
      animateInstantly(
        searchingAlgorithm.name,
        grid,
        searchingAlgorithm.algorithm,
        start,
        end,
        searchingAlgorithm.shortestPath,
        updateGrid
      );
      return;
    } else if (mouseDown && moveStart) {
      moveStartNode(row, col);
      return;
    } else if (mouseDown && moveEnd) {
      if (grid[row][col].isWall) {
        return;
      }
      moveEndNode(row, col);
      if (isRunning || grid[row][col].isWall) {
        return;
      }
      if (isSuccessful) {
        cleanGrid(grid, updateGrid);
        animateInstantly(
          searchingAlgorithm.name,
          grid,
          searchingAlgorithm.algorithm,
          start,
          [row, col],
          searchingAlgorithm.shortestPath,
          updateGrid
        );
      }
      return;
    }

    if (mouseDown) {
      updateWall(row, col, start, end, grid, updateGrid, addWall);
    }
  };

  const moveStartNode = (row, col) => {
    const newGrid = grid.slice();

    let oldStart = grid[start[0]][start[1]];
    let updatedOld = { ...oldStart, isStart: false };
    newGrid[oldStart.row][oldStart.col] = updatedOld;

    let newStart = grid[row][col];
    let newUpdatedStart = { ...newStart, isStart: true };
    newGrid[row][col] = newUpdatedStart;

    setStartNode([row, col]);
    updateGrid(newGrid);
  };

  const moveEndNode = (row, col) => {
    const newGrid = grid.slice();

    let oldEnd = grid[end[0]][end[1]];
    let updatedOld = { ...oldEnd, isEnd: false };
    newGrid[oldEnd.row][oldEnd.col] = updatedOld;

    newGrid[row][col].isEnd = true;

    setEndNode([row, col]);
    updateGrid(newGrid);
  };

  return (
    <>
      <Navbar />
      <Submenu />
      {modal && <Modal />}
      <div onMouseOver={closeSubmenu} id="temp" className="wrapper">
        <div className="information-wrapper">
          <div className="information-general">
            {information.map((info, idx) => {
              const { text, icon } = info;
              return (
                <div key={idx} className="information-sub">
                  {icon}
                  <span>{text}</span>
                </div>
              );
            })}
          </div>
          <div className="information-algo">
            {searchingAlgorithm &&
              algoInformation.map((info, idx) => {
                const { name, text, complexity, url } = info;
                if (name === searchingAlgorithm.name) {
                  return (
                    <div className="information-sub" key={idx}>
                      <p className="information-span">{text}</p>
                      <p className="information-span">{complexity}</p>
                      <p className="information-span">
                        Learn more{' '}
                        <a
                          className="information-link"
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          here
                        </a>
                      </p>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
          </div>
        </div>

        <div className="grid">
          {grid &&
            grid.map((row, i) => {
              return (
                <div className="row" key={i}>
                  {row.map((node, j) => {
                    const {
                      row,
                      col,
                      isWall,
                      isEnd,
                      isStart,
                      isVisited,
                      previousNode,
                    } = grid[i][j];
                    return (
                      <Node
                        key={j}
                        row={row}
                        col={col}
                        isStart={isStart}
                        isEnd={isEnd}
                        isVisited={isVisited}
                        prevousNode={previousNode}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseDown={handleMouseDown}
                        handleMouseUp={handleMouseUp}
                        isWall={isWall}
                      />
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PathFinding;
