import React from 'react';
import { useNavbarContext } from '../Context/NavbarContext';
import { useSearchingContext } from '../Context/SearchingContext';
import {
  runAlgorithm,
  cleanGrid,
  clearWalls,
} from '../Ulilities/gridFunctions';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { openSubmenu, closeSubmenu } = useNavbarContext();
  const { grid, searchingAlgorithm, startNode, endNode, updateGrid, speed } =
    useSearchingContext();
  const path = useLocation().pathname;

  const renderLink = () => {
    if (path.substring(1) === 'searching') {
      return <Link to="/sorting">Sorting</Link>;
    } else {
      return <Link to="/searching">Searching</Link>;
    }
  };

  const startRunning = () => {
    if (!searchingAlgorithm) {
      return;
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
      <div className="nav-center">
        {renderLink()}
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
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
      <button className="btn" onClick={() => startRunning()}>
        Run
      </button>
      <button className="btn" onClick={() => clearWalls(grid, updateGrid)}>
        Clear
      </button>
    </nav>
  );
};

export default Navbar;
