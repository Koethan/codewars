// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"



function replace(s){
    //coding and coding....
  //   let answer = ''
  //   for(let i = 0; i < s.length; i++){
  //     let lowerS = s.toLowerCase()
  //     if(lowerS[i]==='a' || lowerS[i]==='e' || lowerS[i]==='i' || lowerS[i]==='o' || lowerS[i]==='u'){
  //       answer += '!'
  //     }else{
  //       answer += s[i]
  //     }
  //   }
  //   return answer
    let arr = s.split('')
    let vowels = 'aeiouAEIOU'
    let answerArr = arr.map((char) => {
      if(vowels.includes(char)){
        return '!'
      }else{
        return char
      }
    })
    return answerArr.join('')
    
    
  }

//   const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');