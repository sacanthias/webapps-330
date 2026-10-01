const getByte = () => 55 + Math.round(Math.random() * 200)
export const getRandomColor = () => `rgba( ${getByte()}, ${getByte()}, ${getByte()}, .8)`

// gets a random int between a min and max
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min