const selectionSort = function (arr) {
  let temp = arr.slice();
  let animations = [];
  for (let i = 0; i < temp.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[j] < temp[min]) {
        animations.push({ indices: [j, min], color: 'red', swap: false });
        animations.push({ indices: [j, min], color: 'white', swap: false });
        min = j;
      }
    }
    if (min !== i) {
      [temp[i], temp[min]] = [temp[min], temp[i]];
      animations.push({ indices: [i, min], color: 'white', swap: true });
    }
  }
  return [animations, arr];
};

export default selectionSort;
