const removeFromArray = function (valArray, ...args) {
	let retArray = []
	retArray = valArray.filter(val => !args.includes(val));
	return retArray;
};

// Do not edit below this line
module.exports = removeFromArray;
