const palindromes = function (toTest) {
	toTest = toTest.trim().replace(/[^\w\s]/gi, '').replaceAll(' ', '').toLowerCase();
	if (toTest == toTest.split('').reverse().join(''))
		return true;
	else
		return false;
};

// Do not edit below this line
module.exports = palindromes;
