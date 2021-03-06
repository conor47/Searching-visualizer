import React, { useState, useRef, useEffect } from 'react';
import { useNavbarContext } from '../Context/NavbarContext';
import { useSearchingContext } from '../Context/SearchingContext';
import { randomTerrain } from '../Algorithms/Maze/randomTerrain';
import { recursiveDivisionMaze } from '../Algorithms/Maze/mazeGenerator';
import {
  terrainGenerator,
  resetGrid,
  clearWalls,
  clearPath,
} from '../Ulilities/gridFunctions';

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useNavbarContext();
  const {
    setSearchingAlgorithm,
    setSpeed,
    updateGrid,
    grid,
    startNode,
    endNode,
  } = useSearchingContext();

  const handleUpdate = (e, menu) => {
    if (menu === 'algos') {
      setSearchingAlgorithm(e.target.textContent);
    } else if (menu === 'speed') {
      if (e.target.textContent === 'fast') {
        setSpeed(3);
      } else if (e.target.textContent === 'medium') {
        setSpeed(10);
      } else {
        setSpeed(20);
      }
    } else if (menu === 'terrain') {
      if (e.target.textContent === 'random') {
        terrainGenerator(
          grid,
          startNode,
          endNode,
          randomTerrain,
          updateGrid,
          e.target.textContent
        );
      } else {
        terrainGenerator(
          grid,
          startNode,
          endNode,
          recursiveDivisionMaze,
          updateGrid,
          e.target.textContent
        );
      }
    } else if (menu === 'controls') {
      if (e.target.textContent === 'clear all') {
        resetGrid(updateGrid, grid);
      } else if (e.target.textContent === 'clear walls') {
        clearWalls(updateGrid, grid);
      } else {
        clearPath(updateGrid, grid);
      }
    }
  };

  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length > 3) {
      setColumns('col-4');
    }
  }, [page, location, links]);
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <section>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { label, menu } = link;
            return (
              <button key={index} onClick={(e) => handleUpdate(e, menu)}>
                {label}
              </button>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
