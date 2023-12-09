// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

//Solution
function parse(data) {
	let outputArr = []
	let outputValue = 0
	data.split('').forEach((command) => {
		switch (command) {
			case 'i': {
				outputValue++
				break
			}
			case 'd': {
				outputValue--
				break
			}
			case 's': {
				outputValue *= outputValue
				break
			}
			case 'o': {
				outputArr.push(outputValue)
				break
			}
		}
	})
	return outputArr
}
