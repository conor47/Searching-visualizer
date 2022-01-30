import selectionSort from '../algorithms/selectionSort';

const runSelectionSort = (array, arrayBars, sortingSpeed, setRunning) => {
  const animations = selectionSort(array)[0];
  setRunning(true);
  for (let i = 0; i < animations.length; i++) {
    const { indices, color, swap } = animations[i];
    let bar1 = arrayBars[indices[0]];
    let bar2 = arrayBars[indices[1]];
    if (!swap) {
      setTimeout(() => {
        bar1.style.backgroundColor = color;
        bar2.style.backgroundColor = color;
        // let temp = bar1.style.height;
        // bar1.style.height = bar2.style.height;
        // bar2.style.height = temp;
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

export default runSelectionSort;
