//P - Parameters
//R - Returns
//E - Examples
//P - Pseudocode

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase=function(){
    //your code here
    let wordArr = this.split(' ')
    let answer = []
    
    wordArr.forEach((word) => {
      answer.push(word[0].toUpperCase() + word.slice(1))
    })
    return answer.join('')
  }

console.log('hello case'.camelCase())

// String.prototype.camelCase=function(){
//     return this.split(' ').map(function(word){
//      return word.charAt(0).toUpperCase() + word.slice(1);
//    }).join('');
//  }