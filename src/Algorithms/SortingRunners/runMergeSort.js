import { getMergeSortAnimations } from '../Sorting/mergeSort';

const runMergeSort = (array, arrayBars, sortingSpeed, setRunning) => {
  const animations = getMergeSortAnimations(array.slice());
  setRunning(true);
  for (let i = 0; i < animations.length; i++) {
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? 'red' : '#64ffda';
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * sortingSpeed);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * sortingSpeed);
    }
  }
  setTimeout(() => {
    setRunning(false);
  }, animations.length * sortingSpeed);
};

export default runMergeSort;
