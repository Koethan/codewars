// Your task is to create a change machine.

// The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

// The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

// This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.

function changeMe(moneyIn){
    let twenty = '20p'
    let ten = '10p'
    let one = ['20p','20p','20p','20p','20p']
    let oneString = one.join(' ')
    if(moneyIn === '£1') {
      return oneString
    }else if(moneyIn === '£2'){
      return `${oneString} ${oneString}`
    }else if(moneyIn === '£5'){
      return `${oneString} ${oneString} ${oneString} ${oneString} ${oneString}`
    }else if(moneyIn === '50p'){
      return `${twenty} ${twenty} ${ten}`
    }else if(moneyIn === '20p'){
      return `${ten} ${ten}`
    }else{
      return moneyIn
    }
  }

//   function changeMe(moneyIn){
//     switch (moneyIn) {
//       case '£5':
//         var change = Array(25).fill('20p');
//         return change.join(' ');
//       case '£2':
//         var change = Array(10).fill('20p');
//         return change.join(' ');
//       case '£1':
//         var change = Array(5).fill('20p');
//         return change.join(' ');
//       case '50p':
//         return '20p 20p 10p';
//       case '20p':
//         return '10p 10p';
//       default:
//         return moneyIn;
//     }
//   }


// function changeMe(moneyIn){
// 	switch (moneyIn) {
//   	case '£5': return '20p '.repeat(25).trim()
//   	case '£2': return '20p '.repeat(10).trim()
//   	case '£1': return '20p '.repeat(5).trim()
//   	case '50p': return '20p 20p 10p'
//   	case '20p': return '10p 10p'
//     default: return moneyIn
//   }
// }

