import React from 'react';
import { useNavbarContext } from '../Context/NavbarContext';
import { useSearchingContext } from '../Context/SearchingContext';
import {
  runAlgorithm,
  cleanGrid,
  clearWalls,
} from '../Ulilities/gridFunctions';

const Navbar = () => {
  const { openSubmenu, closeSubmenu } = useNavbarContext();
  const { grid, searchingAlgorithm, startNode, endNode, updateGrid } =
    useSearchingContext();

  const startRunning = () => {
    if (!searchingAlgorithm) {
      return;
    }
    const { algorithm, shortestPath, name } = searchingAlgorithm;
    cleanGrid(grid);
    runAlgorithm(name, grid, algorithm, startNode, endNode, shortestPath);
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
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              algorithms
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
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
