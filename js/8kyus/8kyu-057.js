// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
    let answer=''
    for(let i = 0; i < s.length; i++){
      if(parseInt(s[i]) == s[i]){
        answer += s[i]
      }
    }
    return parseInt(answer)
  }

//   const getNumberFromString = (s) => parseInt(s.split("").filter(x => "0123456789".includes(x)).join(""))