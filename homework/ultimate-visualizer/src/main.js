const NUM_SAMPLES = 4096;

      const minimumStrength = 100;

      // 1 - get reference to the button
      let startButton = document.querySelector("#start-btn");
      let endButton = document.querySelector("#end-btn");

      // get references to debugging
      let freqTracker = document.querySelector("#frequency-tracker");
      let noteTracker = document.querySelector("#note-tracker");

      // 2 - create a new AudioContext object
      let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

      // 3 - create an analyser node
      let analyserNode = audioCtx.createAnalyser();
      analyserNode.minDecibels = -60;
      analyserNode.maxDecibels = -20;

      let sourceNode;

      // 4 - set FFT size
      analyserNode.fftSize = NUM_SAMPLES;

      // 5 - create an array to store frequency data
      let data = new Uint8Array(NUM_SAMPLES / 2);

      // 6 - request microphone access when button is clicked
      startButton.onclick = () => {
        // Ask the user for microphone permission
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then((stream) => {
            // Create a source node from microphone input
            sourceNode = audioCtx.createMediaStreamSource(stream);

            // Connect microphone to analyser
            sourceNode.connect(analyserNode);

            // No need to connect to speakers!
            return audioCtx.resume();
          })
          .then(() => {
            startButton.disabled = true;
            startButton.textContent = "Microphone Active";

            loop();
          })
          .catch((error) => {
            console.error("Microphone access failed:", error);
          });
      };

      endButton.onclick = () =>{
        analyserNode.disconnect(sourceNode);
      }

      function detectNote(magnitudes, sampleRate, fftSize){
        bestIndex = 1

        for(let i = 2; i < magnitudes.length - 1; i++){
          if(magnitudes[i] > magnitudes[bestIndex]){
            bestIndex = i;
          }
        }

        if (magnitudes[bestIndex] < minimumStrength){
            return console.log("No note");
        }

        frequency = bestIndex * sampleRate / fftSize;

        // Round to the closest semitone; A4 = note number 69.
        noteNumber = Math.round(69 + 12 * Math.log2(frequency / 440))

        noteNames = ["C", "C#", "D", "D#", "E", "F",
                    "F#", "G", "G#", "A", "A#", "B"]
        noteName = noteNames[noteNumber % 12]
        octave = Math.floor(noteNumber / 12) - 1

        freqTracker.innerHTML = frequency;
        noteTracker.innerHTML = noteName + octave;
      }

      function loop() {
        // 7 - schedule next frame
        requestAnimationFrame(loop);

        // 8 - populate array with frequency data
        analyserNode.getByteFrequencyData(data);

        detectNote(data, audioCtx.sampleRate, analyserNode.fftSize)
      }