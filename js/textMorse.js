let wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'lime',
    interact: false,
    hideScrollbar: true
});
let audioList = [];
let transmission = "";
let textOnly = false;

function textToMorse(form, sound) {
  transmission = "";
  audioList = [];
  textOnly = sound;
  let userInput = form.formText.value;
  let userInputArray = userInput.split(' ');
  let codedOutput = "";
  for (let word of userInputArray) {
      word = word.replace(/[^0-9a-z.,/.,?!()@-]/gi, '');
      for (let character of word) {
          if (!isNaN(character)) {
              let charObject = numbers[character];
              codedOutput = codedOutput + charObject.code + ' ';
              audioList.push(charObject.audio)
          }
          else if (character.toUpperCase() in alphabet) {
              let charObject = alphabet[character.toUpperCase()];
              codedOutput = codedOutput + charObject.code + ' ';
              audioList.push(charObject.audio)
          }
          else {
              let charObject = punctuation[character];
              codedOutput = codedOutput + charObject.code + ' ';
              audioList.push(charObject.audio)
          }
      }
      codedOutput = codedOutput + ' | ';
      audioList.push("sounds/space.ogg")
  }
  const codeText = document.getElementById("code-text");
  codeText.innerHTML = codedOutput.slice(0, -2);
  if (textOnly) {
      playTransmission(audioList);
  }
}

function playTransmission(audioList) {
  let index = 1;
  let audio = document.createElement('audio');
  audio.src = audioList[0];
  console.log(audio.src);
  if (audio.src === "sounds/space.ogg") {
  }
  else {
      wavesurfer.load(audioList[0]);
  }
  audio.play();
  audio.onended = function() {
      wavesurfer.empty();
      if(index < audioList.length){
          wavesurfer.load(audioList[index]);
          audio.src= audioList[index];
          audio.play();
          index++;
      }
  }
}
