// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    let answer =  []
    
    for(let i = 0; i < birds.length; i++){
      if(!geese.includes(birds[i])){
        answer.push(birds[i])
      }
    }
    return answer
    
  
    // return an array containing all of the strings in the input array except those that match strings in geese
  };
  //get current geese from geese arrray
  //see if its included in the birds array
  //remove it from the birds array

//   function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(b => !geese.includes(b));
//   };