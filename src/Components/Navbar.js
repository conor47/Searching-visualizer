import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useNavbarContext } from '../Context/NavbarContext';
import { useSearchingContext } from '../Context/SearchingContext';
import {
  runAlgorithm,
  cleanGrid,
  clearWalls,
} from '../Ulilities/gridFunctions';

const Navbar = () => {
  const { openSubmenu, closeSubmenu } = useNavbarContext();
  const { grid, searchingAlgorithm, startNode, endNode, updateGrid, speed } =
    useSearchingContext();
  const path = useLocation().pathname;
  const algoRef = useRef(null);

  const renderLink = () => {
    if (path.substring(1) === '') {
      return (
        <Link to="/sorting" className="nav-left">
          Sorting
        </Link>
      );
    } else {
      return (
        <Link to="/" className="nav-left">
          Searching
        </Link>
      );
    }
  };

  const startRunning = () => {
    if (!searchingAlgorithm) {
      setTimeout(() => {
        algoRef.current.style.color = 'red';
        setTimeout(() => {
          algoRef.current.style.color = 'white';
        }, 1000);
      }, 1);
    }
    const { algorithm, shortestPath, name } = searchingAlgorithm;
    cleanGrid(grid);
    runAlgorithm(
      name,
      grid,
      algorithm,
      startNode,
      endNode,
      shortestPath,
      speed
    );
  };

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      {renderLink()}
      {path === '/' && (
        <div className="nav-center">
          <ul className="nav-links">
            <li>
              <button
                ref={algoRef}
                className="link-btn"
                onMouseOver={displaySubmenu}
              >
                algorithms
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                speed
              </button>
            </li>
          </ul>
        </div>
      )}
      {path === '/' && (
        <div className="nav-right">
          <button className="btn" onClick={() => startRunning()}>
            Run
          </button>
          <button className="btn" onClick={() => clearWalls(grid, updateGrid)}>
            Clear
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
