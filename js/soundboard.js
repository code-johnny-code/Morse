
let wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'lime',
    interact: false,
    hideScrollbar: true
});

let audioEnabled = true;

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

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

function keyBuilder(object) {
    for (let key in object) {
        let newTD = document.createElement('td');
        newTD.setAttribute("data-key",object[key]["key"]);
        newTD.className = "key";
        let newKbd = document.createElement('kbd');
        newKbd.innerHTML = key;
        let newSpan = document.createElement('span');
        newSpan.className = "sound";
        newSpan.innerHTML = object[key]["spoken"] + '<br>' + object[key]["code"];
        let newAudio = document.createElement("audio");
        newAudio.setAttribute("data-key",object[key]["key"]);
        newAudio.src = object[key]["audio"];
        newTD.appendChild(newKbd);
        newTD.appendChild(newSpan);
        newTD.appendChild(newAudio);
        if (isNaN(key)) {
            if (document.getElementById("first-row").cells.length <= 12) {
                document.getElementById("first-row").appendChild(newTD);
            }
            else {
                document.getElementById("second-row").appendChild(newTD);
            }
        }
        else {
            document.getElementById("number-row").appendChild(newTD);
        }
    }
}

keyBuilder(alphabet);
keyBuilder(numbers);

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(function(key) {
    key.addEventListener('transitionend', removeTransition)
});

window.addEventListener('keydown', playSound);