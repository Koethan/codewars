// Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).

function logicalCalc(array, op){
  
    let t = 0
    let f = 0
    array.forEach((element)=>{
      if(element === true){
        t++
      }if(element === false){
        f++
      }
    })
    console.log(t,f,op)
    
  
    
    if(op === "AND"){
      if(array.indexOf(false)===-1){
        return true
      }else{
        return false
      }
    }
    if(op === "OR"){
      if(array.indexOf(true)!==-1){
        return true
      }else{
        return false
      }
    }
    if(op === "XOR"){
     if(array.length < 2){
       return array[0]
     }
      let test = array[0] !== array[1]
      for(let i = 2; i < array.length; i++){
        test = test !== array[i]
      }
      return test
    }
  }


//   function logicalCalc(array, op)
// { 
//   var result = array[0];
//   for(var i = 1; i < array.length; i++)
//   {
//     if(op == "AND")
//     {
//       result = result && array[i];
//     }
//     if(op == "OR")
//     {
//       result = result || array[i];
//     }
//     if(op == "XOR")
//     {
//       result = result != array[i];
//     }
//   }
//   return result;
// }

