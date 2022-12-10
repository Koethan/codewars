// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// function SeriesSum(n){
//   let s = 0
//   for(let i=0; i<n; i++){
//     s += 1 / (1 + i * 3)
//   }
//   return s.toFixed(2)
// }

function SeriesSum(n) {
  let s = 0
  for (let i = 0; i < n; i++) { //we add the fraction to s = 0 to start off, the fraction starts at 1/1 and each iteration gets (i*3) added to the denominator 1.
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2) //toFixed returns a string of a rounded number, the parameter passed is the number of digits it rounds to.
}

console.log(SeriesSum(1))
console.log(SeriesSum(2))
console.log(SeriesSum(5))

// function SeriesSum(n){
//   let s = 0
//   for(let i = 0; i <n; i++){
//     s+= 1/(1+ i*3)
//   }
//   return s.toFixed(n)
// }

// function SeriesSum(n){
//   let s = 0
//   for(let i = 0; i<n; i++){
//     s += 1 / (1 + i*3)
//   }
//   return s.toFixed(2)
// }
