// helper function to get a random word from a selected array
export const getRandomWord = (array) => {
	let randNum = Math.random();
	return array[Math.floor(randNum * (array.length - 1))];
}