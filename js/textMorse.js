var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'lime',
    interact: false,
    hideScrollbar: true
});
var audioList = new Array();
var transmission = "";
//    Note for transmission construction: "The letters of a word are separated by a space
// equal to three dots (one dash), and the words are separated by a space equal to seven dots."
function textToMorse(form) {
  transmission = "";
  audioList = [];
  var userInput = form.formText.value;
  var userInputArray = userInput.split(' ');
  var codedOutput = "";
  for (var word of userInputArray) {
      word = word.replace(/[^0-9a-z]/gi, '');
      for (var letter of word) {
          if (letter in ['0','1','2','3','4','5','6','7','8','9']) {
              var letterObject = numbers[letter];
              codedOutput = codedOutput + letterObject.code + ' ';
              buildTransmission(letterObject.audio)
          }
          else {
              var letterObject = alphabet[letter.toUpperCase()];
              codedOutput = codedOutput + letterObject.code + ' ';
              buildTransmission(letterObject.audio)
          }
      }
      codedOutput = codedOutput + '| ';
      audioList.push("sounds/space.ogg")
  }
  const codeText = document.getElementById("code-text");
  codeText.innerHTML = codedOutput.slice(0, -2);
  playTransmission(audioList);
}

function buildTransmission(audio) {
  audioList.push(audio);
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
          wavesurfer.load(audioList[index])
          audio.src= audioList[index];
          audio.play();
          index++;
      }
  }
}