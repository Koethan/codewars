// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    // let myArr = String(n).split('').map((num)=>{return Number(n)})
    let myArr = Array.from(String(n)) //this makes an array of the number [1,0,2,9,7]

    myArr.sort(function(a,b){return b-a}) // this is how you order an array and return it in descending order ['9','7','2','1','0']

    return Number(myArr.join('')) // joins the array into one string then converts that string into one number 97210
}

console.log(descendingOrder(10297))

// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
//   }