// Consecutive Vowels
// You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from 'a'. Keep in mind that the consecutive vowel to 'u' is 'a' and the cycle continues.

// Return an integer with the length of the consecutive vowels found.

// This is better explained with a couple of examples:

// You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the 'a' and make your way right. The next vowel is an 'e' and it is the consecutive vowel, then 'i' and so forth until you get to 'u'. If you keep moving right you find 'a' which happens to be the consecutive vowel. Return 6.
// This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the 'a', then ignore the rest until you get to the 'e', which is the consecutive vowel, and so forth until you get to the 'o'. Return 4.
// Note
// For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. 'y' is not considered a vowel in this kata.

// Good luck!


function getTheVowels(word) {
    let vowels = 'aeiou'
    let holder = ''
    let count = 0
    for(let i = 0; i < word.length; i++){
      if(word[i] === vowels[count]){
        
        count++
        if(count > 4){
          count = 0
        }
        holder += word[i]
      }
    }
  //   console.log(holder.length)
  //   console.log(holder)
    return holder.length
  }





// function getTheVowels(word) {
//     let vowelSequence = "aeiou"; // correct sequence of vowels
//     let currentVowelIndex = 0; // index of vowel in the sequence currentlly being checked
//     let consecutiveCount = 0; // how many consecutive vowels are in the word

//     //  check every letter of the word against current vowel
//     for (letter of word) {
//       if (letter == vowelSequence[currentVowelIndex]) {
//         consecutiveCount++;
//         currentVowelIndex = (currentVowelIndex + 1) % vowelSequence.length;
//       }
//     }
    
//     return consecutiveCount;
//   }

// const getTheVowels = (word, vowels = 'aeiou') =>
//   word
//     .split('')
//     .reduce((count, char) => count + (char === vowels[count % vowels.length]), 0)