// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    // TODO: complete
    let anchorPoint = url.indexOf('#')
    if(anchorPoint === -1){
      return url
    }
    return url.slice(0,anchorPoint)
  }