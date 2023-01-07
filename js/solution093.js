// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


function duplicateEncode(word){
    let littleWord = word.toLowerCase()
    let objMap = {}
    let answerString = ''
    for(const letter of littleWord){
      objMap[letter] = objMap[letter] + 1 || 1
    }
  //   for(const letter in objMap){
  //     if(objMap[letter]===1){
  //       answerString += '('
  //     } else if (objMap[letter]>1) {
  //       answerString += ')'
  //     }
  //   }
    for(let i = 0; i<littleWord.length; i++){
      if(objMap[littleWord[i]]===1){
          answerString += '('
        } else if (objMap[littleWord[i]]>1) {
          answerString += ')'
        }
    }
    return answerString
  }

console.log(duplicateEncode('recede'))

// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//   }