// importing helper function getRandomWord
import { getRandomWord } from "./utils.js";

// creating word arrays to be used in getWords
let words1, words2, words3;

// assigning dynamic page element to global variables
const outputElement = document.querySelector("#output");
const oneBabble = document.querySelector("#gen-1-btn");
const fiveBabble = document.querySelector("#gen-5-btn");

/**
 * Loads and inserts technobabble arrays from an external JSON file.
 */
const getWords = () =>{
	const url = "data/babble-data.json";
    const xhr = new XMLHttpRequest();

	xhr.onload = (e) =>{
		const data = JSON.parse(e.target.responseText);

		if(!data){
			console.log("JSON is null!");
			return;
		}

        words1 = data["words1"];
		words2 = data["words2"];
		words3 = data["words3"];

		console.log(words1[1]);
		
		outputElement.innerHTML = getTechnobabble(1);
	}

	xhr.onerror = e => console.log(`In onerror - HTTP status code = ${e.target.status}`);
	xhr.open('GET', url);
	xhr.send();
	console.log(`Ran load - HTTP Status Code = ${xhr.status}`);
}


/** Generates num lines of random technobabble within separate <p> elements.
* @param {number} num - the number of desired lines
* @returns  returns a string comprised of three-word technobabbles within separate <p> elements.
*/
const getTechnobabble = (num) =>{
	let babble = "";
	for (let i = 0; i < num; i++) {
		babble += `<p> ${getRandomWord(words1)} ${getRandomWord(words2)} ${getRandomWord(words3)} </p>`;
	}
	return babble;
}

/**
 * Initializes the page.
 */
const init = () => {
	getWords();

	// generates technobabble and inserts it into the inner HTML of the output element
	oneBabble.onclick = (e) => {
		outputElement.innerHTML = getTechnobabble(1);
	}
	fiveBabble.onclick = (e) => {
		outputElement.innerHTML = getTechnobabble(5);
	}
}

window.onload = init;