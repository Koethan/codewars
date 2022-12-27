// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    //your code here
  //   const result = arr.filter(element => arr.indexOf(element, 0) % 2 == 0)
    let answer = []
    let count = 0
    for (let i=0; i< arr.length+1; i++){
      answer.push(arr[count])
      count+=2
    }
    let finalAnswer = answer.filter(element => element != undefined)
    return finalAnswer
  }

//   function removeEveryOther(arr){
//     return arr.filter(function(elem, index) {
//       return index % 2 === 0;
//     });
//   }