// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    // your code here
    if(array.length === 0){
      return 0
    } else{
      return array.reduce((a,b)=> a + b)/ array.length
    }

    return array.length === 0 ? 0 : array.reduce((a,b) => a + b, 0) / array.length
  }