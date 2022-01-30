const bubbleSort = function (arr) {
  let temp = arr.slice();
  let animations = [];
  let noSwaps;
  for (let i = temp.length - 1; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      animations.push({ indices: [j, j + 1], color: 'red', swap: false });
      if (temp[j] > temp[j + 1]) {
        noSwaps = false;
        animations.push({ indices: [j, j + 1], color: '#64ffda', swap: true });
        [temp[j], temp[j + 1]] = [temp[j + 1], temp[j]];
      }
      animations.push({ indices: [j, j + 1], color: '#64ffda', swap: false });
    }
    if (noSwaps) {
      break;
    }
  }
  return [animations, arr];
};

export default bubbleSort;
