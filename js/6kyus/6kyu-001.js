// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    //happy coding!
    //create a map of all the times a number appears in the array
    //loop through the map and modulo to see if its odd.
    //return the odd number
    let answer;
    let objMap = {}
    A.forEach((number)=>{
      objMap[number] = objMap[number] + 1 || 1
    })
    for(const number in objMap){
      if (objMap[number] % 2 === 1){
        answer = number
      }
    }
    return Number(answer)
  }



//   function findOdd(A) {
//     var obj = {};
//     A.forEach(function(el){
//       obj[el] ? obj[el]++ : obj[el] = 1;
//     });
    
//     for(prop in obj) {
//       if(obj[prop] % 2 !== 0) return Number(prop);
//     }
//   }