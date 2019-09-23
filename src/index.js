const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let decodedStr = '';

	while (expr.length) {
		let char = expr.slice(0, 10);
		let key = '';

		while (char.length) {
			let charElem = char.slice(0, 2);
			char = char.slice(2, char.length);

			switch (charElem) {
				case '10':
					key = key + '.';
					break;
				case '11':
					key = key + '-';
					break;
				case '**':
					decodedStr = decodedStr + ' ';
					char = '';
					break;
				default:
					null;
			}
		}

		for (let morseSymb in MORSE_TABLE) {
			if (key === morseSymb) decodedStr = decodedStr + MORSE_TABLE[morseSymb];
		}

		expr = expr.slice(10, expr.length);
	}
	return decodedStr;
}

module.exports = {
	decode
}