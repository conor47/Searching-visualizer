export const generateRand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const generateArray = (size) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(generateRand(5, 500));
  }
  return arr;
};

export const successPass = (array, speed) => {
  console.log('success');
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      array[i].style.backgroundColor = '#48c9b0';
    }, i * 10);
  }
};

export const resetColor = (array) => {
  for (let bar of array) {
    bar.style.backgroundColor = 'white';
  }
};
