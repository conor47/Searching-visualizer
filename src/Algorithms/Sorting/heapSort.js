const buildMaxHeap = (arr, animations) => {
  // Get index of the middle element
  let i = Math.floor(arr.length / 2 - 1);

  // Build a max heap out of
  // All array elements passed in
  while (i >= 0) {
    heapify(arr, i, arr.length, animations);
    i -= 1;
  }
};

const heapify = (heap, i, max, animations) => {
  let index;
  let leftChild;
  let rightChild;

  while (i < max) {
    index = i;

    // Get the left child index
    // Using the known formula
    leftChild = 2 * i + 1;

    // Get the right child index
    // Using the known formula
    rightChild = leftChild + 1;

    // If the left child is not last element
    // And its value is bigger
    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    // If the right child is not last element
    // And its value is bigger
    if (rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;
    }

    // If none of the above conditions is true
    // Just return
    if (index === i) {
      return;
    }

    // Else swap elements
    animations.push({ indices: [i, index], color: 'red', swap: true });
    animations.push({ indices: [i, index], color: 'white', swap: false });
    swap(heap, i, index);

    // Continue by using the swapped index
    i = index;
  }
};

const swap = (arr, firstItemIndex, lastItemIndex) => {
  const temp = arr[firstItemIndex];

  // Swap first and last items in the array
  arr[firstItemIndex] = arr[lastItemIndex];
  arr[lastItemIndex] = temp;
};

export const heapSort = (arr) => {
  // Build max heap
  const animations = [];
  buildMaxHeap(arr, animations);

  // Get the index of the last element
  let lastElement = arr.length - 1;

  // Continue heap sorting until we have
  // One element left
  while (lastElement > 0) {
    animations.push({ indices: [0, lastElement], color: 'red', swap: true });
    animations.push({ indices: [0, lastElement], color: 'white', swap: false });
    swap(arr, 0, lastElement);
    heapify(arr, 0, lastElement, animations);
    lastElement -= 1;
  }

  // Return sorted array
  return animations;
};
