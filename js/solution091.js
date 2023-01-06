// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    let lstr = str.toLowerCase()
    let arr = lstr.split('')
    let vowelList = ['a','e','i','o','u',' ']
    let constList = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
    let answer = 0
    for(let i = 0; i<arr.length; i++){
      if(constList.includes(arr[i])){
        answer++
      }
    }
    return answer
  }


//   const consonantCount = (str) => {
// 	let count = 0
// 	for (const c of str) {
// 		if ("BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz".indexOf(c) >= 0) count++
// 	}

// 	return count
// }