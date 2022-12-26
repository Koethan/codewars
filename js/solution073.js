// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    let check = str.slice(-ending.length)
    if(ending === check || ending === ""){
      return true
    }else{return false}
  }

//   function solution(str, ending){
//     return str.endsWith(ending);
//   }