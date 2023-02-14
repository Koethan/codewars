//twosum brute force

function twoSum(arr, target){
    let answer;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; i<arr.length; i++){
        if(arr[i] + arr[j] === target){
            answer = [i,j]
        }
    }
}
return answer
}

const nums1 = [2,7,11,15]

console.log(twoSum(nums1,17))
console.log(twoSum(nums1,9))
//nested for loops give quadratic run time! not good