let decodedMessage = "";

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