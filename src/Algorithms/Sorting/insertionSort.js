const insertionSort = function (arr) {
  let temp = arr.slice();
  let animations = [];
  for (let i = 1; i < temp.length; i++) {
    let j = i;
    while (j > 0 && temp[j] < temp[j - 1]) {
      animations.push({ indices: [j, j - 1], color: 'red', swap: false });
      animations.push({ indices: [j, j - 1], color: 'white', swap: true });
      [temp[j], temp[j - 1]] = [temp[j - 1], temp[j]];
      j -= 1;
    }
  }
  return [animations, arr];
};

export default insertionSort;
