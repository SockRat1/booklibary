export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomLetter = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[getRandomInt(0, letters.length - 1)];
};
