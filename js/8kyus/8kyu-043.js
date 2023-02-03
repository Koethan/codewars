// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let answer = 0
    x.forEach((number) => {
      answer += Number(number)
    })
    return answer
  }

// const sumMix=x=>x.reduce((a,b)=>+b+a,0)