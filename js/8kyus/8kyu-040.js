// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

function remove (string) {
    let strArray = string.split('')
    if(strArray[strArray.length -1] === '!'){
      strArray.pop()
    }
    
    return strArray.join('')
    
  }

//   function remove(s) {
//   return s.endsWith('!') ? s.slice(0, -1) : s;
// }