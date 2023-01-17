// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    //make an empty array
    //loop through iterable
    //if next [i] is different than current [i], add current [i] to list
    //need to find a way to check if were at the end of the string
    let arr = iterable
    let answer = []
    if(typeof iterable === 'string'){
      arr = iterable.split('')
    }
    for(let i = 0; i < arr.length; i++){
      if(arr[i] != arr[i+1]){
        answer.push(arr[i])
      }
    }
   return answer
  }

//   var uniqueInOrder=function(iterable){
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }