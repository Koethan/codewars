// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// function flickSwitch(arr){
//     let answer = []
//     let truth = true
//     arr.forEach(element => {
//       if(element === "flick"){
//         if(truth === true){
//           truth = false
//         }else{
//           truth = true
//         }
//       }answer.push(truth)
//     })
//      return answer
//    }

function flickSwitch(arr){
    let returning = true;
      return arr.map( (v) => {
        return (v === "flick") ? returning = !returning : returning;
      })
  }


