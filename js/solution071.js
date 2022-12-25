// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
	// your code here
  let stringArr = string.split('')
  let answerArr = []
  for(let i = 0; i < stringArr.length; i++){
    if(stringArr[i] == '5'){
      answerArr.push('S')
    }
    else if(stringArr[i] === '0'){
      answerArr.push('O')
    }
    else if(stringArr[i] === '1'){
      answerArr.push('I')
    }else{
      answerArr.push(string[i])
    }
  }
  let finalAnswer = answerArr.join('')
  return finalAnswer
}

console.log(correct('L0ND0N'))

// function correct(string) {
// 	return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
// }