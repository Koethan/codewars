// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    let sep = x.split(' ')
    let answer = ''
    sep.forEach(letter => {
      if (letter != ''){
        answer += letter
      }
    })
    return answer
  }

//   function noSpace(x){return x.split(' ').join('')}

