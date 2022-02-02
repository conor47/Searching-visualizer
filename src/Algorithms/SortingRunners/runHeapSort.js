import { heapSort } from '../Sorting/heapSort';
import { successPass } from '../../Ulilities/arrayFunctions';

const runHeapSort = (
  array,
  arrayBars,
  sortingSpeed,
  setRunning,
  setSuccess
) => {
  const animations = heapSort(array.slice());
  setRunning(true);
  setSuccess(false);
  for (let i = 0; i < animations.length; i++) {
    const { indices, swap, color } = animations[i];
    let bar1 = arrayBars[indices[0]];
    let bar2 = arrayBars[indices[1]];
    if (!swap) {
      setTimeout(() => {
        if (i === animations.length - 1) {
          successPass(arrayBars, sortingSpeed, setSuccess, setRunning);
        }
        bar1.style.backgroundColor = color;
        bar2.style.backgroundColor = color;
      }, i * sortingSpeed);
    } else {
      setTimeout(() => {
        [array[indices[0]], array[indices[1]]] = [
          array[indices[1]],
          array[indices[0]],
        ];
        if (i === animations.length - 1) {
          successPass(arrayBars, sortingSpeed, setSuccess, setRunning);
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

export default runHeapSort;
