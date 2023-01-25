// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
    let sheepStr = ''
    for(let i = 1; i <= num; i++){
      sheepStr +=  `${i} sheep...`
    }
    return sheepStr
  }

//   countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``