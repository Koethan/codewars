// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let numArr = String(num).split('').map((num)=> {
        return Number(num)
    })
    let answer = []
    for(let i = 0; i < numArr.length; i++){
        answer.push(numArr[i] ** 2)
    }
    let astring = answer.join('')
    return Number(astring)
}



// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));