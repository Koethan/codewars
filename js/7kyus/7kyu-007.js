// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let combinedStr = s1 + s2
    let array = combinedStr.split('').sort()
    let singleLetters = ''
    for(let i = 0; i < array.length; i++){
      if (array[i] != array[i+1]){
        singleLetters += array[i]
      }
    }
    
    
    return (singleLetters)
  }

//   const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
//spread out a set in an array of s1 + s2 to only get the unique values, then sort it to put it in alphabetical order, then join on every character to put the string together