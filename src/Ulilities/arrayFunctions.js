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
