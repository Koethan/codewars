// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );




var capitals = function (word) {
	let capitalized = word.toUpperCase()
  let capitalIndex = []
  for(let i = 0; i < word.length; i++){
    if (word[i] === capitalized[i]){
      capitalIndex.push(i)
    }
  }
  return capitalIndex
};