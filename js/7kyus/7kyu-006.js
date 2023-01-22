// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n){
    console.log(0%5,12%5,30%5,-5%5)
    if(n === 0){
      return 0
    }else{
      let answer = n
      while(answer % 5 != 0){
        answer++
      }
      return answer
    }
}


// function roundToNext5(n){
//     return Math.ceil(n/5)*5;
//   }
//this divides the input by 5 then rounds up to a whole number then multiplies it by 5 to get the multiple return. ex 2/5->1->1*5->5, 9/5->2->2*5->10 etc...