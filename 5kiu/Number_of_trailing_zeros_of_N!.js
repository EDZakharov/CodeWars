// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

//Solution
function zeros(n) {
	const kMax = Math.floor(Math.log(n) / Math.log(5))
	let summ = 0
	for (let k = 1; k <= kMax; ++k) {
		summ += Math.floor(n / Math.pow(5, k))
	}
	return summ
}
