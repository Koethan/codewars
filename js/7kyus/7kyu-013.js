// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function(test, original) {

    //get a map of all the letters in word one and word two then compare to see if both maps equal each other
    let mapOne = {}
    let mapTwo = {}
    let letterLength = 0
    for(const letter of test.toLowerCase()){
      mapOne[letter] = mapOne[letter] + 1 || 1
    }
    for(const letter of original.toLowerCase()){
      mapTwo[letter] = mapTwo[letter] + 1 || 1
    }
    for(const letter in mapOne){
      if(mapOne[letter] === mapTwo[letter]){
        letterLength+= mapOne[letter]
      }
    }
    if(test.length !== original.length){
      return false
    }else if(letterLength === original.length){
      return true
    }else{
      return false
    }
  }

//   // write the function isAnagram
// var isAnagram = function(test, original) {
//     var t = test.toLowerCase().split('').sort().join('');
//     var o = original.toLowerCase().split('').sort().join('');
//     return (t==o)?true:false;
//   };

  