//two sum one pass optimal answer

function twoSum(nums, target){
    const hashMap = {}//create empty object to be our hashmap

    for(let i = 0; i < nums.length; i++){//loop through the nums array
        let compliment = target - nums[i]//this will be the compliment of the current iteration of the array
        if(complement in hashMap){//if the complement already exists in the hashmap, we have found the number we need to add to get the target
            return [hashMap[compliment], i]//return the current index of the iteration, and the saved index of the compliment that the current iteration will add to get the target
        }
        hashMap[nums[i]] = i;//if the compliment is not found, we add to our hashmap the current iteration number and its index as the value
    }
}

const num1 = [2,9,11,15]
console.log(twoSum(nums1, 11))