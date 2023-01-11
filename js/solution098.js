function flattenArr(arr){
    let flatArr = []
    arr.forEach((element)=> {
        if(Array.isArray(element)) {
            flatArr = flatArr.concat(flattenArr(element))
        } else {
            flatArr.push(element)
        }
    })
    return flatArr
}

console.log(flattenArr([1,2,[3,4],[5,[6,7]]]))