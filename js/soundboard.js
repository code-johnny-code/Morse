

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'lime',
    interact: false,
    hideScrollbar: true
});

var audioEnabled = true;
function playSound(e) {
    if (audioEnabled) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return;
        const key = document.querySelector(`[data-key="${e.keyCode}"]`);
        audio.onended = function () {
            wavesurfer.empty();
            audioEnabled = true
        };
        wavesurfer.load(audio.src);
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
        audioEnabled = false;
    }
}

for (var letter in alphabet) {
    var newTD = document.createElement('td');
    newTD.setAttribute("data-key",alphabet[letter]["key"]);
    newTD.className = "key";
    var newKbd = document.createElement('kbd');
    newKbd.innerHTML = letter;
    var newSpan = document.createElement('span');
    newSpan.className = "sound";
    newSpan.innerHTML = alphabet[letter]["spoken"] + '<br>' + alphabet[letter]["code"];
    var newAudio = document.createElement("audio");
    newAudio.setAttribute("data-key",alphabet[letter]["key"]);
    newAudio.src = alphabet[letter]["audio"];
    newTD.appendChild(newKbd);
    newTD.appendChild(newSpan);
    newTD.appendChild(newAudio);
    if (document.getElementById("first-row").cells.length <= 12) {
        document.getElementById("first-row").appendChild(newTD);
    }
    else {
        document.getElementById("second-row").appendChild(newTD);
    }
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(function(key) {
    key.addEventListener('transitionend', removeTransition)
});
window.addEventListener('keydown', playSound);

