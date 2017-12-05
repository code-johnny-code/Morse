const alphabet = {
    "A": {
        "code": "• −",
        "spoken": "DIT-DAH",
        "audio": "sounds/A_morse_code.ogg",
        "key": "65"
    },
    "B": {
        "code": "- • • •",
        "spoken": "DAH-DIT-DIT-DIT",
        "audio": "sounds/B_morse_code.ogg",
        "key": "66"
    },
    "C": {
        "code": "− • − •",
        "spoken": "DAH-DIT-DAH-DIT",
        "audio": "sounds/C_morse_code.ogg",
        "key": "67"
    },
    "D": {
        "code": "− • •",
        "spoken": "DAH-DIT-DIT",
        "audio": "sounds/D_morse_code.ogg",
        "key": "68"
    },
    "E": {
        "code": "•",
        "spoken": "DIT",
        "audio": "sounds/E_morse_code.ogg",
        "key": "69"
    },
    "F": {
        "code": "• • − •",
        "spoken": "DIT-DIT-DAH-DIT",
        "audio": "sounds/F_morse_code.ogg",
        "key": "70"
    },
    "G": {
        "code": "− − •",
        "spoken": "DAH-DAH-DIT",
        "audio": "sounds/G_morse_code.ogg",
        "key": "71"
    },
    "H": {
        "code": "• • • •",
        "spoken": "DIT-DIT-DIT-DIT",
        "audio": "sounds/H_morse_code.ogg",
        "key": "72"
    },
    "I": {
        "code": "• •",
        "spoken": "DIT-DIT",
        "audio": "sounds/I_morse_code.ogg",
        "key": "73"
    },
    "J": {
        "code": "• − − −",
        "spoken": "DIT-DAH-DAH-DAH",
        "audio": "sounds/J_morse_code.ogg",
        "key": "74"
    },
    "K": {
        "code": "− • −",
        "spoken": "DAH-DIT-DAH",
        "audio": "sounds/K_morse_code.ogg",
        "key": "75"
    },
    "L": {
        "code": "• − • •",
        "spoken": "DIT-DAH-DIT-DIT",
        "audio": "sounds/L_morse_code.ogg",
        "key": "76"
    },
    "M": {
        "code": "− −",
        "spoken": "DAH-DAH",
        "audio": "sounds/M_morse_code.ogg",
        "key": "77"
    },
    "N": {
        "code": "− •",
        "spoken": "DAH-DIT",
        "audio": "sounds/N_morse_code.ogg",
        "key": "78"
    },
    "O": {
        "code": "− − −",
        "spoken": "DAH-DAH-DAH",
        "audio": "sounds/O_morse_code.ogg",
        "key": "79"
    },
    "P": {
        "code": "• − • −",
        "spoken": "DIT-DAH-DIT-DAH",
        "audio": "sounds/P_morse_code.ogg",
        "key": "80"
    },
    "Q": {
        "code": "− − • −",
        "spoken": "DAH-DAH-DIT-DAH",
        "audio": "sounds/Q_morse_code.ogg",
        "key": "81"
    },
    "R": {
        "code": "• − •",
        "spoken": "DIT-DAH-DIT",
        "audio": "sounds/R_morse_code.ogg",
        "key": "82"
    },
    "S": {
        "code": "• • •",
        "spoken": "DIT-DIT-DIT",
        "audio": "sounds/S_morse_code.ogg",
        "key": "83"
    },
    "T": {
        "code": "−",
        "spoken": "DAH",
        "audio": "sounds/T_morse_code.ogg",
        "key": "84"
    },
    "U": {
        "code": "• • −",
        "spoken": "DIT-DIT-DAH",
        "audio": "sounds/U_morse_code.ogg",
        "key": "85"
    },
    "V": {
        "code": "• • • −",
        "spoken": "DIT-DIT-DIT-DAH",
        "audio": "sounds/V_morse_code.ogg",
        "key": "86"
    },
    "W": {
        "code": "• − −",
        "spoken": "DIT-DAH-DAH",
        "audio": "sounds/W_morse_code.ogg",
        "key": "87"
    },
    "X": {
        "code": "− • • −",
        "spoken": "DAH-DIT-DIT-DAH",
        "audio": "sounds/X_morse_code.ogg",
        "key": "88"
    },
    "Y": {
        "code": "− • − −",
        "spoken": "DAH-DIT-DAH-DAH",
        "audio": "sounds/Y_morse_code.ogg",
        "key": "89"
    },
    "Z": {
        "code": "− − • •",
        "spoken": "DAH-DAH-DIT-DIT",
        "audio": "sounds/Z_morse_code.ogg",
        "key": "90"
    }
};

const numbers = {
    "0": {
        "code": "− − − − −",
        "spoken": "DAH-DAH-DAH-DAH-DAH",
        "audio": "sounds/0_number_morse_code.ogg",
        "key": "48"
    },
    "1": {
        "code": "• − − − −",
        "spoken": "DIT-DAH-DAH-DAH-DAH",
        "audio": "sounds/1_number_morse_code.ogg",
        "key": "49"
    },
    "2": {
        "code": "• • − − −",
        "spoken": "DIT-DIT-DAH-DAH-DAH",
        "audio": "sounds/2_number_morse_code.ogg",
        "key": "50"
    },
    "3": {
        "code": "• • • − −",
        "spoken": "DIT-DIT-DIT-DAH-DAH",
        "audio": "sounds/3_number_morse_code.ogg",
        "key": "51"
    },
    "4": {
        "code": "• • • • −",
        "spoken": "DIT-DIT-DIT-DIT-DAH",
        "audio": "sounds/4_number_morse_code.ogg",
        "key": "52"
    },
    "5": {
        "code": "• • • • •",
        "spoken": "DIT-DIT-DIT-DIT-DIT",
        "audio": "sounds/5_number_morse_code.ogg",
        "key": "53"
    },
    "6": {
        "code": "− • • • •",
        "spoken": "DAH-DIT-DIT-DIT-DIT",
        "audio": "sounds/6_number_morse_code.ogg",
        "key": "54"
    },
    "7": {
        "code": "− − • • •",
        "spoken": "DAH-DAH-DIT-DIT-DIT",
        "audio": "sounds/7_number_morse_code.ogg",
        "key": "55"
    },
    "8": {
        "code": "− − − • •",
        "spoken": "DAH-DAH-DAH-DIT-DIT",
        "audio": "sounds/8_number_morse_code.ogg",
        "key": "56"
    },
    "9": {
        "code": "− − − − •",
        "spoken": "DAH-DAH-DAH-DAH-DIT",
        "audio": "sounds/9_number_morse_code.ogg",
        "key": "57"
    }
};