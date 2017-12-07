
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
        if (e instanceof KeyboardEvent) {
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
        else {
            const dataKey = e.getAttribute("data-key");
            const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
            if (!audio) return;
            const key = document.querySelector(`[data-key="${dataKey}"]`);
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
}

function keyBuilder(object) {
    for (let key in object) {
        let newTD = document.createElement('td');
        let firstRow = document.getElementById("first-row");
        let secondRow = document.getElementById("second-row");
        let numRow = document.getElementById("number-row");
        let puncRow = document.getElementById("punc-row");
        newTD.setAttribute("data-key",object[key]["key"]);
        newTD.className = "key";
        newTD.setAttribute("onclick", "playSound(this)");
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
        if (key.match(/[a-z]/i)) {
            if (firstRow.cells.length <= 12) {
                firstRow.appendChild(newTD);
            }
            else {
                secondRow.appendChild(newTD);
            }
        }
        else if (!isNaN(key)) {
            numRow.appendChild(newTD);
        }
        else {
            puncRow.appendChild(newTD);
        }
    }
}

//TODO: refactor building after combining alpha/num/punct objects
keyBuilder(alphaNumPlus);

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(function(key) {
    key.addEventListener('transitionend', removeTransition)
});

window.addEventListener('keydown', playSound);