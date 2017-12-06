var decodedMessage = "";

function decodeMorse(morse) {
    decodedMessage = "";
    var code = morse.formText.value;
    console.log(code);
    var codeArray = code.split(' ');
    for (var beeps of codeArray) {
        if (beeps === '|') {
            decodedMessage = decodedMessage + ' '
        }
        else {
            var decodedCharacter = findKey(beeps);
            decodedMessage = decodedMessage + decodedCharacter;
        }
    }
    const decodedText = document.getElementById("decoded-text");
    decodedText.innerHTML = decodedMessage
    }

function findKey(beeps) {
    for (var letter in alphabet) {
        if (alphabet[letter].code === beeps) {
            return letter
        }
    for (var number in numbers) {
        if (numbers[number].code === beeps) {
            return number
        }
    }
    for (var character in punctuation) {
        if (punctuation[character].code === beeps) {
            return character
        }
    }
    }
    return "Unknown code"
}