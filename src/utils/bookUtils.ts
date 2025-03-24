export const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomLetter = (): string => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[getRandomInt(0, letters.length - 1)];
};
