const fibonacci = function (num) {
	num = parseInt(num);
	if (typeof num !== "number" || num < 0)
		return "OOPS";
	if (num == 0)
		return 0;
	if (num == 1 || num == 2)
		return 1;

	let n1 = 0, n2 = 1, next_num;

	for (let i = 1; i < num; i++) {
		next_num = n1 + n2;
		n1 = n2;
		n2 = next_num;
	}

	return next_num;
};

// Do not edit below this line
module.exports = fibonacci;
