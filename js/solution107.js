function isPangram(string){
    //make an object for a - z set them all to 0
    //make string lowercase
    //loop through string and add each letter to object.
    //loop through object keys and check each value if its greater than 0
    //if not returns false, if true all letters a-z are in the string
    let count = 0
    let objMap = {
      a:0,
      b:0,
      c:0,
      d:0,
      e:0,
      f:0,
      g:0,
      h:0,
      i:0,
      j:0,
      k:0,
      l:0,
      m:0,
      n:0,
      o:0,
      p:0,
      q:0,
      r:0,
      s:0,
      t:0,
      u:0,
      v:0,
      w:0,
      x:0,
      y:0,
      z:0,
    }
    
    for(const i in string){
      objMap[string.toLowerCase()[i]] += 1
    }
        for(const letter in objMap){
            // console.log(objMap[letter] === 0)
          if(objMap[letter] === 0){
            count ++
        }
  }
  return (count<1) 
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram."))

// function isPangram(string) {
//     const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];
  
//     return alphabetList.every((letter) => string.toLowerCase().includes(letter));
//   }