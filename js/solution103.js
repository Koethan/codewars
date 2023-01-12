// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]



var flatten = function (array){
    // TODO: Program me
    let flatArr = []
    array.forEach((element) => {
       if(Array.isArray(element)){
         element.forEach(x => flatArr.push(x))
       }else{
         flatArr.push(element)
       }
    })
    return flatArr
  }

//   const flatten = (array) => [].concat(...array);