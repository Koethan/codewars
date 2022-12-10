// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    //your code here
    if ( Math.sign(number) === 1){
      return (number * -1)
    }
    else if( Math.sign(number)=== -1){
      return (Math.abs(number))
    }
    else{
      return 0
    }
  }


//   function opposite(number) {
//     return(-number);
//   }