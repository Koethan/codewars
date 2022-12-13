// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


function removeExclamationMarks(s) {
    let newArr = s.split('')
    let answer = []
    newArr.forEach((char) => {
      if(char !="!"){
        answer.push(char)
      }
    })
    let solution = answer.join('')
    return solution
  }


//   function removeExclamationMarks(s) {
//   return s.split('!').join('');
// }