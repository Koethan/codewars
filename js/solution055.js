// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function countChars(str){
    let objMap = {}
    
//after creating an empty object literal
//loop through the object wit for of
// check to see if char is in the object
//if true, increment the value by one, if not, create the key and set value to 1
//then return the map to show how many of each letter there are in the str.
    for (const char of str){ 
        objMap[char] = objMap[char] + 1 || 1
    }

    return objMap
}

console.log(countChars('abasssdzz'))

// function countChars(str){
//     //create obj
//     let countObj = {}
//     //loop -> check val exist ? val++ : val-1
//     for(const c of str){
//       if( countObj[c] ){
//         countObj[c]++
//       }else{
//         countObj[c] = 1
//       }
//     }
  
//     return countObj
    
//   }