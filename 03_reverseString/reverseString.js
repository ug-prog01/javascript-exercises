const reverseString = function (value) {
	let retValue = [];
	let index = 0;
	for (let i = value.length - 1; i >= 0; i--) {
		retValue[index] = value[i];
		index++;
	}
	return retValue.join('');
};

// Do not edit below this line
module.exports = reverseString;
