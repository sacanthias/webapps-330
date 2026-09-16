// importing helper functions
import getRandomWord from "utils.js";

const words1 = ;

const words2 = ["Propulsion", "Dissipation", "Sensor", "Improbability", "Buffer", "Graviton", "Replicator", "Matter", "Anti-matter", "Organic", "Power", "Silicon", "Holographic", "Transient", "Integrity", "Plasma", "Fusion", "Control", "Access", "Auto", "Destruct", "Isolinear", "Transwarp", "Energy", "Medical", "Environmental", "Coil", "Impulse", "Warp", "Phaser", "Operating", "Photon", "Deflector", "Integrity", "Control", "Bridge", "Dampening", "Display", "Beam", "Quantum", "Baseline", "Input"];

const words3 = ["Chamber", "Interface", "Coil", "Polymer", "Biosphere", "Platform", "Thruster", "Deflector", "Replicator", "Tricorder", "Operation", "Array", "Matrix", "Grid", "Sensor", "Mode", "Panel", "Storage", "Conduit", "Pod", "Hatch", "Regulator", "Display", "Inverter", "Spectrum", "Generator", "Cloud", "Field", "Terminal", "Module", "Procedure", "System", "Diagnostic", "Device", "Beam", "Probe", "Bank", "Tie-In", "Facility", "Bay", "Indicator", "Cell"];

const getTechnobabble = (num) =>{
	let babble = "";
	for (let i = 0; i < num; i++) {
		babble += `<p> ${getRandomWord(words1)} ${getRandomWord(words2)} ${getRandomWord(words3)} </p>`;
	}
	return babble;
}

const init = () => {
	// assigning dynamic page element to global variables
	let outputElement = document.querySelector("#output");
	let oneBabble = document.querySelector("#gen-1-btn");
	let fiveBabble = document.querySelector("#gen-5-btn");

	outputElement.innerHTML = getTechnobabble(1);

	// generates technobabble and inserts it into the inner HTML of the output element
	oneBabble.onclick = (e) => {
		outputElement.innerHTML = getTechnobabble(1);
	}
	fiveBabble.onclick = (e) => {
		outputElement.innerHTML = getTechnobabble(5);
	}
}

window.onload = init;