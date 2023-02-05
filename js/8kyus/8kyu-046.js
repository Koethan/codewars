function camelLetters(string){
    let strArr = ''
    for(let i = 0; i < string.length; i++){
        if(i % 2 === 0){
            strArr += (string[i].toUpperCase())
        }else{
            strArr += (string[i].toLowerCase())
        }
    }
    return strArr
}

console.log(camelLetters("hello world"))