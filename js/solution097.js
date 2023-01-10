//Return a flat array in the same order.

//this is the multiple level array
let mixedArr = [[1,2],3,[4,[5,6]]]

function flatten(arr){
    let flatArr = []
    //we use a loop for each element in the array
    arr.forEach((element) => {
        //we check to see if the element is an array or not
        if(Array.isArray(element)){
            //we want to fill the flattened array with the elements but again if the element is another array, we call it recursively until it comes back inn one level.
            flatArr = flatArr.concat(flatten(element))
        }else {
            //if the element is just a number we push it onto the flattened array
            flatArr.push(element)
        }
    })
    return flatArr
}

console.log(flatten(mixedArr))