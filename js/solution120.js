//twosum two pass hash map

function twoSum(nums, target){
const hashMap = {}
for(let i = 0; i< nums.length; i++){
    hashMap[nums[i]] = i //store each element in hash as key and its value as its index
}
for(let i = 0; i < nums.length; i++){
    let compliment = target - nums[i]
    if(hashMap[compliment] && hashMap[compliment] !== i){
        return[i,hashMap[compliment]]
    }
}

}

const num1 = [2,7,11,15]
console.log(twoSum(num1,9))