// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age
// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

// ##Examples:

// age = 27   =>   20-40
// age = 5    =>   4-5
// age = 17   =>   15-20

// function datingRange(age){
//     //return min-max
//     let min;
//     let max;
//     if(age <= 14){
//       min = age - 0.10 * age
//       max = age + 0.10 * age
//     }else{
//       min = age/2 + 7
//       max = (age - 7) * 2
//     }
    
//     return `${Math.floor(min)}-${Math.floor(max)}`
//   }ppo

function datingRange(age){
    var min = age > 14 ? age/2 + 7 : age - (0.10 * age);
    var max = age > 14 ? (age-7)*2 : age + (0.10 * age);
    
    return Math.floor(min) + "" + '-' + Math.floor(max) + ""
  }