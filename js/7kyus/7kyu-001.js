// These dots at the end also add to the string length.

// So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H..."

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

function trim(str, size) {
    if(str.length <= size){
      return str
    }
    else{
      let trimmedStr;
      if(size <= 3){
        trimmedStr = str.slice(0,size)
      }
      else{
        trimmedStr = str.slice(0, size-3)
      }
      trimmedStr+= '...'
      return trimmedStr
    }
  }

//   const trim = (str, size) => str.length > size ? `${str.slice(0, str.length < 3 ? size : size - 3)}...` : str;