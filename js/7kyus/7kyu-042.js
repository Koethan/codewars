// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!


function capitalize(s){
    let answer = []
    let word1 = ''
    let word2 = ''
    for(let i = 0; i < s.length; i++){
      if(i%2===0){
        word1+= s[i].toUpperCase()
      }else{
        word1+= s[i]
      }
    }
    for(let i = 0; i < s.length; i++){
      if(i%2===0){
        word2+= s[i]
      }else{
        word2+= s[i].toUpperCase()
      }
    }
    
    answer.push(word1)
    answer.push(word2)
    return answer
  };

//   function capitalize(s){
//   const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
//   const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
//   return [even, odd];
// };