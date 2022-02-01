import insertionSort from '../Sorting/insertionSort';
import { successPass } from '../../Ulilities/arrayFunctions';

const runInsertionSort = (array, arrayBars, sortingSpeed, setRunning) => {
  const animations = insertionSort(array)[0];
  setRunning(true);
  for (let i = 0; i < animations.length; i++) {
    const { indices, color, swap } = animations[i];
    let bar1 = arrayBars[indices[0]];
    let bar2 = arrayBars[indices[1]];
    if (!swap) {
      setTimeout(() => {
        if (i === animations.length - 1) {
          setRunning(false);
          successPass(arrayBars, sortingSpeed);
        }
        bar1.style.backgroundColor = color;
        bar2.style.backgroundColor = color;
      }, i * sortingSpeed);
    } else {
      setTimeout(() => {
        if (i === animations.length - 1) {
          setRunning(false);
          successPass(arrayBars, sortingSpeed);
        }
        bar1.style.backgroundColor = color;
        bar2.style.backgroundColor = color;
        let temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;
      }, i * sortingSpeed);
    }
  }
};

export default runInsertionSort;
