// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]



multiplicationTable = function(size) {
    // insert code here
    let answer = []
    for(let i = 1; i <= size; i++){
      let temp = []
      for(let j = 1; j <= size; j++){
        temp.push(j*i)
      }
      answer.push(temp)
    }
    return answer
  }


//   multiplicationTable = function(size) {
//     var result = [];
  
//     for (var i = 0; i < size; i++) {
//       result[i] = [];
//       for(var j = 0; j < size; j++) {
//         result[i][j] = (i + 1) * (j + 1);
//       }
//     }
    
//     return result
//   }