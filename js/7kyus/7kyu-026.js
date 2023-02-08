// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords (s) {
    let arr = s.split(' ')
    let unique = new Set(arr)
    let answer = Array.from(unique)
    return (answer.join(' '))
  }

//   function removeDuplicateWords (s) {
//     return [...new Set(s.split(' '))].join(' ');
//   }