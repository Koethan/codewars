// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    let string = String(number)
    let split = string.split('')
  
    let answer = 0
    let arr = []
    split.forEach((number)=>{
      if(number === '0'){
        answer+=0
      }if(number === '-'){
        answer+=0
      }else{
        answer+=Number(number)
      }
      
    })
    return answer
  }

//   function sumDigits(number) {
//     return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
//   }