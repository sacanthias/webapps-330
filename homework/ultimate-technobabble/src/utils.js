/**
 * Gets a random entry from an array.
 * @param {Array} array - a valid array.
 * @returns - returns a random element within the given array.
 */
export const getRandomWord = (array) => array[Math.floor(Math.random() * array.length)]