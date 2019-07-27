export let counterAlgorithm = numberToIncrement => {
	let counterAsString = numberToIncrement.toString();
	let counterAsArray = counterAsString.split("");
	let counterArrayLength = counterAsArray.length;

	if (counterArrayLength < 6) {
		let placesToShift = 6 - counterArrayLength;

		for (let i = 0; i < placesToShift; i++) {
			counterAsArray.unshift("0");
		}

		return counterAsArray;
	}
};
