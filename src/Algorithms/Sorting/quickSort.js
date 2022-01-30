function partition(arr, low, high, animations) {
  let temp;
  let pivot = arr[high];

  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i++;

      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      animations.push({ indices: [i, j], color: 'red', swap: false });
      animations.push({ indices: [i, j], color: '#64ffda', swap: true });
    }
  }

  animations.push({ indices: [i + 1, high], color: '#64ffda', swap: true });
  temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}

function quickSortIterative(arr, l, h) {
  let animations = [];
  let stack = new Array(h - l + 1);
  stack.fill(0);

  let top = -1;

  stack[++top] = l;
  stack[++top] = h;

  while (top >= 0) {
    h = stack[top--];
    l = stack[top--];

    let p = partition(arr, l, h, animations);

    if (p - 1 > l) {
      stack[++top] = l;
      stack[++top] = p - 1;
    }

    if (p + 1 < h) {
      stack[++top] = p + 1;
      stack[++top] = h;
    }
  }
  return animations;
}

export default quickSortIterative;
