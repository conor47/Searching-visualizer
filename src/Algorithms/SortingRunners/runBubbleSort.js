import bubbleSort from '../algorithms/bubbleSort';

const runBubbleSort = (array, arrayBars, sortingSpeed, setRunning) => {
  const animations = bubbleSort(array)[0];
  setRunning(true);
  for (let i = 0; i < animations.length; i++) {
    const { indices, color, swap } = animations[i];
    let bar1 = arrayBars[indices[0]];
    let bar2 = arrayBars[indices[1]];
    if (!swap) {
      setTimeout(() => {
        bar1.style.backgroundColor = color;
        bar2.style.backgroundColor = color;
      }, i * sortingSpeed);
    } else {
      setTimeout(() => {
        let temp = bar1.style.height;
        console.log(temp);
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;
        bar1.style.backgroundColor = color;
        bar2.style.backgroundColor = color;
      }, i * sortingSpeed);
    }
  }
  setTimeout(() => {
    setRunning(false);
  }, animations.length * sortingSpeed);
};

export default runBubbleSort;
