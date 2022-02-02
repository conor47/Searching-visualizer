import React, { useState, useEffect, useRef } from 'react';
import { useSortingContext } from '../Context/SortingContext';
import runBubbleSort from '../Algorithms/SortingRunners/runBubbleSort';
import runQuickSort from '../Algorithms/SortingRunners/runQuickSort';
import runInsertionSort from '../Algorithms/SortingRunners/runInsertionSort';
import runMergeSort from '../Algorithms/SortingRunners/runMergeSort';
import runHeapSort from '../Algorithms/SortingRunners/runHeapSort';
import { useNavbarContext } from '../Context/NavbarContext';
import { resetColor } from '../Ulilities/arrayFunctions';
import Navbar from './Navbar';
import Submenu from './SubMenu';

const SortingVisualizer = () => {
  const { array, newArray, running, setRunning, success, setSuccess } =
    useSortingContext();
  const [speedSlider, setSpeedSlider] = useState(-10);
  const [sizeSlider, setSizeSlider] = useState(155);
  const [arraySize, setArraySize] = useState(155);
  const [sortingSpeed, setSortingSpeed] = useState(-10);
  const [barWidth, setBarWidth] = useState('1px');
  const { closeSubmenu } = useNavbarContext();
  const containerRef = useRef(null);
  const [arrayBars, setArrayBars] = useState(
    document.getElementsByClassName('array-bar')
  );
  const viewportWidth = document.documentElement.clientWidth - 100;

  useEffect(() => {
    newArray(arraySize);
    setArrayBars(document.getElementsByClassName('array-bar'));
    resetColor(arrayBars);
    // eslint-disable-next-line
  }, [arraySize]);

  useEffect(() => {
    let width = Math.floor(viewportWidth / arraySize) - 5;
    if (width === 0) {
      width = 1;
    }
    setBarWidth(`${width}px`);
    // eslint-disable-next-line
  }, [arraySize]);

  const createNewArray = () => {
    newArray(arraySize);
    resetColor(arrayBars);
  };

  const changeArraySize = (e) => {
    setSizeSlider(e.target.value);
    setArraySize(e.target.value);
  };

  const changeSortingSpeed = (e) => {
    setSpeedSlider(e.target.value);
    setSortingSpeed(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Submenu />
      <div className="center" onMouseEnter={() => closeSubmenu()}>
        <div className="array-container" ref={containerRef}>
          {array.map((val, idx) => {
            return (
              <div
                key={idx}
                className="array-bar"
                style={{ height: `${val}px`, width: `${barWidth}` }}
              ></div>
            );
          })}
        </div>
        <div className="controls">
          <div className="slider-container">
            <div className="input">
              <label htmlFor="sortingSpeed">Speed</label>
              <input
                type="range"
                id="sortingSpeed"
                min={-20}
                max={-1}
                value={speedSlider}
                className="slider"
                onChange={(e) => changeSortingSpeed(e)}
              />
            </div>
            <div className="input">
              <label htmlFor="arraySize">Size</label>
              <input
                type="range"
                id="arraySize"
                min={80}
                max={230}
                value={sizeSlider}
                className="slider"
                onChange={(e) => changeArraySize(e)}
              />
            </div>
          </div>
          <div className="buttons">
            <button
              className="new-array-button"
              // disabled={running}
              onClick={() => createNewArray()}
              disabled={running ? 'disabled' : null}
            >
              Generate New Array
            </button>
            <button
              className="new-array-button"
              onClick={() =>
                runMergeSort(
                  array,
                  arrayBars,
                  -sortingSpeed,
                  setRunning,
                  setSuccess
                )
              }
              disabled={running ? 'disabled' : ''}
            >
              Merge Sort
            </button>
            <button
              className="new-array-button"
              onClick={() =>
                runBubbleSort(
                  array,
                  arrayBars,
                  -sortingSpeed,
                  setRunning,
                  setSuccess
                )
              }
              disabled={running ? 'disabled' : null}
            >
              Bubble Sort
            </button>
            <button
              className="new-array-button"
              onClick={() =>
                runInsertionSort(
                  array,
                  arrayBars,
                  -sortingSpeed,
                  setRunning,
                  setSuccess
                )
              }
              disabled={running ? 'disabled' : null}
            >
              Insertion Sort
            </button>
            <button
              className="new-array-button"
              onClick={() =>
                runQuickSort(
                  array,
                  arrayBars,
                  -sortingSpeed,
                  setRunning,
                  setSuccess
                )
              }
              disabled={running ? 'disabled' : null}
            >
              Quick Sort
            </button>
            <button
              className="new-array-button"
              onClick={() => {
                if (success) {
                  createNewArray();
                }
                runHeapSort(
                  array,
                  arrayBars,
                  -sortingSpeed,
                  setRunning,
                  setSuccess
                );
              }}
              disabled={running ? 'disabled' : null}
            >
              Heap Sort
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingVisualizer;
