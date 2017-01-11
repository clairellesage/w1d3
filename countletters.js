// Write a function countLetters that can (return to) 
//us us all the unique characters that exist in a string that is passed into the function.

function countLetters(string) {
	var lowerCaseString = string.toLowerCase().split(' ').join('')
	var counter = {}
	var tally = 0
	for (var i = 0; i < lowerCaseString.length; i++) {
		if (!counter.hasOwnProperty(lowerCaseString[i])) {
			counter[lowerCaseString[i]] = 1;
		} else {
			counter[lowerCaseString[i]] += 1;	
		}
	
	}
return counter;
}

console.log(countLetters("Claireeee Lesage"))