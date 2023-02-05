function fixClosingDivTag(html){
    //close </div> tag

    let arr = html.split(' ')
    let secondDiv = 0
    // let answer = ''
    let hold = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '<div>'){ 
            if(secondDiv % 2 === 0){
                hold.push('<div>')
                secondDiv += 1
            }else{
                hold.push('</div>')
                secondDiv += 1
            }
        }else{
            hold.push(arr[i])
        }
        

    }
    return hold.join(' ')

}

console.log(fixClosingDivTag('<div> hello world <div>'))
console.log(fixClosingDivTag('<div> <div> <div>'))
console.log(fixClosingDivTag('<div> <div> hello world <div> <div>'))