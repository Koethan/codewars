// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
      let wordArr = s.split(' ')
      let answer = wordArr[0].length
      for(const char of wordArr){
        if(char.length < answer){
          answer = char.length
        }
      }
      return answer
    }

    // function findShort(s){
    //     return Math.min(...s.split(" ").map (s => s.length));
    // }