// You need to write a function, that returns the first non-repeated character in the given string.

// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, and None in Python.

// You can assume, that the input string has always non-zero length.

// Example
// firstNonRepeated("test") // returns "e"
// firstNonRepeated("teeter") // returns "r"
// firstNonRepeated("trend") // returns "t" (all the characters are unique)
// firstNonRepeated("aabbcc") // returns null (all the characters are repeated)


function firstNonRepeated(s) {
    let hashMap = {}
    for(let i = 0; i < s.length; i++){
      hashMap[s[i]] = hashMap[s[i]] + 1 || 1
    }
    let arr = []
    for(const letter in hashMap){
      if(hashMap[letter] === 1){
        return letter
      }
      arr.push(hashMap[letter])
    }
    if(arr.every((x)=> x > 1)){
      return null
    }
  }

//   function firstNonRepeated(s) {
//     for(var i = 0; i < s.length; i++) {
//       if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
//         return s[i]
//       }
//     }
//     return null
//   }
//using a for loop we go through the string, then we check the current letters index of in the string against the current letters last index of in the string. If they are equal that means that the letter is not repeated throughout the string, if they are different, that means that the letter can be found somewhere else in the string.