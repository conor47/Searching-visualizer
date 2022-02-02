import { getMergeSortAnimations } from '../Sorting/mergeSort';
import { successPass } from '../../Ulilities/arrayFunctions';

const runMergeSort = (
  array,
  arrayBars,
  sortingSpeed,
  setRunning,
  setSuccess
) => {
  const animations = getMergeSortAnimations(array.slice());
  setRunning(true);
  setSuccess(false);
  for (let i = 0; i < animations.length; i++) {
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? 'red' : 'white';
      setTimeout(() => {
        if (i === animations.length - 1) {
          successPass(arrayBars, sortingSpeed, setSuccess, setRunning);
        }
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * sortingSpeed);
    } else {
      setTimeout(() => {
        if (i === animations.length - 1) {
          successPass(arrayBars, sortingSpeed, setSuccess, setRunning);
        }
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * sortingSpeed);
    }
  }
};

export default runMergeSort;
