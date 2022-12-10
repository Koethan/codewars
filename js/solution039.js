function lastSurvivor(letters, coords) {
    let newString = letters
    coords.forEach(element => {
        newString = letters.substr(0, element) + letters.substr(element, letters.length);
        console.log(newString)
    })
     


    // for (let i = 0; i < coords.length; i++){
    //     let index = coords[i]
    //     let answer = letters.replace(letters[index], '')
    //     console.log(answer)
    //     coords.shift()
    //     console.log(coords)
    // }
    
    // while ( letters.length > 2) {
    //   let index = coords[0]
    //   answer = letters.replace(letters[index], "")
    //   coords.shift()
    //   break;
    // }
    // return answer
}

(lastSurvivor('zbk',[0,1]))