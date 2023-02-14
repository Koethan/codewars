function gcf(num1,num2){
    let biggestNum = Math.max(num1,num2)
    let objMap = {}
    for(let i = 0; i<num1; i++){
        if(num1 % i === 0){
            objMap[i] = objMap[i] + 1 || 1
        }
    }
    for(let i = 0; i<num2; i++){
        if(num2 % i === 0){
            objMap[i] = objMap[i] + 1 || 1
        }
    }
    for(const char in objMap){
        console.log(objMap)
    }
    return objMap

}

console.log(gcf(30,12))

//run numbers 0 -> biggest number, divide the number by each iteration to get its factors.
//do the same for the smallest number and record the quotients to look for the biggest whole number shared by each 