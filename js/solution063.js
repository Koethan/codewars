// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

function twoSum(arr,sum){
    const pairs = [] // create the home for the pairs
    const nums = {} // create the object to look through

    for(const num1 of arr){ // looping through the array they gave us
        const num2 = sum - num1 // creating the opposite number of the sum minus the iteration ex: 4-1 = 3;so we look for 3
        if(nums[num2]){ //if the opposite number is in the object, we add the number and the opposite as a pair that adds up to the sum
            pairs.push([num1,num2])
        }else{
            nums[num1] = 1 // if the opposite number is not in the object, we fill the object by just making that number 1
        }
    }
    return pairs
}

function twoSum(arr,sum){
    const pairs = []
    const nums = {}
  
    for(const num1 of arr){
      const num2 = sum - num1
      if(nums[num2]){
        pairs.push([num1,num2])
      }else{
        nums[num1] = 1
      }
    }
    return pairs
  }
  console.log(twoSum([1, 2, 2, 3, 4],4),'[[2, 2], [3, 1]]')