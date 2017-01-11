
function countLetters(string) {
	var newString = string.toLowerCase().split(' ').join('')
	var counter = new Object();
	for (var i = 0; i < newString.length; i++) {
		var array = []
		if (!counter.hasOwnProperty(newString[i])) {
			counter[newString[i]] = [newString.indexOf(newString[i])]
		} else {
			counter[newString[i]].push(i);	
		}
	}
return counter;
}

console.log(countLetters("lighthouse in the house"))