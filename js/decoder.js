let decodedMessage = "";
let messageBox = document.getElementById('message-box');

function decodeMorse(morse) {
    decodedMessage = "";
    let code = morse.formText.value;
    let codeArray = code.split(' ');
    for (let beeps of codeArray) {
        if (beeps === '|') {
            decodedMessage = decodedMessage + ' '
        }
        else {
            let decodedCharacter = findKey(beeps);
            decodedMessage = decodedMessage + decodedCharacter;
        }
    }
    const decodedText = document.getElementById("decoded-text");
    decodedText.innerHTML = decodedMessage
    }

function findKey(beeps) {
    for (let letter in alphabet) {
        if (alphabet[letter].code === beeps) {
            return letter
        }
    for (let number in numbers) {
        if (numbers[number].code === beeps) {
            return number
        }
    }
    for (let character in punctuation) {
        if (punctuation[character].code === beeps) {
            return character
        }
    }
    }
    return "Unknown code"
}

function addDitDah(e) {
    console.log(e);
    if (e.keyCode === 90) {
        messageBox.value = messageBox.value + '•';
    }
    if (e.keyCode === 88) {
        messageBox.value = messageBox.value + '−';
    }
    if (e.keyCode === 32) {
        messageBox.value = messageBox.value + ' ';
    }
}

window.addEventListener('keydown', addDitDah);