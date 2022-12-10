// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr){
      let sum = 0
      for(let i =0; i < arr.length; i++){
        if(Math.sign(arr[i]) === 1 || Math.sign(arr[i]) === 0){
          sum += arr[i]
        }
      }
      return sum
    }


    // function positiveSum(arr) {
    //     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
    //  }
    // reduce basically returns the sum of all the elements in an array, here the a is the accumulator and the b is the current value that the iteration is on from the array, the zero at the end of the method is what we start off on. the function we are doing is a ternary orperator. the syntax is (condition ? exprIfTrue : exprIfFalse). here we say if b(currentvalue) is greater thatn 0(or positive) then add a+b : if b is not greater than 0(or negative), then add a+0



// function positiveSum(arr) {
//     let sum = 0
//     arr.forEach(index => {
//       if(Math.sign(arr[index-1]) === 1 || Math.sign(arr[index-1]) === 0) {
//         sum += arr[index-1]
//       }
      
//     })
//     return sum
//   }

// console.log(positiveSum([1,2,3,4,5]))