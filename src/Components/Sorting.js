import React, { useState, useEffect, useRef } from 'react';
import './sortingvisualizer.css';
import { useStateContext } from '../Context/SortingContext';
import runBubbleSort from '../Algorithms/SortingRunners/runBubbleSort';
import runQuickSort from '../Algorithms/SortingRunners/runQuickSort';
import runSelectionSort from '../Algorithms/SortingRunners/runSelectionSort';
import runInsertionSort from '../Algorithms/SortingRunners/runInsertionSort';
import runMergeSort from '../Algorithms/SortingRunners/runMergeSort';

const SortingVisualizer = () => {
  const { array, newArray, running, setRunning } = useStateContext();
  const [speedSlider, setSpeedSlider] = useState(-10);
  const [sizeSlider, setSizeSlider] = useState(155);
  const [arraySize, setArraySize] = useState(155);
  const [sortingSpeed, setSortingSpeed] = useState(-10);
  const [barWidth, setBarWidth] = useState('1px');
  const containerRef = useRef(null);
  const [arrayBars, setArrayBars] = useState(
    document.getElementsByClassName('array-bar')
  );
  const viewportWidth = document.documentElement.clientWidth - 100;

  useEffect(() => {
    newArray(arraySize);
    setArrayBars(document.getElementsByClassName('array-bar'));
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
      <div className="center">
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
            onClick={() => newArray(arraySize)}
            disabled={running ? 'disabled' : null}
          >
            Generate New Array
          </button>
          <button
            className="new-array-button"
            onClick={() =>
              runMergeSort(array, arrayBars, -sortingSpeed, setRunning)
            }
            disabled={running ? 'disabled' : ''}
          >
            Merge Sort
          </button>
          <button
            className="new-array-button"
            onClick={() =>
              runBubbleSort(array, arrayBars, -sortingSpeed, setRunning)
            }
            disabled={running ? 'disabled' : null}
          >
            Bubble Sort
          </button>
          <button
            className="new-array-button"
            onClick={() =>
              runInsertionSort(array, arrayBars, -sortingSpeed, setRunning)
            }
            disabled={running ? 'disabled' : null}
          >
            Insertion Sort
          </button>
          <button
            className="new-array-button"
            onClick={() =>
              runSelectionSort(array, arrayBars, -sortingSpeed, setRunning)
            }
            disabled={running ? 'disabled' : null}
          >
            Selection Sort
          </button>
          <button
            className="new-array-button"
            onClick={() =>
              runQuickSort(array, arrayBars, -sortingSpeed, setRunning)
            }
            disabled={running ? 'disabled' : null}
          >
            Quick Sort
          </button>
        </div>
      </div>
    </>
  );
};

export default SortingVisualizer;
