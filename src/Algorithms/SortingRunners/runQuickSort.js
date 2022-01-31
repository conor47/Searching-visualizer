import quickSortIterative from '../Sorting/quickSort';

const runQuickSort = (array, arrayBars, sortingSpeed, setRunning) => {
  const animations = quickSortIterative(array.slice(), 0, array.length - 1);
  setRunning(true);
  for (let i = 0; i < animations.length; i++) {
    const { indices, swap, color } = animations[i];
    let bar1 = arrayBars[indices[0]];
    let bar2 = arrayBars[indices[1]];
    if (!swap) {
      setTimeout(() => {
        bar1.style.backgroundColor = color;
        bar2.style.backgroundColor = color;
      }, i * sortingSpeed);
    } else {
      setTimeout(() => {
        bar1.style.backgroundColor = color;
        bar2.style.backgroundColor = color;
        let temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;
      }, i * sortingSpeed);
    }
  }
  setTimeout(() => {
    setRunning(false);
  }, animations.length * sortingSpeed);
};

export default runQuickSort;
