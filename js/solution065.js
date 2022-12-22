// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let arrString = string.split('')
    let newString = ''
      for(let i = 0; i < arrString.length; i++){
        if(arrString[i] === arrString[i].toUpperCase()){

            newString += ' '
            newString += string[i]
            
    
        }else{
          newString += string[i]
        }
      }
    return newString
  }

  console.log(solution('camelCase'))

//   const solution = string => {
//     return [...string].map((char) => {
//       return (char === char.toUpperCase()) ? ` ${char}` : char;
//     }).join('');
//   }

// function solution(string) {
//     let newString = ''
//       for(let i = 0; i < string.length; i++){
//         if(string[i] === string[i].toUpperCase()){
//           newString += ' '
//           newString += string[i]
//         }else{
//           newString += string[i]
//         }
//       }
//     return newString
//   }