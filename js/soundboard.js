function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

var audioEnabled = true;
function playSound(e) {
    if (audioEnabled) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`[data-key="${e.keyCode}"]`);
        if (!audio) return;

        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }
}

var i = 0;
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
    newTD.onclick = playSound;
    if (i <= 12) {
        document.getElementById("first-row").appendChild(newTD);
    }
    else {
        document.getElementById("second-row").appendChild(newTD);
    }
    i++;
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(function(key) {
    key.addEventListener('transitionend', removeTransition)
});
window.addEventListener('keydown', playSound);