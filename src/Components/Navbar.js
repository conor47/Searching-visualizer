import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useNavbarContext } from '../Context/NavbarContext';
import { useSearchingContext } from '../Context/SearchingContext';
import { runAlgorithm } from '../Ulilities/gridFunctions';

const Navbar = () => {
  const { openSubmenu, closeSubmenu } = useNavbarContext();
  const {
    grid,
    searchingAlgorithm,
    startNode,
    endNode,
    speed,
    setRunning,
    updateGrid,
    isRunning,
    setSuccess,
  } = useSearchingContext();
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
        algoRef.current.style.color = '#F64C72';
        setTimeout(() => {
          algoRef.current.style.color = 'white';
        }, 1000);
      }, 1);
      return;
    } else if (isRunning) {
      return;
    }

    const { algorithm, shortestPath, name } = searchingAlgorithm;
    runAlgorithm(
      name,
      grid,
      algorithm,
      startNode,
      endNode,
      shortestPath,
      speed,
      setRunning,
      setSuccess,
      updateGrid
    );
  };

  const displaySubmenu = (e) => {
    const offSet = window.scrollY;
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + offSet;
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
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                terrain
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                clear
              </button>
            </li>
          </ul>
        </div>
      )}
      {path === '/' && (
        <div className="nav-right">
          <button
            disabled={isRunning ? 'disabled' : ''}
            className="btn"
            onClick={() => startRunning()}
          >
            Run
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
