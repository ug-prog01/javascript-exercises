const sumAll = function (start, end) {
	let sum = 0;

	if (typeof start != "number" || typeof end != "number") {
		return "ERROR";
	}

	if (start < 0 || end < 0) {
		return "ERROR";
	}

	let startIter = start > end ? end : start;
	let endIter = start < end ? end : start;
	for (let i = startIter; i <= endIter; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
