//TWO SUM
//Given an array of integers nums and an integer target, return indicies of the two numbers such that they add up to target.
//You may not use the same elemtn twice, you can return the answer in any order.

// //example
// input: nums = [2,7,11,15], target = 9
// output: [0,1]
// //example
// input: nums = [3,2,4], target = 6
// output: [1,2]

var twoSum = function(nums, target){
    //create hash map to see if the target - the current number is in the map
    let map = new Map()
    //loop through the array
    for(let i = 0; i < nums.length; i++){
        //this holds the current element
        let num1 = nums[i]
        //this holds the pair that we need to find to make the target sum
        let num2 = target - num1
        //we check if the map already holds that pair, if it does return the answer array with the two indexes of the numbers that sum to the target answer.
        if (map.has(num2)){
            return [i, map.get(num2)]
        }
        //if the pair is not found, add the number and the index so we can refer back to the map if its pair is found.
        map.set(num1, i)
    }
}