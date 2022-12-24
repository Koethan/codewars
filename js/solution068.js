// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	// your code
  let answerArr = s.split('')
  let count = 1
  let check = ['-']
  let finalAnswer = []
  

  for(let i = 0; i < answerArr.length; i++){
    function pushIt(arr,n,info){
        for( let i = 1; i <=n; i++){
            arr.push(info)
        }
        arr.push('-')
      }
      pushIt(check, count, answerArr[i])
    count++
  }
  for (let i = 0; i < check.length-1; i++){
    if(check[i] === '-'){
        finalAnswer.push(check[i + 1].toUpperCase())
    }else {
        finalAnswer.push(check[i+1].toLowerCase())
    }
    
  }
  finalAnswer.pop()
  let answerString = finalAnswer.join('')
  return(answerString)
}

console.log(accum('RqaEzty'))

// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }