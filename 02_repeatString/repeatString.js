const repeatString = function (value, times) {
	let finalValue = '';
	if (times < 0)
		return 'ERROR';

	for (let i = 0; i < times; i++) {
		finalValue += value;
	}
	return finalValue;
};

// Do not edit below this line
module.exports = repeatString;
