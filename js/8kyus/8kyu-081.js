// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three){
    //Solution
    let size = one.length;
    let answer = ''
    for(let x = 0; x < size; x++){
      answer += one[x]
      answer += two[x]
      answer += three[x]
    }
    return answer
  }

//   function tripleTrouble(one, two, three){
//     let x = ''
//       for(i = 0; i<one.length; i++) {
//         x +=  one[i] + two[i] + three[i]
//       }
//     return x
//    }