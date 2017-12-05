var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'lime',
    interact: false,
    hideScrollbar: true
});
var audioList = new Array();
var transmission = "";

function textToMorse(form) {
  transmission = "";
  audioList = [];
  var userInput = form.formText.value;
  var userInputArray = userInput.split(' ');
  var codedOutput = "";
  for (var word of userInputArray) {
      word = word.replace(/[^0-9a-z]/gi, '');
      for (var character of word) {
          if (!isNaN(character)) {
              var charObject = numbers[character];
              codedOutput = codedOutput + charObject.code + ' ';
              audioList.push(charObject.audio)
          }
          else {
              var charObject = alphabet[character.toUpperCase()];
              codedOutput = codedOutput + charObject.code + ' ';
              audioList.push(charObject.audio)
          }
      }
      codedOutput = codedOutput + ' | ';
      audioList.push("sounds/space.ogg")
  }
  const codeText = document.getElementById("code-text");
  codeText.innerHTML = codedOutput.slice(0, -2);
  playTransmission(audioList);
}

function playTransmission(audioList) {
  var index = 1;
  var audio = document.createElement('audio');
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