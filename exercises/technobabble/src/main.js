let randScale = Math.random();

			window.onload = init;
		"use strict";
		
		const words1 = ["Acute", "Aft", "Anti-matter", "Bipolar", "Cargo", "Command", "Communication", "Computer", "Deuterium", "Dorsal", "Emergency", "Engineering", "Environmental", "Flight", "Fore", "Guidance", "Heat", "Impulse", "Increased", "Inertial", "Infinite", "Ionizing", "Isolinear", "Lateral", "Linear", "Matter", "Medical", "Navigational", "Optical", "Optimal", "Optional", "Personal", "Personnel", "Phased", "Reduced", "Science", "Ship's", "Shuttlecraft", "Structural", "Subspace", "Transporter", "Ventral"];
		
		const words2 = ["Propulsion", "Dissipation", "Sensor", "Improbability", "Buffer", "Graviton", "Replicator", "Matter", "Anti-matter", "Organic", "Power", "Silicon", "Holographic", "Transient", "Integrity", "Plasma", "Fusion", "Control", "Access", "Auto", "Destruct", "Isolinear", "Transwarp", "Energy", "Medical", "Environmental", "Coil", "Impulse", "Warp", "Phaser", "Operating", "Photon", "Deflector", "Integrity", "Control", "Bridge", "Dampening", "Display", "Beam", "Quantum", "Baseline", "Input"];
		
		const words3 = ["Chamber", "Interface", "Coil", "Polymer", "Biosphere", "Platform", "Thruster", "Deflector", "Replicator", "Tricorder", "Operation", "Array", "Matrix", "Grid", "Sensor", "Mode", "Panel", "Storage", "Conduit", "Pod", "Hatch", "Regulator", "Display", "Inverter", "Spectrum", "Generator", "Cloud", "Field", "Terminal", "Module", "Procedure", "System", "Diagnostic", "Device", "Beam", "Probe", "Bank", "Tie-In", "Facility", "Bay", "Indicator", "Cell"];

		console.log(words1[0]);

		function init() {
			// assigning dynamic page element to global variables
			let outputElement = document.getElementById("output");
			let button = document.getElementById("myButton")
			let output = "";

			// helper function to get a random word from a selected array
			function getRandomWord(rand, array){
				console.log(array[Math.floor(randScale * (array.length - 1))])
				return array[Math.floor(randScale * (array.length - 1))]
			}

			randScale = Math.random()
				output = getRandomWord(randScale, words1) + " " + getRandomWord(randScale, words2) + " " + getRandomWord(randScale, words3)
				outputElement.innerHTML = output;

			// randomly selects technobabble and
			button.onclick = function(e){
				randScale = Math.random()
				output = getRandomWord(randScale, words1) + " " + getRandomWord(randScale, words2) + " " + getRandomWord(randScale, words3)
				outputElement.innerHTML = output;
			}
		}