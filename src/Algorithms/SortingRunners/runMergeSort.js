import { getMergeSortAnimations } from '../Sorting/mergeSort';
import { successPass } from '../../Ulilities/arrayFunctions';

const runMergeSort = (array, arrayBars, sortingSpeed, setRunning) => {
  const animations = getMergeSortAnimations(array.slice());
  setRunning(true);
  for (let i = 0; i < animations.length; i++) {
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? 'red' : 'white';
      setTimeout(() => {
        if (i === animations.length - 1) {
          setRunning(false);
          successPass(arrayBars, sortingSpeed);
        }
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * sortingSpeed);
    } else {
      setTimeout(() => {
        if (i === animations.length - 1) {
          setRunning(false);
          successPass(arrayBars, sortingSpeed);
        }
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * sortingSpeed);
    }
  }
};

export default runMergeSort;
